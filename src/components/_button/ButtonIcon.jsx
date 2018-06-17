/**
 *
 * @Component: ButtonIcon
 * @User: Longjun.Qu
 * @Date: 2018-06-17
 * @Time: 20:45
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_delivery} from 'plugins/utils/_props';
import Button from 'components/_button/Button';
import Text from 'components/_element/Text';
import Icon from "../_base/Icon";
class ButtonIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

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
        const {children} = _props;
        let _sysClass = ['m-btn--icon'];

        return (
            <Fragment>
                <Button {..._delivery(_props, _sysClass)}>
                    <Text>
                        <Icon iconName=""/>
                        <Text>
                            
                        </Text>
                    </Text>
                </Button>
            </Fragment>
        );
    }
}
export default ButtonIcon;