/**
 *
 * @Component: Code
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 11:10
 *
 */

import React, {Component, Fragment} from 'react';
import {_sysBind} from 'plugins/utils/_props';

class Code extends Component {
    render() {
        const _props = this.props;
        const {children} = _props;
        return (
            <Fragment>
                <code ref="code"  {..._sysBind(_props)}>{children}</code>
            </Fragment>
        );
    }
}
export default Code;