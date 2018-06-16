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

import Button from 'components/_button/Button';

import {_delivery} from 'plugins/utils/_props';
import {isNotExist, isArray, isObject} from 'plugins/utils/_is';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        maxHeight: 200
    };
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
        const {id, title, closeBtn, actions, scrollable, maxHeight, children} = _props;
        let _sysClass = ['modal', 'fade'];
        return (
            <Fragment>
                <Div {..._delivery(_props, _sysClass, null, {id})}>
                    <Div _includeClass='modal-dialog'>
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
                                <Div _includeClass={scrollable ? ['m-scrollable'] : []}
                                     _includeAttribute={scrollable ? {
                                         "data-scrollbar-shown": true,
                                         "data-scrollable": true,
                                         "data-max-height": maxHeight
                                     } : {}}>
                                    {children}
                                </Div>
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