/**
 *
 * @Component: Code
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 19:21
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object
    };

    render() {
        const _props = this.props;
        const {children, styles, classList, attr} = _props;
        let className = [];
        className.concat(classList);
        return (
            <Fragment>
                <code className={className.join(' ')} style={styles} {...attr}>{children}</code>
            </Fragment>
        );
    }
}
export default Code;