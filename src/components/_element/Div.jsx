/**
 *
 * @Component: Div
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 11:10
 *
 */

import React, {Component, Fragment} from 'react';
import {_sysBind} from 'plugins/utils/_props';

class Div extends Component {
    render() {
        const _props = this.props;
        const {children} = _props;
        return (
            <Fragment>
                <div {..._sysBind(_props)}>{children}</div>
            </Fragment>
        );
    }
}
export default Div;