/**
 *
 * @Demo: StateColor
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 16:18
 *
 */

import React, {Component, Fragment} from 'react';


import Text from 'components/_element/Text';
import Code from 'components/_element/Code'
import Paragraph from 'components/_element/Paragraph';
import Space from 'components/_element/Space';
import Div from 'components/_element/Div';
import Button from 'components/_button/Button'

import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';
import Demo from "components/_framework/Demo";
import SubHeader from 'components/_framework/SubHeader';

import Badge from 'components/_base/Badge';
import Table from "components/_base/Table";

import Portlet from 'components/_portlet/Portlet';


import Progress from 'components/base/_progress'
import Alert from 'components/base/_alert'


import 'sass/_demo.scss';


class StateColor extends Component {
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
                    <SubHeader title="状态与颜色"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '状态'
                                }} >
                                    <Section
                                        describe={
                                            <Text>Omega 设计了种类丰富的状态（State），这些状态可以直接应用于绝大部分元素和组件。我们重新设计了 Bootstrap
                                                自带的六种状态：</Text>
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
                                        {...{describe: <Text>使用 <Code>_fontColor</Code> 参数可以为任何排版元素增加状态：</Text>}}>
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
                                            describe: <Text>使用 <Code>color</Code> 或 <Code>classList</Code>
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
                                                title: 'Well done! ',
                                                message: 'You successfully read this important alert message.',
                                                bgColor: 'success',
                                            }}/>
                                            <Alert {...{
                                                title: 'Well done! ',
                                                message: 'You successfully read this important alert message.',
                                                bgColor: 'primary',
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
                                                    color: 'warning'
                                                }]
                                            }} />
                                            <Space/>
                                            <Progress {...{
                                                items: [{
                                                    now: 50,
                                                    color: 'success'
                                                }]
                                            }} />
                                        </Demo>
                                    </Section>
                                </Portlet>
                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default StateColor;