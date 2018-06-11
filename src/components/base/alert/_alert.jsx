/**
 *
 * @Component: AlertBar
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 19:16
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/general/icon/_icon'
import './_alert.scss'

const _styles = ['normal', 'outline', 'outline-2x', 'square', 'air'];

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        message: 'This is a default message',
        bgColor: 'default',
        closeBtn: true,
        styles: []
    };
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
        const {
            title,
            message,
            bgColor,
            closeBtn,
            styles,
            icon,
            iconStyle
        } = _props;
        const className = ['alert m-alert m-alert--default'];
        bgColor && className.push('alert-' + bgColor);
        closeBtn && className.concat(['alert-dismissible ', 'fade', 'show']);
        styles.map((item) => {
            if (_styles.includes(item)) {
                item === 'outline-2x'
                    ? className.push(' m-alert--outline m-alert--outline' + item)
                    : className.push('m-alert--' + item);
            }
        });
        icon && className.push('m-alert--icon');
        iconStyle === 'solid' && icon && className.push('m-alert--icon-solid');
        return (
            <Fragment>
                <div className={className.join(' ')} role="alert">
                    {icon && (
                        <div className="m-alert__icon">
                            <Icon iconName={icon}/>
                        </div>
                    )}
                    <div className="m-alert__text">
                        {closeBtn && !icon &&
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" style={{paddingTop:0}}/>}
                        {title && (<strong>
                            {title}
                        </strong>)}
                        {message}
                    </div>

                    {closeBtn && icon &&
                    <div className="m-alert__close">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"/>
                    </div>}

                </div>
            </Fragment>
        );
    }
}
export default Alert;