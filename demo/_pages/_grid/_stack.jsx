/**
 *
 * @Demo: Stacks
 * @User: Longjun.Qu
 * @Date: 2018-06-29
 * @Time: 12:51
 *
 */


import React, {Component, Fragment} from 'react';
import {Content, Div, Portlet, Section, Grid, GridItem, Text, Code, Demo, SubHeader, Stack} from 'omega';

export default class Grids extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '内容布局',
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
                                    value: '页面布局',
                                    href: 'javascript:;'
                                }
                            }, {
                                text: {
                                    value: '内容布局',
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
                                header: {
                                    show: true,
                                    title: '基础示例'
                                }
                            }} >
                                <Section
                                    describe={
                                        <Text>通过 <Code>Stack</Code> 组件可以对内容进行快速布局。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            items: [
                                                {
                                                    value: 'Item 1'
                                                }, {
                                                    value: 'Item 2'
                                                }, {
                                                    value: 'Item 3'
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={
                                        <Text>使用 <Code>justify</Code> 属性
                                            和 <Code>align</Code> 属性为每项指定水平方向和垂直方向的对齐方式。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            items: [
                                                {
                                                    value: 'Left aligment',
                                                    justify: 'left'
                                                }, {
                                                    value: 'Center aligment',
                                                    justify: 'center'
                                                }, {
                                                    value: 'Right aligment',
                                                    justify: 'right'
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo'
                                        }}/>
                                    </Demo>
                                    <Demo>
                                        <Stack {...{
                                            items: [
                                                {
                                                    value: 'Top aligment',
                                                    align: 'top'
                                                }, {
                                                    value: 'Middle aligment',
                                                    align: 'middle'
                                                }, {
                                                    value: 'Bottom aligment',
                                                    align: 'bottom'
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={
                                        <Text>可以为每一项指定具体宽度，或使用 <Code>fluid</Code> 属性平分外部容器的剩余空间。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            items: [
                                                {
                                                    value: 'Width - 120px',
                                                    align: 'middle',
                                                    justify: 'center',
                                                    _includeStyle: {
                                                        width: '120px'
                                                    }
                                                }, {
                                                    value: 'Width - Fluid',
                                                    align: 'middle',
                                                    justify: 'center',
                                                    fluid: true
                                                }, {
                                                    value: 'Width - Fluid',
                                                    align: 'middle',
                                                    justify: 'center',
                                                    fluid: true
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo'
                                        }}/>
                                    </Demo>
                                    <Demo>
                                        <Stack {...{
                                            items: [
                                                {
                                                    value: 'Width - 120px',
                                                    align: 'middle',
                                                    justify: 'center',
                                                    _includeStyle: {
                                                        width: '120px'
                                                    }
                                                }, {
                                                    value: 'Width - Fluid',
                                                    align: 'middle',
                                                    justify: 'center',
                                                    fluid: true
                                                }, {
                                                    value: 'Width - 120px',
                                                    align: 'middle',
                                                    justify: 'center',
                                                    _includeStyle: {
                                                        width: '120px'
                                                    }
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={
                                        <Text>通过设置 <Code>display</Code> 属性为 <Code>inline</Code> 可以实现行间容器。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            display: 'inline',
                                            items: [
                                                {
                                                    value: 'Small',
                                                    align: 'middle',
                                                    justify: 'center'
                                                }, {
                                                    value: 'Long Content',
                                                    align: 'middle',
                                                    justify: 'center'
                                                }, {
                                                    value: 'Long Long Content',
                                                    align: 'middle',
                                                    justify: 'center'
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={
                                        <Text>内容布局支持多级嵌套。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            items: [
                                                {
                                                    value: (
                                                        <Fragment>
                                                            <Text>item</Text>
                                                            <Stack {...{
                                                                items: [
                                                                    {
                                                                        value: 'item',
                                                                        align: 'top'
                                                                    }, {
                                                                        value: 'item',
                                                                        align: 'middle'
                                                                    }, {
                                                                        value: 'item',
                                                                        align: 'bottom'
                                                                    }
                                                                ],
                                                                _includeClass: 'm-stack--demo'
                                                            }}/>
                                                        </Fragment>
                                                    ),
                                                    align: 'middle',
                                                    justify: 'center'
                                                },
                                                {
                                                    value: (
                                                        <Fragment>
                                                            <Text>item</Text>
                                                            <Stack {...{
                                                                items: [
                                                                    {
                                                                        value: (
                                                                            <Fragment>
                                                                                <Stack {...{
                                                                                    items: [
                                                                                        {
                                                                                            value: 'item'
                                                                                        },
                                                                                        {
                                                                                            value: 'item'
                                                                                        }
                                                                                    ]
                                                                                }}/>
                                                                            </Fragment>
                                                                        ),
                                                                        justify: 'left'
                                                                    }, {
                                                                        value: 'item',
                                                                        justify: 'center'
                                                                    }, {
                                                                        value: 'item',
                                                                        justify: 'right'
                                                                    }
                                                                ],
                                                                _includeClass: 'm-stack--demo'
                                                            }}/>
                                                        </Fragment>
                                                    ),
                                                    align: 'middle',
                                                    justify: 'center'
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo'
                                        }}/>
                                    </Demo>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: {
                                    show: true,
                                    title: '响应式'
                                }
                            }} >
                                <Section describe={<Text>通过指定 <Code>mode</Code> 属性可以使内容布局响应式，支持的组件有 <Code>general</Code>。</Text>}>
                                    <Demo>

                                    </Demo>
                                </Section>

                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: {
                                    show: true,
                                    title: '垂直对齐'
                                }
                            }} >
                                <Section
                                    describe={
                                        <Text>通过 <Code>Stack</Code> 组件可以对内容进行快速布局。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            direction: 'hor',
                                            items: [
                                                {
                                                    value: (<Div _includeClass='m-stack__demo-item'>
                                                        Item 1
                                                    </Div>)
                                                }, {
                                                    value: (<Div _includeClass='m-stack__demo-item'>
                                                        Item 2
                                                    </Div>)
                                                }, {
                                                    value: (<Div _includeClass='m-stack__demo-item'>
                                                        Item 3
                                                    </Div>)
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo',
                                            _includeStyle: {
                                                height: '400px'
                                            }
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={
                                        <Text>使用 <Code>justify</Code> 属性为每项指定水平方向的对齐方式。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            direction: 'hor',
                                            items: [
                                                {
                                                    value: (<Div _includeClass='m-stack__demo-item'>
                                                        Left Item
                                                    </Div>),
                                                    justify: 'left'
                                                }, {
                                                    value: (<Div _includeClass='m-stack__demo-item'>
                                                        Center Item
                                                    </Div>),
                                                    justify: 'center'
                                                }, {
                                                    value: (<Div _includeClass='m-stack__demo-item'>
                                                        Right Item
                                                    </Div>),
                                                    justify: 'right'
                                                }
                                            ],
                                            _includeClass: 'm-stack--demo',
                                            _includeStyle: {
                                                height: '400px'
                                            }
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={
                                        <Text>可以为每一项指定具体高度，或使用 <Code>fluid</Code> 属性平分外部容器的剩余空间。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            direction: 'hor',
                                            items: [
                                                {
                                                    value: (
                                                        <Div _includeClass='m-stack__demo-item'>
                                                            Height - 120px
                                                        </Div>
                                                    ),
                                                    align: 'middle',
                                                    justify: 'center',
                                                    _includeStyle: {
                                                        height: '120px'
                                                    }
                                                }, {
                                                    value: (
                                                        <Div _includeClass='m-stack__demo-item'>
                                                            Height - Fluid
                                                        </Div>
                                                    ),
                                                    align: 'middle',
                                                    justify: 'center',
                                                    fluid: true
                                                }, {
                                                    value: (
                                                        <Div _includeClass='m-stack__demo-item'>
                                                            Height - 120px
                                                        </Div>
                                                    ),
                                                    align: 'middle',
                                                    justify: 'center',
                                                    _includeStyle: {
                                                        height: '120px'
                                                    }
                                                }
                                            ],
                                            _includeStyle: {
                                                height: '400px'
                                            },
                                            _includeClass: 'm-stack--demo'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={
                                        <Text>水平对齐和垂直对齐配合使用。</Text>}>
                                    <Demo>
                                        <Stack {...{
                                            direction: 'hor',
                                            items: [
                                                {
                                                    value: (
                                                        <Stack {...{
                                                            items: [
                                                                {
                                                                    value: 'Item',
                                                                    justify: 'center',
                                                                    align: 'top'
                                                                }, {
                                                                    value: 'Item',
                                                                    justify: 'center',
                                                                    align: 'middle'
                                                                }, {
                                                                    value: 'Item',
                                                                    justify: 'center',
                                                                    align: 'bottom'
                                                                }
                                                            ],
                                                            _includeClass: 'm-stack--demo',
                                                            _includeStyle: {
                                                                height: '100%'
                                                            }
                                                        }}/>
                                                    ),
                                                    align: 'middle',
                                                    justify: 'center',
                                                    _includeStyle: {
                                                        height: '120px'
                                                    }
                                                }, {
                                                    value: (
                                                        <Stack {...{
                                                            items: [
                                                                {
                                                                    value: 'Item',
                                                                    justify: 'center',
                                                                    align: 'top'
                                                                }, {
                                                                    value: 'Item',
                                                                    justify: 'center',
                                                                    align: 'middle'
                                                                }, {
                                                                    value: 'Item',
                                                                    justify: 'center',
                                                                    align: 'bottom'
                                                                }
                                                            ],
                                                            _includeClass: 'm-stack--demo',
                                                            _includeStyle: {
                                                                height: '100%'
                                                            }
                                                        }}/>
                                                    ),
                                                    align: 'middle',
                                                    justify: 'center',
                                                    fluid: true
                                                }
                                            ],
                                            _includeStyle: {
                                                height: '400px'
                                            },
                                            _includeClass: 'm-stack--demo'
                                        }}/>
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