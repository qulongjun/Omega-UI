/**
 *
 * @Component: Portle
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 15:17
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


class Portle extends Component {
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
        const {header, children} = _props;
        return (
            <Fragment>
                <div className="m-portlet m-portlet--mobile">
                    {header.show && <Header {...header}/>}
                    <div className="m-portlet__body">
                        {children}
                    </div>
                </div>
            </Fragment>
        );
    }
}

class Header extends Component {
    render() {
        const _props = this.props;
        const {title, describe, icon, tools} = _props;
        return (
            <Fragment>
                <div className="m-portlet__head">
                    <div className="m-portlet__head-caption">
                        <div className="m-portlet__head-title">
                            <h3 className="m-portlet__head-text">
                                {title}
                                <small>
                                    {describe}
                                </small>
                            </h3>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Portle;