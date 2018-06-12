/**
 *
 * @Component: Space
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 19:05
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Space extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        size: 10
    };
    static propTypes = {
        size: PropTypes.number,
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object
    };

    render() {
        const _props = this.props;
        const {size, styles, classList, attr} = _props;
        const style = [5, 10, 15, 20, 25, 30, 35, 40].includes(size) ? {} : {
            display: 'block',
            height: 0,
            marginBottom: size + 'px'
        };
        Object.assign(style, styles);
        let className = ['m--space-' + size];
        className.concat(classList);
        return (
            <Fragment>
                <div className={className.join(' ')} {...attr} style={style}/>
            </Fragment>
        );
    }
}
export default Space;