/**
 *
 * @Component: Separator
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 19:35
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from './Div';

import {_delivery, stateColor} from 'plugins/utils/_props';

class Separator extends Component {
    static defaultProps = {
        size: 'sm',
        dashed: false
    };
    static propTypes = {
        size: PropTypes.oneOf(['lg', 'xl', 'sm', 'fit']),
        color: PropTypes.oneOf(stateColor),
        dashed: PropTypes.bool
    };

    render() {
        const _props = this.props;
        const {size, dashed, color} = _props;
        let _sysClass = ['m-separator'];
        ['lg', 'xl', 'sm', 'fit'].includes(size) && _sysClass.push('m-separator--' + size);
        color && _sysClass.push('m-separator--' + color);
        dashed && _sysClass.push('m-separator--dashed');
        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass)}/>
            </Fragment>
        );
    }
}
export default Separator;