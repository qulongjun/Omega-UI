/**
 *
 * @Component: Section
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 18:02
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
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
        const {title, describe, styles, classList, attr, children} = _props;
        let className = ['m-section'];
        className.concat(classList);
        return (
            <Fragment>
                <div className={className.join(' ')} style={styles} {...attr}>
                    <h3 className="m-section__heading">
                        {title}
                    </h3>
                    <span className="m-section__sub">
                        {describe}
                    </span>
                    <div className="m-section__content">
                        {children}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Section;