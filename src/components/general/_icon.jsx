import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'font-awesome/css/font-awesome.css';
import 'socicon/css/socicon.css';

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        iconName: PropTypes.string.isRequired,
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object
    };

    render() {
        const _props = this.props;
        const {iconName, styles, classList, attr} = _props;
        let className = [];
        if (iconName) className.push(iconName);
        className = className.concat(classList);
        return (
            <i className={className.join(' ')} style={styles} {...attr}/>
        );
    }
}
export default Icon;