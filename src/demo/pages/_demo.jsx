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
                <div className="m-demo" data-code-preview="true" data-code-html="true" data-code-js="false">
                    <div className={className.join(' ')}>
                        {children}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Demo;