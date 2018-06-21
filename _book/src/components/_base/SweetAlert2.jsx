/**
 *
 * @Component: SweetAlert2
 * @User: Longjun.Qu
 * @Date: 2018-06-19
 * @Time: 08:13
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from 'components/_element/Div';

import Swal from 'sweetalert2'

import {_delivery} from 'plugins/utils/_props';

class SweetAlert2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    componentWillMount() {
    }

    componentDidMount() {
        //== Set defaults
        Swal.setDefaults({
            width: 400,
            padding: '2.5rem',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success m-btn m-btn--custom',
            confirmButtonColor: null,
            cancelButtonClass: 'btn btn-secondary m-btn m-btn--custom',
            cancelButtonColor: null
        });

        Swal('Good job!');
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
        const {children} = _props;
        return (
            <Fragment>
                <Div />
            </Fragment>
        );
    }
}
export default SweetAlert2;