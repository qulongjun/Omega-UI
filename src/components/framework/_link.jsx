/**
 *
 * @Component: Link
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 10:30
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        target: '_blank',
        url: '#'
    };
    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object
    };

    render() {
        const _props = this.props;
        const {url, target, state, children, styles, classList, attr} = _props;
        let className = ['m-link'];
        if (state) className.push('m--font-' + state);
        className = className.concat(classList);
        return (
            <Fragment>
                <a href={url} style={styles} {...attr} target={target} className={className.join(' ')}>
                    {children}
                </a>
            </Fragment>
        );
    }
}
export default Link;