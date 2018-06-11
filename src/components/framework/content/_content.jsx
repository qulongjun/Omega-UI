/**
 *
 * @Component: Content
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 17:33
 *
 */

import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';

import './_content.scss'


class Content extends Component {
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
                <div className="m-content">
                    {children}
                </div>
            </Fragment>
        );
    }
}
export default Content;