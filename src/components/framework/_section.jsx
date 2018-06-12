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
    static propTypes = {};

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        const _props = this.props;
        const {
            title, describe, children
        } = _props;
        return (
            <Fragment>
                <div className="m-section">
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