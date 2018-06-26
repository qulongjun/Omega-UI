/**
 *
 * @Component: Badge
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 13:58
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Text from 'components/_element/Text';

import {_delivery} from 'plugins/utils/_props';
import {isNotExist, isArray, isString} from 'plugins/utils/_is';


class Badge extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        inverse: false
    };
    static propTypes = {
        inverse: PropTypes.bool,
        bgColor: PropTypes.string,
        type: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ])
    };

    render() {
        const _props = this.props;
        const {bgColor, inverse, type, children} = _props;
        let _sysClass = ['m-badge'];
        bgColor && !inverse && _sysClass.push('m-badge--' + bgColor);
        bgColor && inverse && (_sysClass = _sysClass.concat(['m-badge--light', 'm-badge--bordered', 'm-badge-bordered--' + bgColor]));
        !isNotExist(type) && isArray(type) && type.map((item) => {
            isString(item) && _sysClass.push('m-badge--' + item);
        });
        !isNotExist(type) && isString(type) && _sysClass.push('m-badge--' + type);
        return (
            <Fragment>
                <Text {..._delivery(_props, _sysClass)}>{children}</Text>
            </Fragment>
        );
    }
}
export default Badge;