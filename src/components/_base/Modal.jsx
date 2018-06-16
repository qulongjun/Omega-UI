/**
 *
 * @Component: Modal
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 17:20
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from 'components/_element/Div';
import Title from 'components/_element/Title';
import Scroll from 'components/_base/Scroll';
import Button from 'components/_button/Button';

import {_delivery} from 'plugins/utils/_props';
import {isNotExist, isArray, isObject} from 'plugins/utils/_is';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    render() {
        const _props = this.props;
        const {id, title, closeBtn, actions, scroll, centered, size, children} = _props;
        let _sysClass = ['modal', 'fade'];
        let _dialogClass = ['modal-dialog'];
        !isNotExist(centered) && centered && _dialogClass.push('modal-dialog-centered');
        !isNotExist(size) && ['lg', 'sm'].includes(size) && _dialogClass.push('modal-' + size);
        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass, null, {id})}>
                    <Div _includeClass={_dialogClass}>
                        <Div _includeClass='modal-content'>
                            <Div _includeClass='modal-header'>
                                {title && <Title level={5} _includeClass='modal-title'>{title}</Title>}
                                {closeBtn && <Button {...{
                                    '_uniqueClass': 'close',
                                    'data-dismiss': 'modal',
                                    'aria-label': 'Close',
                                    'value': (<Text _includeAttribute={{"aria-hidden": true}}>&times;</Text>)
                                }}/>}
                            </Div>
                            <Div _includeClass='modal-body'>
                                {!isNotExist(scroll) && scroll.show ? <Scroll {...scroll}>
                                    {children}
                                </Scroll> : children}
                            </Div>
                            <Div _includeClass='modal-footer'>
                                {!isNotExist(actions) && isArray(actions) && actions.map((item, index) => (
                                    <Button key={index} {..._delivery(item)}/>
                                ))}
                                {!isNotExist(actions) && isObject(actions) && ( <Button {..._delivery(actions)}/>)}
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Fragment>
        );
    }
}
export default Modal;