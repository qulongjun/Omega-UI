/**
 *
 * @Component: ButtonDropdown
 * @User: Longjun.Qu
 * @Date: 2018-06-18
 * @Time: 08:44
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from 'components/_element/Div';
import Button from "components/_button/Button";
import Title from "components/_element/Title";

import {_delivery, _sysBind} from 'plugins/utils/_props';
import {isNotExist, isArray, isObject} from 'plugins/utils/_is';

class ButtonDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        button: PropTypes.object,
        toggle: PropTypes.object,
        direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
        itemAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify'])
    };

    render() {
        const _props = this.props;
        const {button, items, toggle, direction, itemAlign, _type} = _props;
        let _sysClass = ['btn-group'];
        !isNotExist(direction) && ['up', 'down', 'left', 'right'].includes(direction) && _sysClass.push('drop' + direction);
        let _render = (<Fragment>
            {
                !isNotExist(toggle) && toggle.show ? (
                        <Fragment>
                            <Button {..._delivery(button)}/>
                            <Button {..._delivery(toggle, ['dropdown-toggle', 'dropdown-toggle-split'], null, {
                                "data-toggle": "dropdown",
                                "aria-expanded": false
                            })}/>
                        </Fragment>
                    ) : (
                        <Button {..._delivery(button, ['dropdown-toggle'], null, {
                            "data-toggle": "dropdown",
                            "aria-expanded": false
                        })}/>
                    )
            }


            <Div _includeClass={["dropdown-menu", (itemAlign ? 'text-' + itemAlign : null)]}>
                {
                    !isNotExist(items) && (isArray(items) ? items.map((item, index) => {
                            if (!isNotExist(item.type)) {
                                switch (item.type) {
                                    case 'divider':
                                        return (<Div key={index} _includeClass="dropdown-divider"/>)
                                        break;
                                    case 'header':
                                        return (<Title key={index} level={6}
                                                       {..._delivery(item, ['dropdown-header'])}>{item.value}</Title>)
                                        break;
                                }
                            } else {
                                return <Button key={index} {...item} {...{
                                    _uniqueClass: ['dropdown-item', (item.align ? 'text-' + item.align : null), (item.btnState ? item.btnState : null)],
                                    _specialIcon: !isNotExist(item.icon) && item.icon.show
                                }}/>
                            }

                        }) : (
                            <Button {...items}/>
                        ))
                }
            </Div>
        </Fragment>);
        return (
            <Fragment>
                {
                    !isNotExist(_type) && _type === 'tab' ? (
                            <Fragment>
                                {_render}
                            </Fragment>
                        ) : (
                            <Div {..._delivery(_props, _sysClass)}>
                                {_render}
                            </Div>
                        )
                }

            </Fragment>
        );
    }
}
export default ButtonDropdown;