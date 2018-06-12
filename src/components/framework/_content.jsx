/**
 *
 * @Component: Content
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 17:33
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


class Content extends Component {
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
        let className = ['m-content'];
        className = className.concat(classList);
        return (
            <Fragment>
                <div style={styles} className={className.join(' ')} {...attr}>
                    {children}
                </div>
            </Fragment>
        );
    }
}
export default Content;