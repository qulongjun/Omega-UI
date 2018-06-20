/**
 *
 * @Component: Content
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 10:31
 *
 */

import React, {Component, Fragment} from 'react';
import Div from 'components/_element/Div';

import {_delivery} from 'plugins/utils/_props';

class Content extends Component {
    render() {
        const _props = this.props;
        const {children} = _props;
        return (
            <Fragment>
                <Div {..._delivery(_props, 'm-content')}>{children}</Div>
            </Fragment>
        );
    }
}
export default Content;