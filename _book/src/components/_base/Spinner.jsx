/**
 *
 * @Component: Spinner
 * @User: Longjun.Qu
 * @Date: 2018-06-16
 * @Time: 21:01
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_delivery} from 'plugins/utils/_props';
import {isNotExist} from 'plugins/utils/_is';
import Div from "components/_element/Div";

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        size: PropTypes.oneOf(['normal', 'sm', 'lg'])
    };

    render() {
        const _props = this.props;
        const {color, size, children} = _props;
        let _sysClass = ['m-spinner'];
        !isNotExist(color) && _sysClass.push('m-spinner--' + color);
        !isNotExist(size) && ['sm', 'lg'].includes(size) && _sysClass.push('m-spinner--' + size);
        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass)}>{children}</Div>
            </Fragment>
        );
    }
}
export default Spinner;