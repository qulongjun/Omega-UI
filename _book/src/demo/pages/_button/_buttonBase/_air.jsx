/**
 *
 * @Demo: Air
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 23:52
 *
 */


import React, {Component, Fragment} from 'react';


import Button from "components/_button/Button";
import Separator from "components/_element/Separator";
import Space from "components/_element/Space";
import Div from 'components/_element/Div';
import Text from 'components/_element/Text';
import Code from 'components/_element/Code'
import Paragraph from 'components/_element/Paragraph';

import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';
import SubHeader from 'components/_framework/SubHeader';
import Demo from 'components/_framework/Demo';

import Portlet from 'components/_portlet/Portlet';


import 'sass/_demo.scss';

class Air extends Component {
    render() {
        const _props = this.props;
        const {} = _props;
        return (
            <Fragment>
                <Wrapper>
                    <SubHeader title="阴影样式"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '基础按钮'
                                }} >
                                    <Section
                                        describe={'Bootstrap 状态按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'link',
                                                value: 'Link',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={'Bootstrap 状态渐变按钮'}>
                                        <Demo>
                                            <Button {...{
                                                gradient: {
                                                    from: 'primary',
                                                    to: 'info'
                                                },
                                                value: 'Primary',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                gradient: {
                                                    from: 'success',
                                                    to: 'accent'
                                                },
                                                value: 'Success',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                gradient: {
                                                    from: 'danger',
                                                    to: 'warning'
                                                },
                                                value: 'Danger',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                gradient: {
                                                    from: 'warning',
                                                    to: 'danger'
                                                },
                                                value: 'Warning',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                gradient: {
                                                    from: 'info',
                                                    to: 'accent'
                                                },
                                                value: 'Info',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={'Omega 状态渐变按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'focus',
                                                value: 'Focus',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={<Text>可以通过设置 <Code>label</Code> 参数告知组件按照
                                            <Code>&lt;button&gt;</Code> , <Code>&lt;a&gt;</Code> 还是 <Code>&lt;
                                                input&gt;</Code> 方式生成。</Text>}>
                                        <Demo>
                                            <Button {...{
                                                label: 'a',
                                                btnColor: 'primary',
                                                value: 'Link',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Button',
                                                type: 'submit',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                label: 'input',
                                                btnColor: 'warning',
                                                value: 'Input',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                label: 'input',
                                                btnColor: 'info',
                                                value: 'Submit',
                                                type: 'submit',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                label: 'input',
                                                btnColor: 'danger',
                                                value: 'Reset',
                                                type: 'reset',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                label: 'a',
                                                btnColor: 'metal',
                                                value: 'Metal',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={'较宽样式的按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                isWide: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                isWide: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                isWide: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                isWide: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                isWide: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '线框按钮'
                                }} >
                                    <Section
                                        describe={'Bootstrap 线框按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={'Bootstrap 两倍线框按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: 'Omega 按钮'
                                }} >
                                    <Section
                                        describe={'Omega 推荐基础按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                isCustom: true,
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Primary',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'primary',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'brand',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'success',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'info',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'warning',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'danger',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'metal',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'accent',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Primary',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'primary',
                                                fontBold: 'bold',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'brand',
                                                fontBold: 'bold',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'success',
                                                fontBold: 'bold',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'info',
                                                fontBold: 'bold',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'warning',
                                                fontBold: 'bold',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'danger',
                                                fontBold: 'bold',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'metal',
                                                fontBold: 'bold',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'accent',
                                                fontBold: 'bold',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Primary',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'primary',
                                                fontBold: 'bolder',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'brand',
                                                fontBold: 'bolder',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'success',
                                                fontBold: 'bolder',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'info',
                                                fontBold: 'bolder',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'warning',
                                                fontBold: 'bolder',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'danger',
                                                fontBold: 'bolder',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'metal',
                                                fontBold: 'bolder',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'accent',
                                                fontBold: 'bolder',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Primary',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'primary',
                                                fontBold: 'boldest',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'brand',
                                                fontBold: 'boldest',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'success',
                                                fontBold: 'boldest',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'info',
                                                fontBold: 'boldest',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'warning',
                                                fontBold: 'boldest',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'danger',
                                                fontBold: 'boldest',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'metal',
                                                fontBold: 'boldest',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'accent',
                                                fontBold: 'boldest',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                            </Div>
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '按钮尺寸'
                                }} >
                                    <Section
                                        describe={<Text>通过设置 <Code>size</Code> 属性，可以指定按钮显示的尺寸。</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Large Button',
                                                size: 'lg',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Large Button',
                                                size: 'lg',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Large Button',
                                                size: 'lg',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Large Button',
                                                size: 'lg',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Default Button',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Default Button',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Default Button',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Default Button',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Small Button',
                                                size: 'sm',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Small Button',
                                                size: 'sm',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Small Button',
                                                size: 'sm',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Small Button',
                                                size: 'sm',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={'Omega 推荐按钮尺寸。'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Large Button',
                                                size: 'lg',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Large Button',
                                                size: 'lg',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Large Button',
                                                size: 'lg',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Large Button',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Large Button',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Large Button',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Large Button',
                                                size: 'sm',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Large Button',
                                                size: 'sm',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Large Button',
                                                size: 'sm',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '按钮状态'
                                }} >
                                    <Section
                                        describe={<Text>可以通过设置 <Code>btnState</Code> 属性值为 <Code>active</Code> 或 <Code>disabled</Code>
                                            使按钮显示不同状态。</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Default',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Active',
                                                btnState: 'active',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Default',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Default',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Default',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Default',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Default',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Default',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '块状按钮'
                                }} >
                                    <Section
                                        describe={<Text>通过设置 <Code>isBlock</Code> 属性，可以让按钮以块状显示。块状按钮会撑满整个父 DOM
                                            元素或父组件的宽度。</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Block level button',
                                                isBlock: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Block level button',
                                                isBlock: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Block level button',
                                                isBlock: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Block level button',
                                                isBlock: true,
                                                btnStyle: ['pill', 'air']
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: 'Checkbox组件与Button的组合'
                                }} >
                                    <Section>
                                        <Demo>
                                            <Paragraph>Comming soon... </Paragraph>
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

export default Air;