/**
 *
 * @Demo: Tooltips
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 22:17
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Section,
    Demo,
    Separator,
    Text,
    Code,
    Tooltip
} from 'omega';

export default class Tooltips extends Component {
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
                                header: '基础示例'
                            }} >
                                <Section
                                    describe={'点击下方按钮显示提示框 ：'} title={'基础用法'}>
                                    <Demo>
                                        <Tooltip {...{
                                            btnColor: 'danger',
                                            value: 'Click me',
                                            title: "Tooltip title"
                                        }}>

                                        </Tooltip>
                                    </Demo>
                                </Section>
                                <Separator dashed={true}/>
                                <Section
                                    describe={'提示框支持从四个方向显示：上、下、左、右'} title={'方向'}>
                                    <Demo>
                                        <Tooltip {...{
                                            btnColor: 'brand',
                                            value: 'Tooltip on top',
                                            direction: 'top'
                                        }}>
                                            Tootle title
                                        </Tooltip>
                                        <Tooltip {...{
                                            btnColor: 'primary',
                                            value: 'Tooltip on right',
                                            direction: 'right'
                                        }}>
                                            Tootle title
                                        </Tooltip>
                                        <Tooltip {...{
                                            btnColor: 'warning',
                                            value: 'Tooltip on bottom',
                                            direction: 'bottom'
                                        }}>
                                            Tootle title
                                        </Tooltip>
                                        <Tooltip {...{
                                            btnColor: 'success',
                                            value: 'Tooltip on left',
                                            direction: 'left'
                                        }}>
                                            Tootle title
                                        </Tooltip>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={<Text>提示框支持在下次点击时关闭，只需设置 <Code>trigger</Code> 属性为
                                        <Code>focus</Code> 。</Text>} title={'点击关闭'}>
                                    <Demo>
                                        <Tooltip {...{
                                            btnColor: 'success',
                                            value: 'Dismissible tooltip',
                                            direction: 'right',
                                            trigger: 'focus'
                                        }}>
                                            Dismissible tooltip
                                        </Tooltip>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '高级示例'
                            }} >
                                <Section
                                    describe={<Text>提示框支持不转义显示HTML内容，只需设置 <Code>html</Code> 属性为
                                        <Code>true</Code> ，此时显示内容需通过 <Code>content</Code> 属性设置。</Text>}
                                    title={'HTML 内容'}>
                                    <Demo>
                                        <Tooltip {...{
                                            btnColor: 'primary',
                                            value: 'Click me',
                                            direction: 'right',
                                            trigger: 'hover',
                                            html: true,
                                            title: `Tooltip with <code>html</code>.`
                                        }} />
                                    </Demo>
                                </Section>
                                <Separator dashed={true}/>
                                <Section
                                    describe={<Text>设置 <Code>offset</Code> 属性为
                                        <Code>[左右偏移量，上下偏移量]</Code> 可以控制提示框显示位置。</Text>}
                                    title={'偏移'}>
                                    <Demo>
                                        <Tooltip {...{
                                            btnColor: 'primary',
                                            value: 'Example 1',
                                            direction: 'top',
                                            trigger: 'hover',
                                            title: 'Tooltip title',
                                            offset: ['10px', '10px']
                                        }} />
                                        <Tooltip {...{
                                            btnColor: 'success',
                                            value: 'Example 2',
                                            direction: 'right',
                                            trigger: 'hover',
                                            title: 'Tooltip title',
                                            offset: ['-10px', '10px']
                                        }} />
                                        <Tooltip {...{
                                            btnColor: 'danger',
                                            value: 'Example 3',
                                            direction: 'top',
                                            trigger: 'hover',
                                            title: 'Tooltip title',
                                            offset: ['-20px', 0]
                                        }} />
                                    </Demo>
                                </Section>
                                <Section
                                    describe={<Text>设置 <Code>skin</Code> 属性为
                                        <Code>light</Code> 或者 <Code>dark</Code> 可以切换皮肤。</Text>}
                                    title={'皮肤'}>
                                    <Demo>
                                        <Tooltip {...{
                                            btnColor: 'brand',
                                            value: 'Light skin',
                                            direction: 'top',
                                            trigger: 'hover',
                                            title: 'Default light skin',
                                            skin: 'light'
                                        }} />
                                        <Tooltip {...{
                                            btnColor: 'success',
                                            value: 'Dark skin',
                                            direction: 'top',
                                            trigger: 'hover',
                                            title: 'Dark skin',
                                            skin: 'dark'
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