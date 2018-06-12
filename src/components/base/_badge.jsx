import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Badge extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        element: 'span',
        color: 'info',
        isWide: true,
    };

    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object,
        element: PropTypes.string,
        color: PropTypes.string,
        isWide: PropTypes.bool
    };

    render() {
        const _props = this.props;
        const Element = _props.element;
        const {children, color, isWide, styles, classList, attr} = _props;
        let className = ['m-badge'];
        color && className.push('m-badge--' + color);
        isWide && className.push('m-badge--wide');
        className.concat(classList);
        return (
            <Element className={className.join(' ')} style={styles} {...attr}>{children}</Element>
        );
    }
}
export default Badge;