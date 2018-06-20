/**
 *
 * @Component: Text
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 11:10
 *
 */

import React, {Component, Fragment} from 'react';
import {_sysBind} from 'plugins/utils/_props';

class Text extends Component {
    render() {
        const _props = this.props;
        const {children} = _props;
        return (
            <Fragment>
                <span ref="_text" {..._sysBind(_props)}>{children}</span>
            </Fragment>
        );
    }
}
export default Text;