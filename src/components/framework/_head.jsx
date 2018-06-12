/**
 *
 * @Component: Head
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 11:22
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        Tag: 'h1'
    };
    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object
    };

    render() {
        const _props = this.props;
        const Tag = _props.tag;
        const {state, styles, children, classList, attr} = _props;
        let className = [];
        if (state) className.push('m--font-' + state);
        className = className.concat(classList);
        return (
            <Fragment>
                <Tag style={styles} {...attr} className={className.join(' ')}>{children}</Tag>
            </Fragment>
        );
    }
}
export default Head;