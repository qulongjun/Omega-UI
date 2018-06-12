/**
 *
 * @Component: Separator
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 13:48
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Separator extends Component {
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
        const {styles, classList, attr} = _props;
        let className = ['m-separator', 'm-separator--dashed'];
        className = className.concat(classList);
        return (
            <Fragment>
                <div className={className.join(' ')} {...attr} style={styles}/>
            </Fragment>
        );
    }
}
export default Separator;