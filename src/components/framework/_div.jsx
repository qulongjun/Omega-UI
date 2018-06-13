/**
 *
 * @Component: Div
 * @User: Longjun.Qu
 * @Date: 2018-06-13
 * @Time: 18:04
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


class Div extends Component {
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
        className = className.concat(classList);
        return (
            <Fragment>
                <div className={...className} style={styles} {...attr}>
                    {children}
                </div>
            </Fragment>
        );
    }
}
export default Div;