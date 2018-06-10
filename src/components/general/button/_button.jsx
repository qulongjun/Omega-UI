import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './_button.scss';
import Icon from '../icon/_icon';

const btnState = ['brand', 'metal', 'light', 'accent', 'focus', 'primary', 'success', 'info', 'warning', 'danger'];
const btnOutlineState = ['secondary', 'outline-brand', 'outline-metal', 'outline-light', 'outline-accent', 'outline-focus', 'outline-primary', 'outline-success', 'outline-info', 'outline-warning', 'outline-danger'];

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    static defaultProps = {
        element: 'a',
        type: 'button',
        color: 'primary',
        gradient: null,
        isWide: false,
        isBlock: false,
        value: 'Button',
        border: 'normal',
        textStyle: null,
        btnStyle: 'normal',
        labelState: 'primary',
        size: 'normal',
        state: 'normal',
        handle: {
            click: null
        }
    };

    static propTypes = {
        element: PropTypes.oneOf(['button', 'input', 'a']),
        type: PropTypes.oneOf(['button', 'submit', 'reset']),
        color: PropTypes.oneOf(btnState.concat(btnOutlineState)),
        gradient: PropTypes.shape({
            from: PropTypes.oneOf(btnState),
            to: PropTypes.oneOf(btnState)
        }),
        border: PropTypes.oneOf(['normal', 'double']),
        isWide: PropTypes.bool,
        isBlock: PropTypes.bool,
        size: PropTypes.oneOf(['normal', 'lg', 'sm']),
        value: PropTypes.any.isRequired,
        state: PropTypes.oneOf(['normal', 'active', 'disabled']),
        btnStyle: PropTypes.oneOf(['normal', 'square', 'pill', 'air']),
        customStyle: PropTypes.object
    };

    handleEvent(event) {
        this.props.handle.click && this.props.handle.click(event);
        event.preventDefault();
    }

    render() {
        let textStyle = '';
        if (this.props.textStyle) {
            for (let param in this.props.textStyle) {
                this.props.textStyle[param] ? (textStyle += ' m-btn--' + param) : null;
            }
        }
        const btnStyle = this.props.btnStyle === 'air' ? ' m-btn--pill m-btn-air' : ' m-btn--' + this.props.btnStyle;
        const iconClass = this.props.element === 'a' && this.props.icon ? (this.props.value ? ' m-btn--icon' : ' m-btn--icon m-btn--icon-only') : '';
        const iconContent = this.props.icon ? (this.props.value
                ? (<span><Icon iconName={this.props.icon}/><span>{this.props.value}</span></span>)
                : <Icon iconName={this.props.icon}/>) : this.props.value;
        const className =
            'btn '
            + 'btn-' + this.props.color
            + (this.props.gradient ? ' m-btn--gradient-from-' + this.props.gradient.from + ' m-btn--gradient-to-' + this.props.gradient.to : '')
            + (this.props.isWide ? ' m-btn--wide' : '')
            + textStyle
            + (this.props.labelState ? ' m-btn--label-' + this.props.labelState : '')
            + ' btn-' + this.props.size + ' '
            + this.props.state
            + (this.props.isBlock ? ' btn-block' : '')
            + btnStyle
            + iconClass;
        const value = this.props.value;
        switch (this.props.element) {
            case 'button':
                return (
                    <button type={this.props.type} style={this.props.customStyle} className={className}
                            onClick={this.handleEvent}>{value}</button>
                );
                break;
            case 'input':
                return (
                    <input type={this.props.type} value={value} style={this.props.customStyle} className={className}
                           onClick={this.handleEvent}
                    />
                );
                break;
            case 'a':
                return (
                    <a href='javascript:;' className={className} style={this.props.customStyle} role={this.props.type}
                       onClick={this.handleEvent}>
                        {iconContent}
                    </a>
                );
                break;
            default:
                return false;
        }
    }
}
export default Button;