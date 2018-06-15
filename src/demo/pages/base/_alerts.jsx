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


import Wrapper from 'components/framework/_wrapper';
import Content from 'components/framework/_content';
import Section from 'components/framework/_section';

import Alert from 'components/base/_alert'
import Portle from 'components/general/_portle';

import 'sass/_demo.scss';

import '../../../plugins/config'


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
                    <SubHeader  title="提醒"/>
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
                                            bgColor: 'success'
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: false,
                                            bgColor: 'info'
                                        }}/>
                                        <Alert {...{
                                            title: 'Warning!',
                                            message: ' Better check yourself, you\'re not looking too good.',
                                            closeBtn: false,
                                            bgColor: 'warning'
                                        }}/>
                                        <Alert {...{
                                            title: 'Oh snap!',
                                            message: ' Change a few things up and try submitting again.',
                                            closeBtn: false,
                                            bgColor: 'danger'
                                        }}/>
                                        <Alert {...{
                                            title: 'Brand!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            bgColor: 'brand'
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: false,
                                            bgColor: 'primary'
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
                                            bgColor: 'success'
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            bgColor: 'info'
                                        }}/>
                                        <Alert {...{
                                            title: 'Warning!',
                                            message: ' Better check yourself, you\'re not looking too good.',
                                            closeBtn: true,
                                            bgColor: 'warning'
                                        }}/>
                                        <Alert {...{
                                            title: 'Oh snap!',
                                            message: ' Change a few things up and try submitting again.',
                                            closeBtn: true,
                                            bgColor: 'danger'
                                        }}/>
                                        <Alert {...{
                                            title: 'Brand!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'brand'
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            bgColor: 'primary'
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
                                            bgColor: 'success',
                                            icon: 'la la-warning',
                                            types: ['outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            bgColor: 'primary',
                                            icon: 'la la-warning',
                                            types: ['outline'],
                                            actions: [{
                                                value: 'Fix',
                                                color: 'primary',
                                                size: 'sm',
                                                isWide: true,
                                                btnStyle: 'pill',
                                                closeBtn: true,
                                                handle: {
                                                    click: (e) => {
                                                        console.log(e)
                                                    }
                                                }
                                            }, {
                                                value: 'Dismiss',
                                                color: 'danger',
                                                size: 'sm',
                                                isWide: true,
                                                btnStyle: 'pill',
                                                handle: {
                                                    click: (e) => {
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
                                            bgColor: 'brand',
                                            icon: 'flaticon-exclamation-1',
                                            iconStyle: 'solid',
                                            types: ['outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'danger',
                                            icon: 'flaticon-exclamation-1',
                                            iconStyle: 'solid',
                                            types: ['outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'accent',
                                            icon: 'la la-warning',
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'warning',
                                            icon: 'la la-warning',
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            bgColor: 'primary',
                                            icon: 'la la-warning',
                                            actions: [{
                                                value: 'Fix',
                                                color: 'warning',
                                                size: 'sm',
                                                isWide: true,
                                                btnStyle: 'pill'
                                            }]
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: false,
                                            bgColor: 'danger',
                                            icon: 'la la-warning',
                                            actions: [{
                                                value: 'Dismiss',
                                                color: 'outline-light',
                                                size: 'sm'
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
                                            bgColor: 'success',
                                            types: ['outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            bgColor: 'info',
                                            types: ['outline']

                                        }}/>
                                        <Alert {...{
                                            title: 'Warning!',
                                            message: ' Better check yourself, you\'re not looking too good.',
                                            closeBtn: true,
                                            bgColor: 'warning',
                                            types: ['outline']

                                        }}/>
                                        <Alert {...{
                                            title: 'Oh snap!',
                                            message: ' Change a few things up and try submitting again.',
                                            closeBtn: true,
                                            bgColor: 'danger',
                                            types: ['outline']
                                        }}/>
                                    </Section>
                                    <Section title="Outline 2x 样式">
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'success',
                                            types: ['outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Heads up!',
                                            message: ' This alert needs your attention, but it\'s not super important.',
                                            closeBtn: true,
                                            bgColor: 'info',
                                            types: ['outline-2x']

                                        }}/>
                                        <Alert {...{
                                            title: 'Warning!',
                                            message: ' Better check yourself, you\'re not looking too good.',
                                            closeBtn: true,
                                            bgColor: 'warning',
                                            types: ['outline-2x']

                                        }}/>
                                        <Alert {...{
                                            title: 'Oh snap!',
                                            message: ' Change a few things up and try submitting again.',
                                            closeBtn: true,
                                            bgColor: 'danger',
                                            types: ['outline-2x']
                                        }}/>
                                    </Section>
                                    <Section title="Square 样式">
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'primary',
                                            types: ['square']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'success',
                                            types: ['square', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'info',
                                            types: ['square', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'success',
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
                                            bgColor: 'primary',
                                            types: ['air', 'square']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'info',
                                            types: ['air', 'square']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'danger',
                                            types: ['air']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'warning',
                                            types: ['air', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'metal',
                                            types: ['air', 'outline-2x']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'primary',
                                            types: ['air', 'outline']
                                        }}/>
                                        <Alert {...{
                                            title: 'Well done!  ',
                                            message: ' You successfully read this important alert message.',
                                            closeBtn: true,
                                            bgColor: 'success',
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