/**
 * 
 * @Component: Alert
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 17:20
 * 
 */
 
import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import {_delivery} from 'plugins/utils/_props';

class Alert extends Component {
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
        const {children} = _props;
        return (
            <Fragment>
                <div {..._delivery(_props)}>{children}</div>
            </Fragment>
        );
    }
}
export default Alert;