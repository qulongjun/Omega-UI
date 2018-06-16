/**
 *
 * @Demo: Modal
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 23:07
 *
 */


import React, {Component, Fragment} from 'react';

import SubHeader from 'components/_framework/SubHeader';
import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';
import Div from 'components/_element/Div';
import Text from "components/_element/Text";
import Paragraph from "components/_element/Paragraph";


import Demo from "components/_framework/Demo";

import Table from "components/_base/Table";
import Modal from "components/_base/Modal";

import Portlet from 'components/_portlet/Portlet';

import Button from "components/_button/Button";


import 'sass/_demo.scss';


class Modals extends Component {
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
                    <SubHeader title="Modal"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-12">
                                <Portlet {...{
                                    header: ''
                                }} >
                                    <Table {...{
                                        data: [
                                            [{
                                                value: 'Basic demo',
                                                _includeStyle: {
                                                    width: '30%'
                                                }
                                            }, {
                                                value: (<Button {...{
                                                    value: 'Launch Modal',
                                                    btnColor: 'primary'
                                                }} _includeAttribute={{
                                                    "data-toggle": "modal",
                                                    "data-target": "#m_modal_1"
                                                }}/>)
                                            }],
                                            ['Scrollable fixed content', {
                                                value: (<Button {...{
                                                    value: 'Launch Modal',
                                                    btnColor: 'metal'
                                                }} _includeAttribute={{
                                                    "data-toggle": "modal",
                                                    "data-target": "#m_modal_1_2"
                                                }}/>)
                                            }],


                                            ['Scrolling long content', {
                                                value: (<Button {...{
                                                    value: 'Launch Modal',
                                                    btnColor: 'brand'
                                                }} _includeAttribute={{
                                                    "data-toggle": "modal",
                                                    "data-target": "#m_modal_2"
                                                }}/>)
                                            }],


                                            ['Tooltips and popovers', {
                                                value: (<Button {...{
                                                    value: 'Launch Modal',
                                                    btnColor: 'success'
                                                }} _includeAttribute={{
                                                    "data-toggle": "modal",
                                                    "data-target": "#m_modal_3"
                                                }}/>)
                                            }],


                                            ['Large modal', {
                                                value: (<Button {...{
                                                    value: 'Launch Modal',
                                                    btnColor: 'warning'
                                                }} _includeAttribute={{
                                                    "data-toggle": "modal",
                                                    "data-target": "#m_modal_4"
                                                }}/>)
                                            }],


                                            ['Small modal', {
                                                value: (<Button {...{
                                                    value: 'Launch Modal',
                                                    btnColor: 'danger'
                                                }} _includeAttribute={{
                                                    "data-toggle": "modal",
                                                    "data-target": "#m_modal_5"
                                                }}/>)
                                            }],


                                            ['Vertically centered', {
                                                value: (<Button {...{
                                                    value: 'Launch Modal',
                                                    btnColor: 'focus'
                                                }} _includeAttribute={{
                                                    "data-toggle": "modal",
                                                    "data-target": "#m_modal_6"
                                                }}/>)
                                            }]
                                        ],
                                        bordered: true
                                    }}/>

                                </Portlet>
                            </Div>
                        </Div>
                        <Modal {...{
                            id: "m_modal_1",
                            title: 'Modal title',
                            actions: [
                                {
                                    value: 'Close',
                                    btnColor: 'secondary',
                                    _includeAttribute: {
                                        'data-dismiss': 'modal'
                                    }
                                }, {
                                    value: 'Save changes',
                                    btnColor: 'primary',
                                    _handle: {
                                        onClick: (event) => {
                                            console.log(event);
                                        }
                                    }
                                }
                            ]
                        }}>
                            <Paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Paragraph>
                        </Modal>

                        <Modal {...{
                            id: "m_modal_1_2",
                            scrollable: true,
                            title: 'Modal title',
                            actions: [
                                {
                                    value: 'Close',
                                    btnColor: 'secondary',
                                    _includeAttribute: {
                                        'data-dismiss': 'modal'
                                    }
                                }, {
                                    value: 'Save changes',
                                    btnColor: 'primary',
                                    _handle: {
                                        onClick: (event) => {
                                            console.log(event);
                                        }
                                    }
                                }
                            ]
                        }}>
                            <Paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Paragraph>
                            <Paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Paragraph>
                            <Paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Paragraph>
                        </Modal>

                        <Modal {...{
                            id: "m_modal_2",
                            scrollable: true,
                            title: 'Modal title',
                            actions: [
                                {
                                    value: 'Close',
                                    btnColor: 'secondary',
                                    _includeAttribute: {
                                        'data-dismiss': 'modal'
                                    }
                                }, {
                                    value: 'Save changes',
                                    btnColor: 'primary',
                                    _handle: {
                                        onClick: (event) => {
                                            console.log(event);
                                        }
                                    }
                                }
                            ]
                        }}>
                            <Paragraph>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Paragraph>
                            <Paragraph>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Paragraph>
                            <Paragraph>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Paragraph>
                            <Paragraph>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Paragraph>
                            <Paragraph>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Paragraph>
                            <Paragraph>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Paragraph>
                            <Paragraph>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Paragraph>
                        </Modal>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default Modals;