/**
 *
 * @Demo: SubHeader
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 17:12
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Button from "../../components/general/_button";


// import './_subheader.scss'

class SubHeader extends Component {
    constructor(props, context) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {title} = _props;
        const router = this.context.router;
        return (
            <Fragment>
                <div className="m-subheader">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <h3 className="m-subheader__title m-subheader__title--separator">
                                {title}
                            </h3>
                        </div>
                        <Button {...{
                            value: '返回',
                            color: 'outline-metal',
                            handle: {
                                click: () => {
                                    router.history.push('/');
                                }
                            }
                        }}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

SubHeader.contextTypes = {
    router: PropTypes.object
};

export default SubHeader;