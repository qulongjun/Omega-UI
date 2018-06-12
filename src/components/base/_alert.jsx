/**
 *
 * @Component: Alert
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 19:16
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/general/_icon'
import Button from "components/general/_button";

const _styles = ['normal', 'outline', 'outline-2x', 'square', 'air'];

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        title: 'Note!',
        message: 'This is a default message',
        types: [],
        bgColor: 'default',
        closeBtn: true,
        actions: []
    };
    static propTypes = {
        types: PropTypes.array,
        classList: PropTypes.array,
        attr: PropTypes.object,
        styles: PropTypes.object,
        bgColor: PropTypes.string,
        closeBtn: PropTypes.bool,
        actions: PropTypes.array,
        icon: PropTypes.string,
        iconStyle: PropTypes.oneOf(["normal", "solid"])
    };

    render() {
        const _props = this.props;
        const {
            title, message, bgColor, closeBtn, types, icon, iconStyle, actions, actionStyle, classList, attr, styles
        } = _props;
        let className = ['alert m-alert '];
        bgColor && className.push('alert-' + bgColor);
        closeBtn && className.concat([' alert-dismissible ', 'fade', 'show']);
        types.map((item) => {
            if (_styles.includes(item)) {
                item === 'outline-2x'
                    ? className.push(' m-alert--outline m-alert--outline-2x')
                    : className.push(' m-alert--' + item);
            }
        });
        icon && className.push('m-alert--icon');
        iconStyle === 'solid' && icon && className.push('m-alert--icon-solid');
        className = className.concat(classList)
        return (
            <Fragment>
                <div className={className.join(' ')} role="alert" style={styles} {...attr}>
                    {icon && (
                        <div className="m-alert__icon">
                            <Icon iconName={icon}/>
                        </div>
                    )}
                    <div className="m-alert__text">
                        {closeBtn && !icon &&
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                                aria-hidden="true"
                                style={{paddingTop: 0}}/>}
                        {title && (<strong>
                            {title}
                        </strong>)}
                        {message}
                    </div>

                    {closeBtn && icon && actions.length === 0 &&
                    <div className="m-alert__close">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"/>
                    </div>}
                    {
                        !closeBtn && actions.length !== 0 && (
                            <div className="m-alert__actions" style={actionStyle}>
                                {
                                    actions.map((item, index) => {
                                        if (item.closeBtn) {
                                            return <Button key={index} {...item} _attr={
                                                {
                                                    "data-dismiss": "alert",
                                                    "aria-label": "Close"
                                                }
                                            }/>
                                        } else {
                                            return <Button key={index} {...item} />
                                        }
                                    })
                                }
                            </div>
                        )
                    }

                </div>
            </Fragment>
        );
    }
}

export default Alert;