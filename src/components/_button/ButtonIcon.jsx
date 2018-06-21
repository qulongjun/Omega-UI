/**
 *
 * @Component: ButtonIcon
 * @User: Longjun.Qu
 * @Date: 2018-06-17
 * @Time: 20:45
 *
 */

import React, {Component, Fragment} from 'react';
import {_delivery} from 'plugins/utils/_props';
import Button from 'components/_button/Button';
class ButtonIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        let _sysClass = ['m-btn--icon'];

        return (
            <Fragment>
                <Button {..._delivery(_props, _sysClass)}/>
            </Fragment>
        );
    }
}
export default ButtonIcon;