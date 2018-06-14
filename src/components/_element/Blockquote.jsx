/**
 *
 * @Component: Blockquote
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 11:10
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {_sysBind} from 'plugins/utils/_props';

class Blockquote extends Component {
    static defaultProps = {
        align: 'left'
    };
    static propTypes = {
        align: PropTypes.oneOf(['left', 'center', 'right', 'justify'])
    };

    render() {
        const _props = this.props;
        const {align, quote, source, children} = _props;
        let _sysClass = ['blockquote'];
        align && _sysClass.push('text-' + align);
        return (
            <Fragment>
                <blockquote {..._sysBind(_props, _sysClass)}>
                    {children}
                    <footer className="blockquote-footer">
                        {quote}
                        <cite title={source}>{source}</cite>
                    </footer>
                </blockquote>
            </Fragment>
        );
    }
}
export default Blockquote;