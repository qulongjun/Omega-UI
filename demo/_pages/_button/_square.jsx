/**
 * 
 * @Demo: SquareButton
 * @User: Longjun.Qu
 * @Date: 2018-06-26
 * @Time: 09:54
 * 
 */
 

import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Section,
    Demo,
    Button,
    Text,
    Code,
    Separator,
    Space,
    Paragraph
} from 'omega';export default class SquareButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <Fragment>
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Secondary',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Success',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Info',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Warning',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'danger',
                                            value: 'Danger',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'link',
                                            value: 'Link',
                                            btnStyle: 'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            gradient: {
                                                from: 'success',
                                                to: 'accent'
                                            },
                                            value: 'Success',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            gradient: {
                                                from: 'danger',
                                                to: 'warning'
                                            },
                                            value: 'Danger',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            gradient: {
                                                from: 'warning',
                                                to: 'danger'
                                            },
                                            value: 'Warning',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            gradient: {
                                                from: 'info',
                                                to: 'accent'
                                            },
                                            value: 'Info',
                                            btnStyle:'square'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={'Omega 状态渐变按钮'}>
                                    <Demo>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Brand',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'metal',
                                            value: 'Metal',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'accent',
                                            value: 'Accent',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'focus',
                                            value: 'Focus',
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Button',
                                            type: 'submit',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            label: 'input',
                                            btnColor: 'warning',
                                            value: 'Input',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            label: 'input',
                                            btnColor: 'info',
                                            value: 'Submit',
                                            type: 'submit',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            label: 'input',
                                            btnColor: 'danger',
                                            value: 'Reset',
                                            type: 'reset',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            label: 'a',
                                            btnColor: 'metal',
                                            value: 'Metal',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Brand',
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Secondary',
                                            isWide: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Success',
                                            isWide: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Info',
                                            isWide: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Warning',
                                            isWide: true,
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Success',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Info',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-warning',
                                            value: 'Warning',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-danger',
                                            value: 'Danger',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-brand',
                                            value: 'Brand',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-metal',
                                            value: 'Metal',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-accent',
                                            value: 'Accent',
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Success',
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Info',
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-warning',
                                            value: 'Warning',
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-danger',
                                            value: 'Danger',
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-brand',
                                            value: 'Brand',
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-metal',
                                            value: 'Metal',
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-accent',
                                            value: 'Accent',
                                            thicken: true,
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Brand',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Success',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Info',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Warning',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'danger',
                                            value: 'Danger',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'accent',
                                            value: 'Accent',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Secondary',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Separator {...{
                                            dashed: true
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-primary',
                                            value: 'Primary',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-brand',
                                            value: 'Brand',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Success',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Info',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-warning',
                                            value: 'Warning',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-danger',
                                            value: 'Danger',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-metal',
                                            value: 'Metal',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-accent',
                                            value: 'Accent',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Separator {...{
                                            dashed: true
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-primary',
                                            value: 'Primary',
                                            isCustom: true,
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-brand',
                                            value: 'Brand',
                                            isCustom: true,
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Success',
                                            isCustom: true,
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Info',
                                            isCustom: true,
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-warning',
                                            value: 'Warning',
                                            isCustom: true,
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-danger',
                                            value: 'Danger',
                                            isCustom: true,
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-metal',
                                            value: 'Metal',
                                            isCustom: true,
                                            thicken: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-accent',
                                            value: 'Accent',
                                            isCustom: true,
                                            thicken: true,
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Brand',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'brand',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Success',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'success',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Info',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'info',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Warning',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'warning',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Danger',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'danger',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Metal',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'metal',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Accent',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'accent',
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Brand',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'brand',
                                            fontBold: 'bold',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Success',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'success',
                                            fontBold: 'bold',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Info',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'info',
                                            fontBold: 'bold',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Warning',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'warning',
                                            fontBold: 'bold',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Danger',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'danger',
                                            fontBold: 'bold',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Metal',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'metal',
                                            fontBold: 'bold',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Accent',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'accent',
                                            fontBold: 'bold',
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Brand',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'brand',
                                            fontBold: 'bolder',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Success',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'success',
                                            fontBold: 'bolder',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Info',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'info',
                                            fontBold: 'bolder',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Warning',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'warning',
                                            fontBold: 'bolder',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Danger',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'danger',
                                            fontBold: 'bolder',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Metal',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'metal',
                                            fontBold: 'bolder',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Accent',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'accent',
                                            fontBold: 'bolder',
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Brand',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'brand',
                                            fontBold: 'boldest',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Success',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'success',
                                            fontBold: 'boldest',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Info',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'info',
                                            fontBold: 'boldest',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Warning',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'warning',
                                            fontBold: 'boldest',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Danger',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'danger',
                                            fontBold: 'boldest',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Metal',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'metal',
                                            fontBold: 'boldest',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Accent',
                                            isCustom: true,
                                            thicken: true,
                                            _fontColor: 'accent',
                                            fontBold: 'boldest',
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Large Button',
                                            size: 'lg',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Large Button',
                                            size: 'lg',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Large Button',
                                            size: 'lg',
                                            btnStyle:'square'
                                        }}/>
                                    </Demo>
                                    <Demo>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Default Button',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Default Button',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Default Button',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Default Button',
                                            btnStyle:'square'
                                        }}/>
                                    </Demo>
                                    <Demo>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Small Button',
                                            size: 'sm',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Small Button',
                                            size: 'sm',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Small Button',
                                            size: 'sm',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Small Button',
                                            size: 'sm',
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-accent',
                                            value: 'Large Button',
                                            size: 'lg',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Large Button',
                                            size: 'lg',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                    </Demo>
                                    <Demo>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Large Button',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-accent',
                                            value: 'Large Button',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Large Button',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                    </Demo>
                                    <Demo>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Large Button',
                                            size: 'sm',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-accent',
                                            value: 'Large Button',
                                            size: 'sm',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Large Button',
                                            size: 'sm',
                                            isCustom: true,
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-brand',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-warning',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-danger',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Space size={10}/>
                                        <Button {...{
                                            btnColor: 'outline-primary',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-brand',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-warning',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-danger',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Space size={10}/>
                                        <Button {...{
                                            btnColor: 'outline-primary',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-brand',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-success',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-info',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-warning',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'outline-danger',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                    </Demo>
                                    <Demo>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'danger',
                                            value: 'Default',
                                            btnStyle:'square'
                                        }}/>
                                        <Space size={10}/>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'danger',
                                            value: 'Active',
                                            btnState: 'active',
                                            btnStyle:'square'
                                        }}/>
                                        <Space size={10}/>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'danger',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            btnStyle:'square'
                                        }}/>
                                    </Demo>
                                    <Demo>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Default',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Default',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Default',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Default',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Default',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'danger',
                                            value: 'Default',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Space size={10}/>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Active',
                                            btnState: 'active',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Active',
                                            btnState: 'active',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Active',
                                            btnState: 'active',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Active',
                                            btnState: 'active',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Active',
                                            btnState: 'active',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'danger',
                                            value: 'Active',
                                            btnState: 'active',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Space size={10}/>
                                        <Button {...{
                                            btnColor: 'primary',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'brand',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'info',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            isCustom: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'danger',
                                            value: 'Disabled',
                                            btnState: 'disabled',
                                            isCustom: true,
                                            btnStyle:'square'
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
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'secondary',
                                            value: 'Block level button',
                                            isBlock: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'success',
                                            value: 'Block level button',
                                            isBlock: true,
                                            btnStyle:'square'
                                        }}/>
                                        <Button {...{
                                            btnColor: 'warning',
                                            value: 'Block level button',
                                            isBlock: true,
                                            btnStyle:'square'
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
            </Fragment>
        );
    }
}