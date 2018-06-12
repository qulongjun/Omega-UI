/**
 *
 * @Demo: Demo
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 18:26
 *
 */

import React, {Component, Fragment} from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {
            children
        } = _props;
        return (
            <Fragment>
                <div className="m-demo" data-code-preview="true" data-code-html="true" data-code-js="false">
                    <div className="m-demo__preview m-demo__preview--btn m-demo__preview--badge">
                        {children}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Demo;