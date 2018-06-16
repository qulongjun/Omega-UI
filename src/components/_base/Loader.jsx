/**
 *
 * @Component: Loader
 * @User: Longjun.Qu
 * @Date: 2018-06-16
 * @Time: 20:22
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_delivery} from 'plugins/utils/_props';

import Div from 'components/_element/Div';

import {isNotExist} from 'plugins/utils/_is';
class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
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
        const {color, size, align, children} = _props;
        let _sysClass = ['m-loader'];
        !isNotExist(color) && _sysClass.push('m-loader--' + color);
        !isNotExist(size) && ['sm', 'lg'].includes(size) && _sysClass.push('m-loader--' + size);
        !isNotExist(align) && ['center', 'left', 'right'].includes(align) && _sysClass.push('m-loader--' + align);
        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass)}>{children}</Div>
            </Fragment>
        );
    }
}
export default Loader;