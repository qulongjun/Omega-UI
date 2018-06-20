/**
 *
 * @Component: Space
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 11:10
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from './Div';
import {isNumber} from 'plugins/utils/_is'
import {_delivery} from 'plugins/utils/_props';

class Space extends Component {
    static defaultProps = {
        size: 10
    };
    static propTypes = {
        size: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    };

    render() {
        const _props = this.props;
        const {size} = _props;
        return (
            <Fragment>
                <Div
                    {..._delivery(
                        _props,
                        (isNumber(size) && [5, 10, 15, 20, 25, 30, 35, 40].includes(parseInt(size)) ? 'm--space-' + size : null),
                        (!([5, 10, 15, 20, 25, 30, 35, 40].includes(size)) ? {
                            display: 'block',
                            height: 0,
                            marginBottom: isNumber(size) ? size + 'px' : size
                        } : null))}
                />
            </Fragment>
        );
    }
}
export default Space;