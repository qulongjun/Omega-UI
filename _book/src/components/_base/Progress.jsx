/**
 *
 * @Component: Progress
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 17:20
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from 'components/_element/Div';

import {_delivery} from 'plugins/utils/_props';
import {isArray, isNotExist, isObject, isString} from 'plugins/utils/_is';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    render() {
        const _props = this.props;
        const {start, end, size, height, items} = _props;
        let _sysClass = ['progress'];
        ['lg', 'sm'].includes(size) && _sysClass.push('m-progress--' + size);
        let _style = null;
        height && (_style = {height});
        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass, _style)}>
                    {!isNotExist(items) && isArray(items) && items.map((item, index) => (
                        <BarItem key={index} {..._delivery(item)} {...{start, end}}/>
                    ))}
                    {!isNotExist(items) && isObject(items) && (
                        <BarItem {..._delivery(items)} {...{start, end}}/>
                    )}
                </Div>
            </Fragment>
        );
    }
}

class BarItem extends Component {
    render() {
        const _props = this.props;
        const {start, end, now, pattern, showValue} = _props;
        let _sysClass = ['progress-bar'];
        !isNotExist(pattern) && isArray(pattern) && pattern.map((item) => {
            ['striped', 'animated'].includes(item) && _sysClass.push('progress-bar-' + item);
        });
        !isNotExist(pattern) && isString(pattern) && ['striped', 'animated'].includes(pattern) && _sysClass.push('progress-bar-' + pattern);
        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass, {
                    width: now + '%'
                }, {
                    "role": 'progressbar',
                    "aria-valuenow": now,
                    "aria-valuemin": start,
                    "aria-valuemax": end
                })}>
                    {showValue && now + '%'}
                </Div>
            </Fragment>
        );
    }
}
export default Progress;