/**
 *
 * @Component: Content
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 21:37
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object,
        state: PropTypes.string
    };

    render() {
        const _props = this.props;
        const {children, styles, classList, attr, state} = _props;
        let className = [];
        if (state) className.push('m--font-' + state);
        className = className.concat(classList);
        return (
            <Fragment>
                <span style={styles} className={className.join(' ')} {...attr}>
                    {children}
                </span>
            </Fragment>
        );
    }
}

export default Text;