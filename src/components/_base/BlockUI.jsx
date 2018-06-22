/**
 *
 * @Component: BlockUI
 * @User: Longjun.Qu
 * @Date: 2018-06-16
 * @Time: 16:25
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from 'components/_element/Div';
import {_delivery} from 'plugins/utils/_props';


import 'block-ui';

import {mApp} from 'plugins/_framework/_base/_app';

class BlockUI extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        block: true
    };
    static propTypes = {
        block: PropTypes.bool,
        overlayColor: PropTypes.string
    };

    componentDidMount() {
        const _props = this.props;
        // const el = this.refs.block.refs.div;
        const {block, overlayColor, type, message, el = this.refs.block.refs.div} = _props;
        if (block) {
            const _config = {};
            overlayColor && Object.assign(_config, {
                state: overlayColor
            });
            type && Object.assign(_config, {type});
            message && Object.assign(_config, {message});
            mApp.block(el, _config);
        }

    }

    render() {
        const _props = this.props;
        const {children} = _props;
        return (
            <Fragment>
                <Div ref="block">{children}</Div>
            </Fragment>
        );
    }
}
export default BlockUI;