/**
 *
 * @Demo: Popover
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
    Popover,
    SubHeader
} from 'omega';

export default class Popovers extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '弹出层',
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
                                    value: '弹出层',
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
                                header: '基础示例'
                            }} >
                                <Section
                                    describe={'点击下方按钮显示弹出框 ：'} title={'基础用法'}>
                                    <Demo>
                                        <Popover {...{
                                            btnColor: 'danger',
                                            value: 'Click me',
                                            title: 'Popover title'
                                        }}>
                                            And here's some amazing content. It's very engaging.
                                        </Popover>
                                    </Demo>
                                </Section>
                                <Separator dashed={true}/>
                                <Section
                                    describe={'弹出框支持从四个方向显示：上、下、左、右'} title={'方向'}>
                                    <Demo>
                                        <Popover {...{
                                            btnColor: 'brand',
                                            value: 'Popover on top',
                                            direction: 'top'
                                        }}>
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                        </Popover>
                                        <Popover {...{
                                            btnColor: 'primary',
                                            value: 'Popover on right',
                                            direction: 'right'
                                        }}>
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                        </Popover>
                                        <Popover {...{
                                            btnColor: 'warning',
                                            value: 'Popover on bottom',
                                            direction: 'bottom'
                                        }}>
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                        </Popover>
                                        <Popover {...{
                                            btnColor: 'success',
                                            value: 'Popover on left',
                                            direction: 'left'
                                        }}>
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                        </Popover>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={<Text>弹出框支持在下次点击时关闭，只需设置 <Code>trigger</Code> 属性为
                                        <Code>focus</Code> 。</Text>} title={'点击关闭'}>
                                    <Demo>
                                        <Popover {...{
                                            btnColor: 'success',
                                            value: 'Dismissible popover',
                                            direction: 'right',
                                            trigger: 'focus'
                                        }}>
                                            And here's some amazing content. It's very engaging. Right?
                                        </Popover>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '高级示例'
                            }} >
                                <Section
                                    describe={<Text>弹出框支持不转义显示HTML内容，只需设置 <Code>html</Code> 属性为
                                        <Code>true</Code> ，此时显示内容需通过 <Code>content</Code> 属性设置。</Text>}
                                    title={'HTML 内容'}>
                                    <Demo>
                                        <Popover {...{
                                            btnColor: 'primary',
                                            value: 'Click me',
                                            direction: 'right',
                                            trigger: 'hover',
                                            html: true,
                                            content: `And here's some amazing <b>HTML</b> content. It's very <code>engaging</code>.
                                            Right?`
                                        }} />
                                    </Demo>
                                </Section>
                                <Separator dashed={true}/>
                                <Section
                                    describe={<Text>设置 <Code>offset</Code> 属性为
                                        <Code>[左右偏移量，上下偏移量]</Code> 可以控制弹出框显示位置。</Text>}
                                    title={'偏移'}>
                                    <Demo>
                                        <Popover {...{
                                            btnColor: 'primary',
                                            value: 'Example 1',
                                            direction: 'top',
                                            trigger: 'hover',
                                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                                            offset: ['80px', '80px']
                                        }} />
                                        <Popover {...{
                                            btnColor: 'success',
                                            value: 'Example 2',
                                            direction: 'right',
                                            trigger: 'hover',
                                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                                            offset: ['40px', '50px']
                                        }} />
                                        <Popover {...{
                                            btnColor: 'danger',
                                            value: 'Example 3',
                                            direction: 'top',
                                            trigger: 'hover',
                                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                                            offset: ['-20px', 0]
                                        }} />
                                    </Demo>
                                </Section>
                                <Section
                                    describe={<Text>设置 <Code>skin</Code> 属性为
                                        <Code>light</Code> 或者 <Code>dark</Code> 可以切换皮肤。</Text>}
                                    title={'皮肤'}>
                                    <Demo>
                                        <Popover {...{
                                            btnColor: 'brand',
                                            value: 'Light skin',
                                            direction: 'top',
                                            trigger: 'hover',
                                            title: 'Default light skin',
                                            skin: 'light',
                                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                                        }} />
                                        <Popover {...{
                                            btnColor: 'success',
                                            value: 'Dark skin',
                                            direction: 'top',
                                            trigger: 'hover',
                                            title: 'Dark skin',
                                            skin: 'dark',
                                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
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