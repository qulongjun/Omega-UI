/**
 *
 * @Component: Wrapper
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 17:39
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object,
    };

    render() {
        const _props = this.props;
        const {children, styles, classList, attr} = _props;
        let className = ['m-grid__item', 'm-grid__item--fluid', 'm-wrapper'];
        className = className.concat(classList);
        return (
            <Fragment>
                <div className={className.join(' ')} style={styles} {...attr}>
                    {children}
                </div>
            </Fragment>
        );
    }
}
export default Wrapper;