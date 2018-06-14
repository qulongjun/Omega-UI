/**
 *
 * @Component: Link
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 11:10
 *
 */

import React, {Component, Fragment} from 'react';
import {_sysBind} from 'plugins/utils/_props';

class Link extends Component {
    render() {
        const _props = this.props;
        const {color, href, download, target, children} = _props;
        let _sysClass = ['m-link'];
        color && _sysClass.push('m-link--' + color);
        return (
            <Fragment>
                <a  {..._sysBind(_props, _sysClass, null, {
                    href, download, target
                })}>{children}</a>
            </Fragment>
        );
    }
}
export default Link;