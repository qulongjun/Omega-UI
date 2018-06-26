/**
 *
 * @Component: Wrapper
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 10:50
 *
 */

import React, {Component, Fragment} from 'react';

import Div from 'components/_element/Div';

import {_delivery} from 'plugins/utils/_props';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    render() {
        const _props = this.props;
        const {children} = _props;
        return (
            <Fragment>
                <Div {..._delivery(_props, ['m-grid__item', 'm-grid__item--fluid', 'm-wrapper'])}>{children}</Div>
            </Fragment>
        );
    }
}
export default Wrapper;