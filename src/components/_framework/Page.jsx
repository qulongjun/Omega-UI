/**
 *
 * @Component: Page
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 10:50
 *
 */

import React, {Component, Fragment} from 'react';

import {_delivery} from 'plugins/utils/_props';
import Grid from "../_base/Grid";

class Page extends Component {
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
                <Grid {..._delivery(_props, 'm-page')} {...{
                    direction: 'hor',
                    root: true
                }}>
                    {children}
                </Grid>
            </Fragment>
        );
    }
}

export default Page;