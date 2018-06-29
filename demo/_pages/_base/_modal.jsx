/**
 *
 * @Demo: Modals
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 19:47
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Section,
    Table,
    Text,
    Modal,
    Button,
    Paragraph,
    Title,
    Popover,
    Separator,
    Tooltip,
    SubHeader
} from 'omega';
export default class Modals extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '模态框',
                        separator: true
                    },
                    breadcrumbs: {
                        items: [
                            {
                                icon: {
                                    show: true,
                                    name: 'la la-home'
                                }
                            }, {
                                text: {
                                    value: '基础组件',
                                    href: 'javascript:;'
                                }
                            }, {
                                text: {
                                    value: '模态框',
                                    href: 'javascript:;'
                                }
                            }
                        ],
                        separator: {
                            show: true,
                            text: {
                                value: '-'
                            }
                        }
                    }
                }}/>
                <Content>
                    <Div _includeClass="row">
                        <Div _includeClass="col-xl-12">
                            <Portlet {...{
                                header: ''
                            }} >
                                <Table {...{
                                    data: [
                                        [{
                                            value: '基础模态框',
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
                                        ['带滚动条的模态框', {
                                            value: (<Button {...{
                                                value: 'Launch Modal',
                                                btnColor: 'metal'
                                            }} _includeAttribute={{
                                                "data-toggle": "modal",
                                                "data-target": "#m_modal_1_2"
                                            }}/>)
                                        }],


                                        ['长内容模态框', {
                                            value: (<Button {...{
                                                value: 'Launch Modal',
                                                btnColor: 'brand'
                                            }} _includeAttribute={{
                                                "data-toggle": "modal",
                                                "data-target": "#m_modal_2"
                                            }}/>)
                                        }],


                                        ['带组件的模态框', {
                                            value: (<Button {...{
                                                value: 'Launch Modal',
                                                btnColor: 'success'
                                            }} _includeAttribute={{
                                                "data-toggle": "modal",
                                                "data-target": "#m_modal_3"
                                            }}/>)
                                        }],


                                        ['宽模态框', {
                                            value: (<Button {...{
                                                value: 'Launch Modal',
                                                btnColor: 'warning'
                                            }} _includeAttribute={{
                                                "data-toggle": "modal",
                                                "data-target": "#m_modal_4"
                                            }}/>)
                                        }],


                                        ['窄模态框', {
                                            value: (<Button {...{
                                                value: 'Launch Modal',
                                                btnColor: 'danger'
                                            }} _includeAttribute={{
                                                "data-toggle": "modal",
                                                "data-target": "#m_modal_5"
                                            }}/>)
                                        }],


                                        ['垂直居中模态框', {
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
                        scroll: {
                            show: true,
                            fixHeight: 200
                        },
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


                    <Modal {...{
                        id: "m_modal_3",
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
                        <Title level={5}>Popover in a modal</Title>
                        <Paragraph>
                            This <Popover {...{
                            title: 'Popover title',
                            value: 'button',
                            btnColor: 'secondary'
                        }}>
                            Popover body content is set in this attribute.
                        </Popover> triggers a popover on click.
                        </Paragraph>
                        <Separator/>
                        <Title level={5}>Tooltips in a modal</Title>
                        <Paragraph>
                            <Tooltip {...{
                                label: 'a',
                                value: 'This link',
                                _uniqueClass: []
                            }}>Tooltip</Tooltip> and <Tooltip {...{
                            label: 'a',
                            value: 'That link',
                            _uniqueClass: []
                        }}>Tooltip</Tooltip> have tooltips on hover.
                        </Paragraph>
                    </Modal>
                    <Modal {...{
                        id: "m_modal_4",
                        size: 'lg',
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
                    </Modal>
                    <Modal {...{
                        id: "m_modal_5",
                        size: 'sm',
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
                    </Modal>
                    <Modal {...{
                        id: "m_modal_6",
                        centered: true,
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
                    </Modal>
                </Content>
            </Fragment>
        );
    }
}