import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Badge extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        element: 'span',
        color: 'info',
        type: 'normal',
        inverse: false
    };

    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object,
        element: PropTypes.string,
        color: PropTypes.string,
        type: PropTypes.oneOf(['dot', 'dot-small', 'rounded', 'wide', 'normal']),
        inverse: PropTypes.bool
    };

    render() {

        const _props = this.props;
        const Element = _props.element;
        const {children, color, inverse, type, styles, classList, attr} = _props;
        let className = ['m-badge'];
        color && !inverse && className.push('m-badge--' + color);
        color && inverse && className.push('m-badge--light') && className.push('m-badge--bordered') && className.push('m-badge-bordered--' + color);
        type !== 'normal' && className.push('m-badge--' + type);
        type === 'rounded' && className.push('m-badge--wide');
        className = className.concat(classList);
        return (
            <Element className={className.join(' ')} style={styles} {...attr}>{children}</Element>
        );
    }
}
export default Badge;