/**
 *
 * @Demo: Demo
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 18:26
 *
 */

import React, {Component, Fragment} from 'react';

import Div from 'components/_element/Div';
import {_delivery} from 'plugins/utils/_props';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        btnStyle: true,
        badgeStyle: true
    };

    render() {
        const _props = this.props;
        const {
            btnStyle,
            badgeStyle,
            children
        } = _props;
        let className = ['m-demo__preview'];
        btnStyle && className.push('m-demo__preview--btn');
        badgeStyle && className.push('m-demo__preview--badge');
        return (
            <Fragment>
                <Div {..._delivery(_props, 'm-demo', null, {
                    "data-code-preview": "true",
                    "data-code-html": "true",
                    "data-code-js": "false"
                })}>
                    <Div _includeClass={className}>
                        {children}
                    </Div>
                </Div>
            </Fragment>
        );
    }
}
export default Demo;