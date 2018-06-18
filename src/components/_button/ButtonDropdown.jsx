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
import {_delivery} from 'plugins/utils/_props';
import Button from "components/_button/Button";
import {isNotExist, isArray, isObject} from 'plugins/utils/_is';
import Title from "../_element/Title";

class ButtonDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        const _props = this.props;
        const {button, items, toggle, direction, itemAlign, children} = _props;
        let _sysClass = ['btn-group'];
        !isNotExist(direction) && ['up', 'down', 'left', 'right'].includes(direction) && _sysClass.push('drop' + direction);
        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass)}>
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
                </Div>
            </Fragment>
        );
    }
}
export default ButtonDropdown;