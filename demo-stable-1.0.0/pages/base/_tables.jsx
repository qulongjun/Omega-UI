/**
 *
 * @Demo: Tables
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 19:40
 *
 */


import React, {Component, Fragment} from 'react';
import {Content, Div, Portlet, Section, Table, Text, Code, SubHeader} from 'omega';
export default class Tables extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '表格',
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
                                    value: '表格',
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
                                header: '基础表格'
                            }} >
                                <Section
                                    describe={<Text>使用 <Code>Table</Code> 组件可以快速构建一个简易表格：</Text>}>
                                    <Table {
                                               ...{
                                                   head: ['First Name', 'Last Name', 'Username'],
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                                <Section
                                    describe={<Text>也可以使用 <Code>inverse</Code> 属性对样式进行颠倒——在深色背景下显示亮色的文字。</Text>}>
                                    <Table {
                                               ...{
                                                   head: ['First Name', 'Last Name', 'Username'],
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   inverse: true,
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>

                            </Portlet>

                            <Portlet {...{
                                header: '表头选项'
                            }} >
                                <Section
                                    describe={<Text>类似于基础表格，可以通过设置部分属性，显示不同的 <Code>thead</Code> 样式。</Text>}>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username'],
                                                       inverse: true
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username'],
                                                       inverse: false
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   inverse: true,
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username'],
                                                       hideBorder: true
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   inverse: true,
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>

                            </Portlet>

                            <Portlet {...{
                                header: '细表格'
                            }} >
                                <Section
                                    describe={<Text>设置 <Code>size</Code> 属性为 <Code>sm</Code>
                                        让表格以基础表格一半行高显示，使表格显示更紧凑。</Text>}>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username'],
                                                       bgColor: 'brand'
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   size: 'sm',
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>

                            </Portlet>
                            <Portlet {...{
                                header: '带有条纹的行'
                            }} >
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username']
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   stripe: true,
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>

                            </Portlet>
                            <Portlet {...{
                                header: '带有边框的表格'
                            }} >
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username']
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   bordered: true,
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>

                            </Portlet>
                            <Portlet {...{
                                header: '带有悬停的表格'
                            }
                                     } >
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username']
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   hover: true,
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>

                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '表头状态'
                            }} >
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username'],
                                                       bgColor: 'success'
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username'],
                                                       bgColor: 'brand'
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username']
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   separateColor: 'primary',
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username']
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   separateColor: 'danger',
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: '表格边框状态'
                            }} >
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username']
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   borderColor: 'success',
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username'],
                                                       bgColor: 'brand'
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   borderColor: 'brand',
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username'],
                                                       bgColor: 'primary'
                                                   },
                                                   data: [
                                                       ['Jhon', 'Stone', '@jhon'],
                                                       ['Lisa', 'Nilson', '@lisa'],
                                                       ['Larry', 'the Bird', '@twitter']
                                                   ],
                                                   borderColor: 'danger',
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: '表格行状态'
                            }} >
                                <Section>
                                    <Table {
                                               ...{
                                                   head: {
                                                       names: ['First Name', 'Last Name', 'Username']
                                                   },
                                                   data: [
                                                       {
                                                           values: ['Jhon', 'Stone', '@jhon']
                                                       },
                                                       {
                                                           values: ['Lisa', 'Nilson', '@lisa'],
                                                           bgColor: 'primary'
                                                       },
                                                       {
                                                           values: ['Larry', 'the Bird', '@twitter'],
                                                           bgColor: 'success'
                                                       },
                                                       {
                                                           values: ['Jhon', 'Stone', '@jhon'],
                                                           bgColor: 'brand'
                                                       },
                                                       {
                                                           values: ['Lisa', 'Nilson', '@lisa'],
                                                           bgColor: 'warning'
                                                       },
                                                       {
                                                           values: ['Larry', 'the Bird', '@twitter'],
                                                           bgColor: 'danger'
                                                       }
                                                   ],
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: '响应式表格'
                            }} >
                                <Section describe={<Text>通过设置 <Code>responsive</Code>
                                    可以让表格实现响应式，在低分辨率设备（低于768px）上可以出现滚动条。</Text>}>
                                    <Table {
                                               ...{
                                                   responsive: true,
                                                   head: {
                                                       names: ['Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading']
                                                   },
                                                   data: [
                                                       {
                                                           values: ['Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']
                                                       },
                                                       {
                                                           values: ['Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']
                                                       },
                                                       {
                                                           values: ['Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']
                                                       },
                                                       {
                                                           values: ['Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']
                                                       }
                                                   ],
                                                   showIndex: true
                                               }
                                           }/>
                                </Section>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}