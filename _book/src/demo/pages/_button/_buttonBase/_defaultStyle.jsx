/**
 *
 * @Demo: DefaultStyle
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

import Portle from 'components/_portlet/Portlet';


import 'sass/_demo.scss';

class DefaultStyle extends Component {
    render() {
        const _props = this.props;
        const {} = _props;
        return (
            <Fragment>
                <Wrapper>
                    <SubHeader title="默认样式"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-6">
                                <Portle {...{
                                    header: '基础按钮'
                                }} >
                                    <Section
                                        describe={'Bootstrap 状态按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'link',
                                                value: 'Link'
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
                                                value: 'Primary'
                                            }}/>
                                            <Button {...{
                                                gradient: {
                                                    from: 'success',
                                                    to: 'accent'
                                                },
                                                value: 'Success'
                                            }}/>
                                            <Button {...{
                                                gradient: {
                                                    from: 'danger',
                                                    to: 'warning'
                                                },
                                                value: 'Danger'
                                            }}/>
                                            <Button {...{
                                                gradient: {
                                                    from: 'warning',
                                                    to: 'danger'
                                                },
                                                value: 'Warning'
                                            }}/>
                                            <Button {...{
                                                gradient: {
                                                    from: 'info',
                                                    to: 'accent'
                                                },
                                                value: 'Info'
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={'Omega 状态渐变按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'metal',
                                                value: 'Metal'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'focus',
                                                value: 'Focus'
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
                                                value: 'Link'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Button',
                                                type: 'submit'
                                            }}/>
                                            <Button {...{
                                                label: 'input',
                                                btnColor: 'warning',
                                                value: 'Input'
                                            }}/>
                                            <Button {...{
                                                label: 'input',
                                                btnColor: 'info',
                                                value: 'Submit',
                                                type: 'submit'
                                            }}/>
                                            <Button {...{
                                                label: 'input',
                                                btnColor: 'danger',
                                                value: 'Reset',
                                                type: 'reset'
                                            }}/>
                                            <Button {...{
                                                label: 'a',
                                                btnColor: 'metal',
                                                value: 'Metal'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand'
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={'较宽样式的按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                isWide: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                isWide: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                isWide: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                isWide: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                isWide: true
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: '线框按钮'
                                }} >
                                    <Section
                                        describe={'Bootstrap 线框按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent'
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section
                                        describe={'Bootstrap 两倍线框按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                thicken: true
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: 'Omega 按钮'
                                }} >
                                    <Section
                                        describe={'Omega 推荐基础按钮'}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Primary',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Brand',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Success',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Info',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Warning',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Danger',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'accent',
                                                value: 'Accent',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Secondary',
                                                isCustom: true
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                isCustom: true
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Primary',
                                                isCustom: true,
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-metal',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true
                                            }}/>
                                            <Separator {...{
                                                dashed: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Primary',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'primary'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'brand'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'success'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'info'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'warning'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'danger'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'metal'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'accent'
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
                                                fontBold: 'bold'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'brand',
                                                fontBold: 'bold'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'success',
                                                fontBold: 'bold'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'info',
                                                fontBold: 'bold'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'warning',
                                                fontBold: 'bold'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'danger',
                                                fontBold: 'bold'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'metal',
                                                fontBold: 'bold'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'accent',
                                                fontBold: 'bold'
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
                                                fontBold: 'bolder'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'brand',
                                                fontBold: 'bolder'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'success',
                                                fontBold: 'bolder'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'info',
                                                fontBold: 'bolder'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'warning',
                                                fontBold: 'bolder'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'danger',
                                                fontBold: 'bolder'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'metal',
                                                fontBold: 'bolder'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'accent',
                                                fontBold: 'bolder'
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
                                                fontBold: 'boldest'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Brand',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'brand',
                                                fontBold: 'boldest'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Success',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'success',
                                                fontBold: 'boldest'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Info',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'info',
                                                fontBold: 'boldest'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Warning',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'warning',
                                                fontBold: 'boldest'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Danger',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'danger',
                                                fontBold: 'boldest'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Metal',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'metal',
                                                fontBold: 'boldest'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Accent',
                                                isCustom: true,
                                                thicken: true,
                                                _fontColor: 'accent',
                                                fontBold: 'boldest'
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portle>
                            </Div>
                            <Div _includeClass="col-xl-6">
                                <Portle {...{
                                    header: '按钮尺寸'
                                }} >
                                    <Section
                                        describe={<Text>通过设置 <Code>size</Code> 属性，可以指定按钮显示的尺寸。</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Large Button',
                                                size: 'lg'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Large Button',
                                                size: 'lg'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Large Button',
                                                size: 'lg'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Large Button',
                                                size: 'lg'
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Default Button'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Default Button'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Default Button'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Default Button'
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Small Button',
                                                size: 'sm'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Small Button',
                                                size: 'sm'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Small Button',
                                                size: 'sm'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Small Button',
                                                size: 'sm'
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
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Large Button',
                                                size: 'lg',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Large Button',
                                                size: 'lg',
                                                isCustom: true
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Large Button',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Large Button',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Large Button',
                                                isCustom: true
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Large Button',
                                                size: 'sm',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-accent',
                                                value: 'Large Button',
                                                size: 'sm',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Large Button',
                                                size: 'sm',
                                                isCustom: true
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: '按钮状态'
                                }} >
                                    <Section
                                        describe={<Text>可以通过设置 <Code>btnState</Code> 属性值为 <Code>active</Code> 或 <Code>disabled</Code>
                                            使按钮显示不同状态。</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Default'
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'outline-primary',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-brand',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-success',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-info',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-warning',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'outline-danger',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Default'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Default'
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Active',
                                                btnState: 'active'
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Disabled',
                                                btnState: 'disabled'
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Default',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Default',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Default',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Default',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Default',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Default',
                                                isCustom: true
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Active',
                                                btnState: 'active',
                                                isCustom: true
                                            }}/>
                                            <Space size={10}/>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'brand',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'info',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'danger',
                                                value: 'Disabled',
                                                btnState: 'disabled',
                                                isCustom: true
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: '块状按钮'
                                }} >
                                    <Section
                                        describe={<Text>通过设置 <Code>isBlock</Code> 属性，可以让按钮以块状显示。块状按钮会撑满整个父 DOM
                                            元素或父组件的宽度。</Text>}>
                                        <Demo>
                                            <Button {...{
                                                btnColor: 'primary',
                                                value: 'Block level button',
                                                isBlock: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'secondary',
                                                value: 'Block level button',
                                                isBlock: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'success',
                                                value: 'Block level button',
                                                isBlock: true
                                            }}/>
                                            <Button {...{
                                                btnColor: 'warning',
                                                value: 'Block level button',
                                                isBlock: true
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: 'Checkbox组件与Button的组合'
                                }} >
                                    <Section>
                                        <Demo>
                                            <Paragraph>Comming soon... </Paragraph>
                                        </Demo>
                                    </Section>
                                </Portle>
                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default DefaultStyle;