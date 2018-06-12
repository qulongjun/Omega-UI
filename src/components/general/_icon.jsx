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
        style: PropTypes.object
    };

    render() {
        return (
            <i className={this.props.iconName} style={this.props.style}/>
        );
    }
}
export default Icon;