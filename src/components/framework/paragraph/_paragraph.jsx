/**
 *
 * @Component: Content
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 21:37
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        classList: []
    };
    static propTypes = {
        styles: PropTypes.object,
        attr: PropTypes.object
    };

    componentWillMount() {
    }

    componentDidMount() {
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
        const {
            children,
            styles,
            classList,
            attr,
            state
        } = _props;
        const className = (state ? 'm--font-' + state : '')
            + ' ' + classList.join(' ');
        return (
            <Fragment>
                <p style={styles} className={className} {...attr}>
                    {children}
                </p>
            </Fragment>
        );
    }
}

export default Paragraph;