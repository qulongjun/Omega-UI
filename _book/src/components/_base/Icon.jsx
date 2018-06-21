/**
 *
 * @Component: Icon
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 18:07
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_sysBind} from 'plugins/utils/_props';

import 'font-awesome/css/font-awesome.css';
import 'socicon/css/socicon.css';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        iconName: ''
    };
    static propTypes = {
        iconName: PropTypes.string.isRequired
    };

    render() {
        const _props = this.props;
        const {iconName, children} = _props;
        return (
            <Fragment>
                <i {..._sysBind(_props, iconName)}>{children}</i>
            </Fragment>
        );
    }
}
export default Icon;