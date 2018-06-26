/**
 *
 * @Component: GridItem
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 17:20
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from 'components/_element/Div';
import {isExist, isNotExist} from 'plugins/utils/_is';
import {_delivery} from 'plugins/utils/_props';

class GridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fluid: true
        }
    }

    static defaultProps = {};
    static propTypes = {
        order: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        align: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
        fluid: PropTypes.bool
    };

    render() {
        const _props = this.props;
        const {order, flex, align, fluid, children} = _props;
        let _sysClass = ['m-grid__item'];
        let _sysStyle = {};
        isExist(fluid) && _sysClass.push('m-grid__item--fluid');
        isExist(order) && _sysClass.push('m-grid__item--order-' + order);
        isExist(align) && _sysClass.push('m-grid__item--' + align);
        isNotExist(fluid) && isExist(flex) && (_sysStyle = Object.assign(_sysClass, {flex}));
        return (
            <Fragment>
                <Div ref='gridItem' {..._delivery(_props, _sysClass, _sysStyle)}>
                    {children}
                </Div>
            </Fragment>
        );
    }
}

export default GridItem;