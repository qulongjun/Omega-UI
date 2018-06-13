/**
 *
 * @Component: Modal
 * @User: Longjun.Qu
 * @Date: 2018-06-13
 * @Time: 14:06
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from "../general/_button";
import Div from "../framework/_div";
import Text from "../framework/_text";
import Head from "../framework/_head";


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
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
        const {id, header, footer, children, styles, classList, attr} = _props;
        let className = [];
        className.concat(classList);
        return (
            <Fragment>
                <div className="modal fade" id={id} attr={
                    Object.assign(attr, {"tabindex": "-1", "role": "dialog", "aria-hidden": "true"})
                }>
                    <Div classList={['modal-dialog']} attr={{"role": "document"}}>
                        <Div classList={['modal-content']}>
                            {header && <ModalHead {...header}/>}
                            <Div classList={['modal-body']}>
                                {children}
                            </Div>
                            {footer && <ModalFooter {...footer}/>}
                        </Div>
                    </Div>
                </div>
            </Fragment>
        );
    }
}

class ModalHead extends Component {
    render() {
        const _props = this.props;
        const {title, closeBtn, styles, classList, attr} = _props;
        classList.push('modal-header');
        return (
            <Fragment>
                <Div classList={classList} {..._props}>
                    <Head tag="h5" classList={['modal-title']}>
                        {title}
                    </Head>
                    {
                        closeBtn && (
                            <Button {...{
                                absoluteClass: ['close'],
                                attr: {
                                    "data-dismiss": "modal",
                                    "aria-label": "Close"
                                },
                                value: (<Text {...{attr: {"aria-hidden": "true"}}}>&times;</Text>)
                            }
                                    }/>
                        )
                    }
                </Div>
            </Fragment>
        )
    }
}

class ModalFooter extends Component {
    render() {
        const _props = this.props;
        const {actionBtns, styles, classList, attr} = _props;
        classList.push('modal-footer');
        return (
            <Fragment>
                <Div {..._props}>

                </Div>
                <div className={classList} style={styles} {...attr}>
                    {
                        actionBtns && actionBtns.map((item) => (
                            <Button {...item} />
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}


export default Modal;