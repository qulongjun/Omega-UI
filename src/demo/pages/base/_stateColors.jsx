/**
 *
 * @Demo: StateColor
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 16:18
 *
 */

import React, {Component, Fragment} from 'react';

import SubHeader from '../_subheader';

import Text from 'components/framework/_text';
import Code from 'components/framework/_code'
import Paragraph from 'components/framework/_paragraph';
import Wrapper from 'components/framework/_wrapper';
import Content from 'components/framework/_content';
import Section from 'components/framework/_section';
import Space from 'components/framework/_space'

import Badge from 'components/base/_badge'
import Progress from 'components/base/_progress'
import Alert from 'components/base/_alert'
import Table from "components/base/_table";

import Portle from 'components/general/_portle';
import Button from 'components/general/_button'

import Demo from "../_demo";

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
                    <SubHeader  title="状态与颜色"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '状态'
                                    }
                                }} >
                                    <Section
                                        describe={
                                            <Text>Omega 设计了种类丰富的状态（State），这些状态可以直接应用于绝大部分元素和组件。我们重新设计了 Bootstrap
                                                自带的六种状态：</Text>
                                        }>
                                        <Table {...{
                                            head: ['状态', '预览', 'Class 前缀', '使用示例'],
                                            data: [[
                                                "Success", {value: (<Badge color={'success'}/>)}, {
                                                    value: (<Code>*-success</Code>)
                                                }, {value: (<Code>btn-success,m--font-success</Code>)}
                                            ], [
                                                "Warning", {value: (<Badge color={'warning'}/>)}, {
                                                    value: (<Code>*-warning</Code>)
                                                }, {value: (<Code>btn-warning,m--font-warning</Code>)}
                                            ], [
                                                "Danger", {value: (<Badge color={'danger'}/>)}, {
                                                    value: (<Code>*-danger</Code>)
                                                }, {value: (<Code>btn-danger,m--font-danger</Code>)}
                                            ], [
                                                "Info", {value: (<Badge color={'info'}/>)}, {
                                                    value: (<Code>*-info</Code>)
                                                }, {value: (<Code>btn-info,m--font-info</Code>)}
                                            ], [
                                                "Primary", {value: (<Badge color={'primary'}/>)}, {
                                                    value: (<Code>*-primary</Code>)
                                                }, {value: (<Code>btn-primary,m--font-primary</Code>)}
                                            ], [
                                                "Secondary", {value: (<Badge color={'secondary'}/>)}, {
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
                                                "Brand", {value: (<Badge color={'brand'}/>)}, {
                                                    value: (<Code>*-brand</Code>)
                                                }, {value: (<Code>btn-brand,m--font-brand</Code>)}
                                            ], [
                                                "Accent", {value: (<Badge color={'accent'}/>)}, {
                                                    value: (<Code>*-accent</Code>)
                                                }, {value: (<Code>btn-accent,m--font-accent</Code>)}
                                            ], [
                                                "Focus", {value: (<Badge color={'focus'}/>)}, {
                                                    value: (<Code>*-focus</Code>)
                                                }, {value: (<Code>btn-focus,m--font-focus</Code>)}
                                            ], [
                                                "Metal", {value: (<Badge color={'metal'}/>)}, {
                                                    value: (<Code>*-metal</Code>)
                                                }, {value: (<Code>btn-metal,m--font-metal</Code>)}
                                            ], [
                                                "Light", {value: (<Badge color={'light'}/>)}, {
                                                    value: (<Code>*-light</Code>)
                                                }, {value: (<Code>btn-light,m--font-light</Code>)}
                                            ]],
                                            classList: ['text-center']
                                        }}/>
                                    </Section>

                                </Portle>
                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '使用示例'
                                    }
                                }} >
                                    <Section
                                        {...{describe: <Text>使用 <Code>color</Code> 属性可以为任何排版元素增加状态：</Text>}}>
                                        <Demo>
                                            <Paragraph state="success">Success State Text</Paragraph>
                                            <Paragraph state="warning">Warning State Text</Paragraph>
                                            <Paragraph state="info">Info State Text</Paragraph>
                                            <Paragraph state="danger">Danger State Text</Paragraph>
                                            <Paragraph state="primary">Primary State Text</Paragraph>
                                            <Paragraph state="focus">Focus State Text</Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section
                                        {...{
                                            describe: <Text>使用 <Code>color</Code> 或 <Code>classList</Code>
                                                属性可以为绝大部分组件增加状态：</Text>
                                        }}>
                                        <Demo>
                                            <Button color="primary" value="Primary"/>
                                            <Button color="success" value="Success"/>
                                            <Button color="warning" value="Warning"/>
                                            <Button color="danger" value="Danger"/>
                                            <Button color="metal" value="Metal"/>
                                            <Button color="brand" value="Brand"/>
                                            <Button color="focus" value="Focus"/>
                                        </Demo>
                                        <Demo>
                                            <Badge color="brand">new</Badge>
                                            <Badge color="metal">pendding</Badge>
                                            <Badge color="primary">203</Badge>
                                            <Badge color="success">hot</Badge>
                                            <Badge color="info">fixed</Badge>
                                            <Badge color="warning">in process</Badge>
                                            <Badge color="danger">completed</Badge>
                                            <Badge color="focus">focus</Badge>
                                            <Badge color="accent">accent</Badge>
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
                                </Portle>
                            </div>
                        </div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default StateColor;