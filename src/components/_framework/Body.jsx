/**
 *
 * @Component: Body
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 10:50
 *
 */

import React, {Component, Fragment} from 'react';

import {_delivery} from 'plugins/utils/_props';
import GridItem from "../_base/GridItem";

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    render() {
        const _props = this.props;
        const {children} = _props;
        return (
            <Fragment>
                <GridItem _includeClass='m-body' fluid={true}>
                    {children}
                </GridItem>
            </Fragment>
        );
    }
}

export default Wrapper;