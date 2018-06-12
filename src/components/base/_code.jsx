/**
 *
 * @Component: Code
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 19:21
 *
 */

import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';

class Code extends Component {
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
                <code>{children}</code>
            </Fragment>
        );
    }
}
export default Code;