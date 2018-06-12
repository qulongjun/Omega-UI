/**
 *
 * @Demo: SubHeader
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 17:12
 *
 */

import React, {Component, Fragment} from 'react';

// import './_subheader.scss'

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {title} = _props;
        return (
            <Fragment>
                <div className="m-subheader">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <h3 className="m-subheader__title m-subheader__title--separator">
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default SubHeader;