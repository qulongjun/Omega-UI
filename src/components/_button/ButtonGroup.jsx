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
import {isNotExist, isArray, isString} from 'plugins/utils/_is';
import Button from 'components/_button/Button';
import Div from 'components/_element/Div';
import ButtonDropdown from 'components/_button/ButtonDropdown';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    render() {
        const _props = this.props;
        const {size, btns, align, groupStyle, vertical} = _props;
        let _sysClass = [];
        !isNotExist(vertical) && vertical ? _sysClass.push('btn-group-vertical') : _sysClass.push('btn-group')
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
                            switch (item.type) {
                                case 'dropdown':
                                    if (index + 1 === btns.length && _sysClass.includes('m-btn-group--pill')) Object.assign(item.dropdown.button, {_includeClass: 'm-btn--pill-last'})
                                    if (index === 0 && _sysClass.includes('m-btn-group--pill')) Object.assign(item.dropdown.button, {_includeClass: 'm-btn--pill-first'});
                                    return (<ButtonDropdown key={index} {..._delivery(item.dropdown)}/>);
                                    break;
                                default:
                                    return (<Button key={index} {..._delivery(item)}
                                                    _excludeClass={!isNotExist(item.icon) && item.icon.show ? ['m-btn--icon', 'm-btn--icon-only'] : []}/>);
                            }
                        })
                    }
                </Div>
            </Fragment>
        );
    }
}
export default ButtonGroup;