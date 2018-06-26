/**
 *
 * @Component: Alert
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 17:20
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from 'components/_element/Div';
import Icon from 'components/_base/Icon';
import Button from 'components/_button/Button';

import {isArray, isString, isNotExist} from 'plugins/utils/_is';
import {_delivery} from 'plugins/utils/_props';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    render() {
        const _props = this.props;
        const {title, closeBtn, alertColor, types, icon, iconStyle, actions, actionStyle, message} = _props;
        let _sysClass = ['alert', 'm-alert'];
        !isNotExist(alertColor) && isString(alertColor) && _sysClass.push('alert-' + alertColor);
        closeBtn && (_sysClass = _sysClass.concat([' alert-dismissible ', 'fade', 'show']));
        !isNotExist(types) && isArray(types) && types.map((item) => {
            _sysClass.push('m-alert--' + item);
        });
        !isNotExist(types) && isString(types) && _sysClass.push('m-alert--' + types);
        !isNotExist(icon) && isString(icon) && _sysClass.push('m-alert--icon');
        !isNotExist(iconStyle) && iconStyle === 'solid' && !isNotExist(icon) && _sysClass.push('m-alert--icon-solid');
        const closeBtnAttr = {
            "data-dismiss": "alert",
            "aria-label": "Close",
            "aria-hidden": "true"
        };

        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass)}>
                    {icon && (
                        <Div _includeClass="m-alert__icon">
                            <Icon iconName={icon}/>
                        </Div>
                    )}
                    <Div _includeClass="m-alert__text">
                        {closeBtn && !icon &&
                        <Button type="button" _includeAttribute={closeBtnAttr} _uniqueClass="close"/>}
                        {title && (<strong>{title}</strong>)}
                        {message}
                    </Div>
                    {
                        closeBtn && icon && isArray(actions) && actions.length === 0 &&
                        <Div _includeClass="m-alert__close">
                            <Button type="button" _includeAttribute={closeBtnAttr} _uniqueClass="close"/>
                        </Div>
                    }
                    {
                        !closeBtn && isArray(actions) && actions.length !== 0 && (
                            <Div _includeClass="m-alert__actions" _includeStyle={actionStyle}>
                                {
                                    isArray(actions) && actions.map((item, index) => {
                                        if (item.closeBtn) {
                                            return <Button key={index} {...item} _includeAttribute={closeBtnAttr}/>
                                        } else {
                                            return <Button key={index} {...item}/>
                                        }
                                    })
                                }
                            </Div>
                        )
                    }
                </Div>
            </Fragment>
        );
    }
}
export default Alert;