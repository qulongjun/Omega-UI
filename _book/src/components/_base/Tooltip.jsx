/**
 *
 * @Component: Tooltip
 * @User: Longjun.Qu
 * @Date: 2018-06-16
 * @Time: 07:46
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_delivery} from 'plugins/utils/_props';
import Button from "components/_button/Button";
import Div from "../_element/Div";

import {isNotExist, isArray} from 'plugins/utils/_is';

class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        trigger: 'hover',
        skin: 'light',
        offset: [0, 0]
    };
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        skin: PropTypes.oneOf(['light', 'dark']),
        offset: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string
        ]),
        html: PropTypes.bool,
        direction: PropTypes.oneOf(['top', 'bottom', 'right', 'left'])
    };

    componentDidMount() {
        const el = $(this.refs.tooltip.refs.button);
        const skin = el.data('skin') ? 'm-tooltip--skin-' + el.data('skin') : '';
        const triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
        const width = el.data('width') === 'auto' ? 'm-tooltop--auto-width' : '';
        el.tooltip({
            trigger: triggerValue,
            template: '\
            <div class="m-tooltip ' + skin + ' ' + width + ' tooltip" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>'
        });
    }

    render() {
        const _props = this.props;
        const {title, trigger, skin, offset, html, direction, children} = _props;
        const _sysAttribute = {
            "data-toggle": "m-tooltip",
            title: title || children,
            "data-placement": direction,
            "data-trigger": trigger,
            "data-html": html,
            "data-skin": skin,
            "data-offset": !isNotExist(offset) ? (isArray(offset) ? offset.join(' ') : offset) : null
        };
        return (
            <Fragment>
                <Button ref="tooltip"  {..._delivery(_props, null, null, _sysAttribute)}/>
            </Fragment>
        );
    }
}
export default Tooltip;