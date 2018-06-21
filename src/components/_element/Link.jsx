/**
 *
 * @Component: Link
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 11:10
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_sysBind, stateColor} from 'plugins/utils/_props';

class Link extends Component {
    static defaultProps = {
        href: '#',
        target: '_blank'
    };
    static propTypes = {
        color: PropTypes.oneOf(stateColor),
        href: PropTypes.string,
        download: PropTypes.string,
        target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
    };

    render() {
        const _props = this.props;
        const {color, href, download, target, children} = _props;
        let _sysClass = ['m-link'];
        color && _sysClass.push('m-link--' + color);
        return (
            <Fragment>
                <a ref="_link"  {..._sysBind(_props, _sysClass, null, {
                    href, download, target
                })}>{children}</a>
            </Fragment>
        );
    }
}
export default Link;