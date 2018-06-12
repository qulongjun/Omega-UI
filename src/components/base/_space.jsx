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
        size: PropTypes.number
    };

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
            size
        } = _props;
        const style = [5, 10, 15, 20, 25, 30, 35, 40].includes(size) ? {} : {
            display: 'block',
            height: 0,
            marginBottom: size + 'px'
        };
        return (
            <Fragment>
                <div className={'m--space-' + size} style={style}/>
            </Fragment>
        );
    }
}
export default Space;