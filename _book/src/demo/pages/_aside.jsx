/**
 *
 * @Demo: Aside
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 17:06
 *
 */

import React, {Component, Fragment} from 'react';

// import './aside.scss'

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {} = _props;
        return (
            <Fragment>
                <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
                    <i className="la la-close"/>
                </button>
                <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">

                </div>
            </Fragment>
        );
    }
}
export default Aside;