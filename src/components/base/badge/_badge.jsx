import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './_badge.scss'

class Badge extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        element: 'span',
        color: 'info',
        isWide: true,
        classList: [],
        style: null
    };

    static propTypes = {
        classList: PropTypes.array,
        style: PropTypes.object
    };

    render() {
        const props = this.props;
        const Element = props.element,
            children = props.children,
            color = props.color,
            isWide = props.isWide,
            classList = props.classList;

        const className = 'm-badge ' + ' m-badge--' + color + (isWide ? ' m-badge--wide' : '') + ' ' + classList.join(' ');
        return (
            <Element className={className} style={props.style}>{children}</Element>
        );
    }
}
export default Badge;