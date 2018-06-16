/**
 *
 * @Demo: Alerts
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 16:18
 *
 */

import React, {Component, Fragment} from 'react';


import SubHeader from 'components/_framework/SubHeader';


import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';

import Alert from 'components/_base/Alert'
import Portle from 'components/_portlet/Portlet';

import 'sass/_demo.scss';

import 'plugins/config'


class Alerts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {} = _props;
        return (
            <Fragment>
                <Wrapper>
                    <SubHeader title="提醒"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '基础提醒'
                                    }
                                }} >
                                    <Section>
                                        <Alert {...{
                                            title: 'Hello World!',
                                            message: ' This is default alert message box style.',
                                            closeBtn: false
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            alertColor: 'success'
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: false,
                                            alertColor: 'info'
                                        }}/>
                                        <Alert {...{
                                            title: 'Warning!',
                                            message: ' Better check yourself, you\'re not looking too good.',
                                            closeBtn: false,
                                            alertColor: 'warning'
                                        }}/>
                                        <Alert {...{
                                            title: 'Oh snap!',
                                            message: ' Change a few things up and try submitting again.',
                                            closeBtn: false,
                                            alertColor: 'danger'
                                        }}/>
                                        <Alert {...{
                                            title: 'Brand!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            alertColor: 'brand'
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: false,
                                            alertColor: 'primary'
                                        }}/>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '可关闭的提醒'
                                    }
                                }} >
                                    <Section>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'success'
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            alertColor: 'info'
                                        }}/>
                                        <Alert {...{
                                            title: 'Warning!',
                                            message: ' Better check yourself, you\'re not looking too good.',
                                            closeBtn: true,
                                            alertColor: 'warning'
                                        }}/>
                                        <Alert {...{
                                            title: 'Oh snap!',
                                            message: ' Change a few things up and try submitting again.',
                                            closeBtn: true,
                                            alertColor: 'danger'
                                        }}/>
                                        <Alert {...{
                                            title: 'Brand!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'brand'
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            alertColor: 'primary'
                                        }}/>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '带图标或按钮的提醒'
                                    }
                                }} >
                                    <Section>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'success',
                                            icon: 'la la-warning',
                                            types: ['outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            alertColor: 'primary',
                                            icon: 'la la-warning',
                                            types: ['outline'],
                                            actions: [{
                                                value: 'Fix',
                                                btnColor: 'primary',
                                                size: 'sm',
                                                isWide: true,
                                                btnStyle: 'pill',
                                                closeBtn: true,
                                                _handle: {
                                                    onClick: (e) => {
                                                        console.log(e)
                                                    }
                                                }
                                            }, {
                                                value: 'Dismiss',
                                                btnColor: 'danger',
                                                size: 'sm',
                                                isWide: true,
                                                btnStyle: 'pill',
                                                _handle: {
                                                    onClick: (e) => {
                                                        $(e.target).alert('close')
                                                    }
                                                }
                                            }],
                                            actionStyle: {
                                                width: '40%'
                                            }

                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'brand',
                                            icon: 'flaticon-exclamation-1',
                                            iconStyle: 'solid',
                                            types: ['outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'danger',
                                            icon: 'flaticon-exclamation-1',
                                            iconStyle: 'solid',
                                            types: ['outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'accent',
                                            icon: 'la la-warning',
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'warning',
                                            icon: 'la la-warning',
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            alertColor: 'primary',
                                            icon: 'la la-warning',
                                            actions: [{
                                                value: 'Fix',
                                                btnColor: 'warning',
                                                size: 'sm',
                                                isWide: true,
                                                btnStyle: 'pill',
                                                _handle: {
                                                    onClick: () => {
                                                        alert('Fixed');
                                                    }
                                                }
                                            }]
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            alertColor: 'danger',
                                            icon: 'la la-warning',
                                            actions: [{
                                                value: 'Dismiss',
                                                btnColor: 'outline-light',
                                                size: 'sm',
                                                _handle: {
                                                    onClick: () => {
                                                        alert('Click');
                                                    }
                                                }
                                            }]
                                        }}/>
                                    </Section>
                                </Portle>
                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '提醒样式'
                                    }
                                }} >
                                    <Section title="Outline 样式">
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'success',
                                            types: ['outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            alertColor: 'info',
                                            types: ['outline']

                                        }}/>
                                        <Alert {...{
                                            title: 'Warning!',
                                            message: ' Better check yourself, you\'re not looking too good.',
                                            closeBtn: true,
                                            alertColor: 'warning',
                                            types: ['outline']

                                        }}/>
                                        <Alert {...{
                                            title: 'Oh snap!',
                                            message: ' Change a few things up and try submitting again.',
                                            closeBtn: true,
                                            alertColor: 'danger',
                                            types: ['outline']
                                        }}/>
                                    </Section>
                                    <Section title="Outline 2x 样式">
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'success',
                                            types: ['outline', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            alertColor: 'info',
                                            types: ['outline', 'outline-2x']

                                        }}/>
                                        <Alert {...{
                                            title: 'Warning!',
                                            message: ' Better check yourself, you\'re not looking too good.',
                                            closeBtn: true,
                                            alertColor: 'warning',
                                            types: ['outline', 'outline-2x']

                                        }}/>
                                        <Alert {...{
                                            title: 'Oh snap!',
                                            message: ' Change a few things up and try submitting again.',
                                            closeBtn: true,
                                            alertColor: 'danger',
                                            types: ['outline', 'outline-2x']
                                        }}/>
                                    </Section>
                                    <Section title="Square 样式">
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'primary',
                                            types: ['square']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'success',
                                            types: ['square', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'info',
                                            types: ['square', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'success',
                                            icon: 'la la-warning',
                                            types: ['air', 'square']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            icon: 'la la-warning',
                                            types: ['air', 'square']
                                        }}/>
                                    </Section>
                                    <Section title="Air 样式">
                                        <Alert {...{
                                            title: 'Heads up! ',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            types: ['air', 'square']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'primary',
                                            types: ['air', 'square']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'info',
                                            types: ['air', 'square']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'danger',
                                            types: ['air']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'warning',
                                            types: ['air', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'metal',
                                            types: ['air', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'primary',
                                            types: ['air', 'outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            alertColor: 'success',
                                            types: ['air'],
                                            icon: 'la la-warning'
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            types: ['air'],
                                            icon: 'la la-warning'
                                        }}/>
                                    </Section>
                                </Portle>
                            </div>
                        </div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default Alerts;