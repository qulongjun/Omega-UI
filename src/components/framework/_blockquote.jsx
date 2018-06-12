/**
 *
 * @Component: Blockquote
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 12:59
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Blockquote extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object,
        reverse: PropTypes.bool
    };

    render() {
        const _props = this.props;
        const {content, quote, reverse, styles, classList, attr} = _props;
        let className = ['blockquote'];
        reverse && className.push('text-right');
        className = className.concat(classList);
        return (
            <Fragment>
                <blockquote className={className.join(' ')} {...attr} style={styles}>
                    {content}
                    <footer className="blockquote-footer">
                        {quote}
                    </footer>
                </blockquote>
            </Fragment>
        );
    }
}
export default Blockquote;