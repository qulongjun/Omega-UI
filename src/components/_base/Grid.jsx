/**
 *
 * @Component: Grid
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 17:20
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from 'components/_element/Div';
import {isExist} from 'plugins/utils/_is';
import {_delivery} from 'plugins/utils/_props';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        direction: 'ver',
        root: true
    };
    static propTypes = {
        mode: PropTypes.oneOf(['desktop', 'desktop-and-tablet', 'tablet', 'tablet-and-mobile', 'mobile']),
        root: PropTypes.bool,
        direction: PropTypes.oneOf(['ver', 'hor']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
        warp: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'])
    };

    render() {
        const _props = this.props;
        const {mode, direction, root, justify, warp, alignItems, alignContent, children} = _props;
        let _sysClass = ['m-grid'];
        isExist(mode) && _sysClass.push('m-grid--' + mode);
        isExist(direction) && _sysClass.push('m-grid--' + direction + (isExist(mode) ? ('-' + mode) : ''));
        isExist(root) && _sysClass.push('m-grid--root');
        isExist(justify) && _sysClass.push('m-grid--' + justify);
        isExist(warp) && _sysClass.push('m-grid--' + warp);
        isExist(alignItems) && _sysClass.push('m-grid--align-item-' + alignItems);
        isExist(alignContent) && _sysClass.push('m-grid--align-content-' + alignContent);
        return (
            <Fragment>
                <Div ref='grid' {..._delivery(_props, _sysClass)}>
                    {children}
                </Div>
            </Fragment>
        );
    }
}

export default Grid;