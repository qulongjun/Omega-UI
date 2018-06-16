/**
 *
 * @Component: Scroll
 * @User: Longjun.Qu
 * @Date: 2018-06-16
 * @Time: 13:01
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from 'components/_element/Div';

import {_delivery} from 'plugins/utils/_props';
import {isNotExist, isNumber, isString} from 'plugins/utils/_is';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'jquery-mousewheel';

import {mUtil} from 'plugins/_framework/_base/_util';
import {mApp} from 'plugins/_framework/_base/_app';

class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        config: PropTypes.object,
        fixHeight: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        fixWidth: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        axis: PropTypes.oneOf(['x', 'y', 'yx'])
    };

    componentWillMount() {
    }

    componentDidMount() {
        if (this.refs.scroll) {
            const el = $(this.refs.scroll.refs.div);
            let maxHeight;
            let height;

            if (mUtil.isInResponsiveRange('tablet-and-mobile')) {
                if (el.data('mobile-max-height')) {
                    maxHeight = el.data('mobile-max-height');
                } else {
                    maxHeight = el.data('max-height');
                }

                if (el.data('mobile-height')) {
                    height = el.data('mobile-height');
                } else {
                    height = el.data('height');
                }
            } else {
                maxHeight = el.data('max-height');
                height = el.data('max-height');
            }

            if (maxHeight) {
                el.css('max-height', maxHeight);
            }
            if (height) {
                el.css('height', height);
            }

            mApp.initScroller(el, {});
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.refs.scroll) {
            const el = $(this.refs.scroll.refs.div);
            el.mCustomScrollbar("update");
        }
    }

    componentWillUnmount() {
        if (this.refs.scroll) {
            const el = $(this.refs.scroll.refs.div);
            mApp.destroyScroller(el);
        }
    }

    render() {
        const _props = this.props;
        const {fixHeight, fixWidth, scrollBar, axis, children} = _props;
        let _sysAttribute = {
            "data-scrollable": true,
        };
        !isNotExist(fixHeight) && Object.assign(_sysAttribute, {
            "data-max-height": fixHeight
        });
        !isNotExist(scrollBar) && scrollBar && Object.assign(_sysAttribute, {
            "data-scrollbar-shown": true
        });
        !isNotExist(axis) && ['x', 'y', 'yx'].includes(axis) && Object.assign(_sysAttribute, {
            "data-axis": axis
        });
        console.log(_sysAttribute);
        return (
            <Fragment>
                <Div ref="scroll" {..._delivery(_props, ['m-scrollable'], null, _sysAttribute)}>
                    {!isNotExist(axis) && ['x', 'yx'].includes(axis) ? (<Div _includeStyle={{width: fixWidth}}>
                        {children}
                    </Div>) : children}
                </Div>
            </Fragment>
        );
    }
}
export default Scroll;