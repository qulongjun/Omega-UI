/**
 *
 * @Component: ButtonGroup
 * @User: Longjun.Qu
 * @Date: 2018-06-17
 * @Time: 08:05
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_delivery} from 'plugins/utils/_props';
import {isNotExist, isArray, isString} from 'plugins/uitls/_is';
import Button from 'components/_button/Button';
import Div from 'components/_element/Div';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    render() {
        const _props = this.props;
        const {size, btns, align, groupStyle} = _props;
        let _sysClass = ['btn-group'];
        !isNotExist(size) && ['sm', 'lg'].includes(size) && _sysClass.push('btn-group-' + size);
        !isNotExist(align) && align === 'vertical' && _sysClass.push('btn-group-vertical');
        !isNotExist(groupStyle) && isArray(groupStyle) && groupStyle.map((item) => {
            isString(item) && _sysClass.push('m-btn-group--' + item);
        });
        !isNotExist(groupStyle) && isString(groupStyle) && _sysClass.push('m-btn-group--' + groupStyle);


        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass, null, {
                    role: 'group'
                })}>
                    {
                        !isNotExist(btns) && isArray(btns) && btns.map((item, index) => {
                            return <Button key={index} {..._delivery(item)}/>
                        })
                    }
                </Div>
            </Fragment>
        );
    }
}
export default ButtonGroup;