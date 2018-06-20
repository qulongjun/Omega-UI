/**
 *
 * @Component: Popover
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

class Popover extends Component {
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
        const el = $(this.refs.popover.refs.button);
        const skin = el.data('skin') ? 'm-popover--skin-' + el.data('skin') : '';
        const triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
        el.popover({
            trigger: triggerValue,
            template: '\
            <div class="m-popover ' + skin + ' popover" role="tooltip">\
                <div class="arrow"></div>\
                <h3 class="popover-header"></h3>\
                <div class="popover-body"></div>\
            </div>'
        });
    }

    render() {
        const _props = this.props;
        const {title, trigger, content, skin, offset, html, direction, children} = _props;
        const _sysAttribute = {
            "data-toggle": "m-popover",
            title,
            "data-content": content || children,
            "data-placement": direction,
            "data-trigger": trigger,
            "data-html": html,
            "data-skin": skin,
            "data-offset": !isNotExist(offset) ? (isArray(offset) ? offset.join(' ') : offset) : null
        };
        return (
            <Fragment>
                <Button ref="popover"  {..._delivery(_props, null, null, _sysAttribute)}/>
            </Fragment>
        );
    }
}
export default Popover;