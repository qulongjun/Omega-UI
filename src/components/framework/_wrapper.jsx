/**
 *
 * @Component: Wrapper
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 17:39
 *
 */

import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';


class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static defaultProps = {};
    static propTypes = {};
    componentWillMount () {}
    componentDidMount () {}
    componentWillReceiveProps (nextProps) {}
    shouldComponentUpdate (nextProps,nextState) {}
    componentWillUpdate (nextProps,nextState) {}
    componentDidUpdate (prevProps,prevState) {}
    render() {
        const _props = this.props;
        const {
            children
        } = _props;
        return (
            <Fragment>
                <div className="m-grid__item m-grid__item--fluid m-wrapper">
                    {children}
                </div>
            </Fragment>
        );
    }
}
export default Wrapper;