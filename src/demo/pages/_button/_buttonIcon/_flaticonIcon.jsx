/**
 *
 * @Demo: FlaticonIcon
 * @User: Longjun.Qu
 * @Date: 2018-06-17
 * @Time: 20:56
 *
 */


import React, {Component, Fragment} from 'react';

import Text from 'components/_element/Text';
import Div from 'components/_element/Div';
import Code from 'components/_element/Code';
import Separator from "components/_element/Separator";
import SubHeader from 'components/_framework/SubHeader';
import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';
import Demo from "components/_framework/Demo";
import Button from "components/_button/Button";

import Portlet from 'components/_portlet/Portlet';


import 'sass/_demo.scss';

class LineawesomeIcon extends Component {
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
                    <SubHeader title="Flaticon 图标"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '基础示例'
                                }} >
                                    <Section describe="基础图标按钮">
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>带有 <Code>isWide</Code> 样式的图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>若 <Code>value</Code> 属性为空，则显示仅图标按钮样式</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                isWide: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '线框样式按钮'
                                }} >
                                    <Section describe="基础线框图标按钮">
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>带有 <Code>thicken</Code> 样式的线框图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>若 <Code>value</Code> 属性为空，则显示仅图标按钮样式</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '椭圆样式'
                                }} >
                                    <Section describe="基础图标按钮">
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>椭圆线框图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                btnStyle: ['pill'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>若 <Code>value</Code> 属性为空，则显示仅图标按钮样式</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Separator dashed={true}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '阴影样式'
                                }} >
                                    <Section describe="基础图标按钮">
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>带阴影的椭圆线框图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>若 <Code>value</Code> 属性为空，则显示仅图标按钮样式</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Separator dashed={true}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                btnStyle: ['pill', 'air'],
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                            </Div>
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: 'Omega 按钮'
                                }} >
                                    <Section describe="基础图标按钮">
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>椭圆样式的图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>带 <Code>thicken</Code> 椭圆样式的图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                isCustom: true,
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>若 <Code>value</Code> 属性为空，则显示仅图标按钮样式</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Separator dashed={true}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                btnStyle: 'pill',
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Separator dashed={true}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                btnStyle: ['pill', 'air'],
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                btnStyle: ['pill', 'air'],
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                btnStyle: ['pill', 'air'],
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                btnStyle: ['pill', 'air'],
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                btnStyle: ['pill', 'air'],
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                btnStyle: ['pill', 'air'],
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                btnStyle: ['pill', 'air'],
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                btnStyle: ['pill', 'air'],
                                                isCustom: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '小尺寸按钮'
                                }} >
                                    <Section describe="基础图标按钮">
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>椭圆样式的图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>带 <Code>thicken</Code> 椭圆样式的图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                size: 'sm',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>若 <Code>value</Code> 属性为空，则显示仅图标按钮样式</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Separator dashed={true}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                btnStyle: 'pill',
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Separator dashed={true}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                btnStyle: ['pill', 'air'],
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                btnStyle: ['pill', 'air'],
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                btnStyle: ['pill', 'air'],
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                btnStyle: ['pill', 'air'],
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                btnStyle: ['pill', 'air'],
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                btnStyle: ['pill', 'air'],
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                btnStyle: ['pill', 'air'],
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                btnStyle: ['pill', 'air'],
                                                size: 'sm',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '大尺寸按钮'
                                }} >
                                    <Section describe="基础图标按钮">
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>椭圆样式的图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>带 <Code>thicken</Code> 椭圆样式的图标按钮</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                size: 'lg',
                                                btnStyle: 'pill',
                                                thicken: true,
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section describe={<Text>若 <Code>value</Code> 属性为空，则显示仅图标按钮样式</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'danger',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Separator dashed={true}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                btnStyle: 'pill',
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Separator dashed={true}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                btnStyle: ['pill', 'air'],
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-diagram'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                btnStyle: ['pill', 'air'],
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-3'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                btnStyle: ['pill', 'air'],
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-pie-chart'
                                                },
                                            }}/>

                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                btnStyle: ['pill', 'air'],
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-multimedia'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                btnStyle: ['pill', 'air'],
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-warning-2'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                btnStyle: ['pill', 'air'],
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-symbol'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                btnStyle: ['pill', 'air'],
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                btnStyle: ['pill', 'air'],
                                                size: 'lg',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-comment'
                                                },
                                            }}/>
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

export default LineawesomeIcon;