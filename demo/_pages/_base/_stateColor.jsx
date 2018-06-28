/**
 *
 * @Demo: StateColor
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 18:16
 *
 */


import React, {Component, Fragment} from 'react';

import {
    Content,
    Div,
    Portlet,
    Text,
    Code,
    Section,
    Table,
    Badge,
    Progress,
    Demo,
    Paragraph,
    Button,
    Alert,
    Space,
    ButtonDropdown,
    SubHeader
} from 'omega';

export default class StateColor extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '状态与颜色',
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
                                    value: '状态与颜色',
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
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '状态'
                            }} >
                                <Section
                                    describe={
                                        <Text>我们重新设计了种类丰富的状态颜色，这些状态颜色可以通过 <Code>class</Code> 修饰符直接应用于绝大部分元素和组件。我们继承了
                                            <Code>Bootstrap</Code> 状态：</Text>
                                    }>
                                    <Table {...{
                                        head: ['状态', '预览', 'Class 前缀', '使用示例'],
                                        data: [[
                                            "Success", {value: (<Badge bgColor={'success'}/>)}, {
                                                value: (<Code>*-success</Code>)
                                            }, {value: (<Code>btn-success,m--font-success</Code>)}
                                        ], [
                                            "Warning", {value: (<Badge bgColor={'warning'}/>)}, {
                                                value: (<Code>*-warning</Code>)
                                            }, {value: (<Code>btn-warning,m--font-warning</Code>)}
                                        ], [
                                            "Danger", {value: (<Badge bgColor={'danger'}/>)}, {
                                                value: (<Code>*-danger</Code>)
                                            }, {value: (<Code>btn-danger,m--font-danger</Code>)}
                                        ], [
                                            "Info", {value: (<Badge bgColor={'info'}/>)}, {
                                                value: (<Code>*-info</Code>)
                                            }, {value: (<Code>btn-info,m--font-info</Code>)}
                                        ], [
                                            "Primary", {value: (<Badge bgColor={'primary'}/>)}, {
                                                value: (<Code>*-primary</Code>)
                                            }, {value: (<Code>btn-primary,m--font-primary</Code>)}
                                        ], [
                                            "Secondary", {value: (<Badge bgColor={'secondary'}/>)}, {
                                                value: (<Code>*-secondary</Code>)
                                            }, {value: (<Code>btn-secondary,m--font-secondary</Code>)}
                                        ]],
                                        classList: ['text-center']
                                    }}/>
                                </Section>
                                <Section
                                    describe={
                                        <Text> 与此同时，我们也增加了一些独特的状态，例如 <Code>brand</Code> 和 <Code>metal</Code>
                                            等:</Text>
                                    }>
                                    <Table {...{
                                        head: ['状态', '预览', 'Class 前缀', '使用示例'],
                                        data: [[
                                            "Brand", {value: (<Badge bgColor={'brand'}/>)}, {
                                                value: (<Code>*-brand</Code>)
                                            }, {value: (<Code>btn-brand,m--font-brand</Code>)}
                                        ], [
                                            "Accent", {value: (<Badge bgColor={'accent'}/>)}, {
                                                value: (<Code>*-accent</Code>)
                                            }, {value: (<Code>btn-accent,m--font-accent</Code>)}
                                        ], [
                                            "Focus", {value: (<Badge bgColor={'focus'}/>)}, {
                                                value: (<Code>*-focus</Code>)
                                            }, {value: (<Code>btn-focus,m--font-focus</Code>)}
                                        ], [
                                            "Metal", {value: (<Badge bgColor={'metal'}/>)}, {
                                                value: (<Code>*-metal</Code>)
                                            }, {value: (<Code>btn-metal,m--font-metal</Code>)}
                                        ], [
                                            "Light", {value: (<Badge bgColor={'light'}/>)}, {
                                                value: (<Code>*-light</Code>)
                                            }, {value: (<Code>btn-light,m--font-light</Code>)}
                                        ]],
                                        classList: ['text-center']
                                    }}/>
                                </Section>

                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '使用示例'
                            }} >
                                <Section
                                    {...{describe: <Text>可以使用 <Code>_fontColor</Code> 属性为任何排版元素增加状态：</Text>}}>
                                    <Demo>
                                        <Paragraph _fontColor="success">Success State Text</Paragraph>
                                        <Paragraph _fontColor="warning">Warning State Text</Paragraph>
                                        <Paragraph _fontColor="info">Info State Text</Paragraph>
                                        <Paragraph _fontColor="danger">Danger State Text</Paragraph>
                                        <Paragraph _fontColor="primary">Primary State Text</Paragraph>
                                        <Paragraph _fontColor="focus">Focus State Text</Paragraph>
                                    </Demo>
                                </Section>
                                <Section
                                    {...{
                                        describe: <Text>可以使用 <Code>_includeClass</Code>
                                            属性可以为绝大部分组件增加状态：</Text>
                                    }}>
                                    <Demo>
                                        <Button btnColor="primary" value="Primary"/>
                                        <Button btnColor="success" value="Success"/>
                                        <Button btnColor="warning" value="Warning"/>
                                        <Button btnColor="danger" value="Danger"/>
                                        <Button btnColor="metal" value="Metal"/>
                                        <Button btnColor="brand" value="Brand"/>
                                        <Button btnColor="focus" value="Focus"/>
                                    </Demo>
                                    <Demo>
                                        <Badge {...{
                                            bgColor: 'brand',
                                            type: 'wide'
                                        }}>new</Badge>
                                        <Badge {...{
                                            bgColor: 'metal',
                                            type: 'wide'
                                        }}>pendding</Badge>
                                        <Badge {...{
                                            bgColor: 'primary',
                                            type: 'wide'
                                        }}>203</Badge>
                                        <Badge {...{
                                            bgColor: 'success',
                                            type: 'wide'
                                        }}>hot</Badge>
                                        <Badge {...{
                                            bgColor: 'info',
                                            type: 'wide'
                                        }}>fixed</Badge>
                                        <Badge {...{
                                            bgColor: 'warning',
                                            type: 'wide'
                                        }}>in process</Badge>
                                        <Badge {...{
                                            bgColor: 'danger',
                                            type: 'wide'
                                        }}>completed</Badge>
                                        <Badge {...{
                                            bgColor: 'focus',
                                            type: 'wide'
                                        }}>focus</Badge>
                                        <Badge {...{
                                            bgColor: 'accent',
                                            type: 'wide'
                                        }}>accent</Badge>
                                    </Demo>
                                    <Demo>
                                        <Alert {...{
                                            title: '干得漂亮! ',
                                            message: '您成功阅读了本条重要消息。',
                                            alertColor: 'success',
                                        }}/>
                                        <Alert {...{
                                            title: '干得漂亮! ',
                                            message: '您成功阅读了本条重要消息。',
                                            alertColor: 'primary',
                                        }}/>
                                        <Progress {...{
                                            items: [{
                                                now: 25,
                                                showValue: true
                                            }]
                                        }} />
                                        <Space/>
                                        <Progress {...{
                                            items: [{
                                                now: 80,
                                                _bgColor: 'warning'
                                            }],
                                        }} />
                                        <Space/>
                                        <Progress {...{
                                            items: [{
                                                now: 50,
                                                _bgColor: 'success'
                                            }],
                                        }} />
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}