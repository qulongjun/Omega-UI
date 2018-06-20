/**
 *
 * @Component: Title
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 22:34
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_sysBind} from 'plugins/utils/_props';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
    }

    render() {
        const _props = this.props;
        const {level, children} = _props;
        const Tag = 'h' + level;
        return (
            <Fragment>
                <Tag {..._sysBind(_props)}>{children}</Tag>
            </Fragment>
        );
    }
}
export default Title;