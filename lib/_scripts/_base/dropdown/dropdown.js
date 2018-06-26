import {mUtil} from '../_util';

const mDropdown = function (elementId, options) {
    //== Main object
    let the = this;
    let init = false;

    //== Get element object
    let element = mUtil.get(elementId);
    let body = mUtil.get('body');

    if (!element) {
        return;
    }

    //== Default options
    let defaultOptions = {
        toggle: 'click',
        hoverTimeout: 300,
        skin: 'light',
        height: 'auto',
        maxHeight: false,
        minHeight: false,
        persistent: false,
        mobileOverlay: true
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    let Plugin = {
        /**
         * Run plugin
         * @returns {mdropdown}
         */
        construct: function (options) {
            if (mUtil.data(element).has('dropdown')) {
                the = mUtil.data(element).get('dropdown');
            } else {
                // reset dropdown
                Plugin.init(options);

                Plugin.setup();

                mUtil.data(element).set('dropdown', the);
            }

            return the;
        },

        /**
         * Handles subdropdown click toggle
         * @returns {mdropdown}
         */
        init: function (options) {
            // merge default and user defined options
            the.options = mUtil.deepExtend({}, defaultOptions, options);
            the.events = [];
            the.eventHandlers = {};
            the.open = false;

            the.layout = {};
            the.layout.close = mUtil.find(element, '.m-dropdown__close');
            the.layout.toggle = mUtil.find(element, '.m-dropdown__toggle');
            the.layout.arrow = mUtil.find(element, '.m-dropdown__arrow');
            the.layout.wrapper = mUtil.find(element, '.m-dropdown__wrapper');
            the.layout.defaultDropPos = mUtil.hasClass(element, 'm-dropdown--up') ? 'up' : 'down';
            the.layout.currentDropPos = the.layout.defaultDropPos;

            if (mUtil.attr(element, 'm-dropdown-toggle') == "hover") {
                the.options.toggle = 'hover';
            }
            the.options.hoverTimeout = mUtil.attr(element, 'm-dropdown-timeout') || 300;
        },

        /**
         * Setup dropdown
         */
        setup: function () {
            if (the.options.placement) {
                mUtil.addClass(element, 'm-dropdown--' + the.options.placement);
            }

            if (the.options.align) {
                mUtil.addClass(element, 'm-dropdown--align-' + the.options.align);
            }

            if (the.options.width) {
                mUtil.css(the.layout.wrapper, 'width', the.options.width + 'px');
            }

            if (mUtil.attr(element, 'm-dropdown-persistent') == '1') {
                the.options.persistent = true;
            }

            if (the.options.toggle == 'hover') {
                mUtil.addEvent(element, 'mouseout', Plugin.hideMouseout);
            }

            // set zindex
            Plugin.setZindex();
        },

        /**
         * Toggle dropdown
         */
        toggle: function () {
            if (the.open) {
                return Plugin.hide();
            } else {
                return Plugin.show();
            }
        },

        /**
         * Set content
         */
        setContent: function (content) {
            var content = mUtil.find(element, '.m-dropdown__content').innerHTML = content;

            return the;
        },

        /**
         * Show dropdown
         */
        show: function () {
            if (the.options.toggle == 'hover' && mUtil.hasAttr(element, 'hover')) {
                Plugin.clearHovered();
                return the;
            }

            if (the.open) {
                return the;
            }

            if (the.layout.arrow) {
                Plugin.adjustArrowPos();
            }

            Plugin.eventTrigger('beforeShow');

            Plugin.hideOpened();

            mUtil.addClass(element, 'm-dropdown--open');

            if (mUtil.isMobileDevice() && the.options.mobileOverlay) {
                let zIndex = mUtil.css(element, 'z-index') - 1;

                let dropdownoff = mUtil.insertAfter(document.createElement('DIV'), element);

                mUtil.addClass(dropdownoff, 'm-dropdown__dropoff');
                mUtil.css(dropdownoff, 'z-index', zIndex);
                mUtil.data(dropdownoff).set('dropdown', element);
                mUtil.data(element).set('dropoff', dropdownoff);

                mUtil.addEvent(dropdownoff, 'click', function (e) {
                    Plugin.hide();
                    mUtil.remove(this);
                    e.preventDefault();
                });
            }

            element.focus();
            element.setAttribute('aria-expanded', 'true');
            the.open = true;

            Plugin.eventTrigger('afterShow');

            return the;
        },

        /**
         * Clear dropdown hover
         */
        clearHovered: function () {
            let timeout = mUtil.attr(element, 'timeout');

            mUtil.removeAttr(element, 'hover');
            mUtil.removeAttr(element, 'timeout');

            clearTimeout(timeout);
        },

        /**
         * Hide hovered dropdown
         */
        hideHovered: function (force) {
            if (force === true) {
                if (Plugin.eventTrigger('beforeHide') === false) {
                    return;
                }

                Plugin.clearHovered();
                mUtil.removeClass(element, 'm-dropdown--open');
                the.open = false;
                Plugin.eventTrigger('afterHide');
            } else {
                if (mUtil.hasAttr(element, 'hover') === true) {
                    return;
                }

                if (Plugin.eventTrigger('beforeHide') === false) {
                    return;
                }

                let timeout = setTimeout(function () {
                    if (mUtil.attr(element, 'hover')) {
                        Plugin.clearHovered();
                        mUtil.removeClass(element, 'm-dropdown--open');
                        the.open = false;
                        Plugin.eventTrigger('afterHide');
                    }
                }, the.options.hoverTimeout);

                mUtil.attr(element, 'hover', '1');
                mUtil.attr(element, 'timeout', timeout);
            }
        },

        /**
         * Hide clicked dropdown
         */
        hideClicked: function () {
            if (Plugin.eventTrigger('beforeHide') === false) {
                return;
            }

            mUtil.removeClass(element, 'm-dropdown--open');
            mUtil.data(element).remove('dropoff');
            the.open = false;
            Plugin.eventTrigger('afterHide');
        },

        /**
         * Hide dropdown
         */
        hide: function (force) {
            if (the.open === false) {
                return the;
            }

            if (mUtil.isDesktopDevice() && the.options.toggle == 'hover') {
                Plugin.hideHovered(force);
            } else {
                Plugin.hideClicked();
            }

            if (the.layout.defaultDropPos == 'down' && the.layout.currentDropPos == 'up') {
                mUtil.removeClass(element, 'm-dropdown--up');
                the.layout.arrow.prependTo(the.layout.wrapper);
                the.layout.currentDropPos = 'down';
            }

            return the;
        },

        /**
         * Hide on mouseout
         */
        hideMouseout: function () {
            if (mUtil.isDesktopDevice()) {
                Plugin.hide();
            }
        },

        /**
         * Hide opened dropdowns
         */
        hideOpened: function () {
            let query = mUtil.findAll(body, '.m-dropdown.m-dropdown--open');

            for (let i = 0, j = query.length; i < j; i++) {
                let dropdown = query[i];
                mUtil.data(dropdown).get('dropdown').hide(true);
            }
        },

        /**
         * Adjust dropdown arrow positions
         */
        adjustArrowPos: function () {
            let width = mUtil.outerWidth(element); // ?

            let alignment = mUtil.hasClass(the.layout.arrow, 'm-dropdown__arrow--right') ? 'right' : 'left';
            let pos = 0;

            if (the.layout.arrow) {
                if (mUtil.isInResponsiveRange('mobile') && mUtil.hasClass(element, 'm-dropdown--mobile-full-width')) {
                    pos = mUtil.offset(element).left + (width / 2) - Math.abs(parseInt(mUtil.css(the.layout.arrow, 'width')) / 2) - parseInt(mUtil.css(the.layout.wrapper, 'left'));

                    mUtil.css(the.layout.arrow, 'right', 'auto');
                    mUtil.css(the.layout.arrow, 'left', pos + 'px');
                    mUtil.css(the.layout.arrow, 'margin-left', 'auto');
                    mUtil.css(the.layout.arrow, 'margin-right', 'auto');
                } else if (mUtil.hasClass(the.layout.arrow, 'm-dropdown__arrow--adjust')) {
                    pos = width / 2 - Math.abs(parseInt(mUtil.css(the.layout.arrow, 'width')) / 2);
                    if (mUtil.hasClass(element, 'm-dropdown--align-push')) {
                        pos = pos + 20;
                    }

                    if (alignment == 'right') {
                        mUtil.css(the.layout.arrow, 'left', 'auto');
                        mUtil.css(the.layout.arrow, 'right', pos + 'px');
                    } else {
                        mUtil.css(the.layout.arrow, 'right', 'auto');
                        mUtil.css(the.layout.arrow, 'left', pos + 'px');
                    }
                }
            }
        },

        /**
         * Get zindex
         */
        setZindex: function () {
            let zIndex = 101; //mUtil.css(the.layout.wrapper, 'z-index');
            let newZindex = mUtil.getHighestZindex(element);
            if (newZindex >= zIndex) {
                zIndex = newZindex + 1;
            }

            mUtil.css(the.layout.wrapper, 'z-index', zIndex);
        },

        /**
         * Check persistent
         */
        isPersistent: function () {
            return the.options.persistent;
        },

        /**
         * Check persistent
         */
        isShown: function () {
            return the.open;
        },

        /**
         * Trigger events
         */
        eventTrigger: function (name, args) {
            for (let i = 0; i < the.events.length; i++) {
                let event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            event.handler.call(this, the, args);
                        }
                    } else {
                        event.handler.call(this, the, args);
                    }
                }
            }
        },

        addEvent: function (name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function (options) {
        defaultOptions = options;
    };

    /**
     * Show dropdown
     * @returns {mDropdown}
     */
    the.show = function () {
        return Plugin.show();
    };

    /**
     * Hide dropdown
     * @returns {mDropdown}
     */
    the.hide = function () {
        return Plugin.hide();
    };

    /**
     * Toggle dropdown
     * @returns {mDropdown}
     */
    the.toggle = function () {
        return Plugin.toggle();
    };

    /**
     * Toggle dropdown
     * @returns {mDropdown}
     */
    the.isPersistent = function () {
        return Plugin.isPersistent();
    };

    /**
     * Check shown state
     * @returns {mDropdown}
     */
    the.isShown = function () {
        return Plugin.isShown();
    };

    /**
     * Set dropdown content
     * @returns {mDropdown}
     */
    the.setContent = function (content) {
        return Plugin.setContent(content);
    };

    /**
     * Register event
     */
    the.on = function (name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Register event
     */
    the.one = function (name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    //== Run plugin
    Plugin.construct.apply(the, [options]);

    //== Init done
    init = true;

    // Return plugin instance
    return the;
};

//== Plugin global lazy initialization
mUtil.on(document, '[m-dropdown-toggle="click"] .m-dropdown__toggle', 'click', function (e) {
    let element = this.closest('.m-dropdown');
    let dropdown;

    if (element) {
        if (mUtil.data(element).has('dropdown')) {
            dropdown = mUtil.data(element).get('dropdown');
        } else {
            dropdown = new mDropdown(element);
        }

        dropdown.toggle();

        e.preventDefault();
    }
});

mUtil.on(document, '[m-dropdown-toggle="hover"] .m-dropdown__toggle', 'click', function (e) {
    if (mUtil.isDesktopDevice()) {
        if (mUtil.attr(this, 'href') == '#') {
            e.preventDefault();
        }
    } else if (mUtil.isMobileDevice()) {
        let element = this.closest('.m-dropdown');
        let dropdown;

        if (element) {
            if (mUtil.data(element).has('dropdown')) {
                dropdown = mUtil.data(element).get('dropdown');
            } else {
                dropdown = new mDropdown(element);
            }

            dropdown.toggle();

            e.preventDefault();
        }
    }
});

mUtil.on(document, '[m-dropdown-toggle="hover"]', 'mouseover', function (e) {
    if (mUtil.isDesktopDevice()) {
        let element = this;
        let dropdown;

        if (element) {
            if (mUtil.data(element).has('dropdown')) {
                dropdown = mUtil.data(element).get('dropdown');
            } else {
                dropdown = new mDropdown(element);
            }

            dropdown.show();

            e.preventDefault();
        }
    }
});

document.addEventListener("click", function (e) {
    let query;
    let body = mUtil.get('body');
    let target = e.target;

    //== Handle dropdown close
    if (query = body.querySelectorAll('.m-dropdown.m-dropdown--open')) {
        for (let i = 0, len = query.length; i < len; i++) {
            let element = query[i];
            if (mUtil.data(element).has('dropdown') === false) {
                return;
            }

            let the = mUtil.data(element).get('dropdown');
            let toggle = mUtil.find(element, '.m-dropdown__toggle');

            if (mUtil.hasClass(element, 'm-dropdown--disable-close')) {
                e.preventDefault();
                e.stopPropagation();
                //return;
            }

            if (toggle && target !== toggle && toggle.contains(target) === false && target.contains(toggle) === false) {
                if (the.isPersistent() === true) {
                    if (element.contains(target) === false) {
                        the.hide();
                    }
                } else {
                    the.hide();
                }
            } else if (element.contains(target) === false) {
                the.hide();
            }
        }
    }
});

export default mDropdown;