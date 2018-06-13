/**
 *
 * @Demo: Tables
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 15:55
 *
 */


import React, {Component, Fragment} from 'react';

import Text from 'components/framework/_text';
import Code from 'components/framework/_code'
import SubHeader from '../_subheader';
import Wrapper from 'components/framework/_wrapper';
import Content from 'components/framework/_content';
import Section from 'components/framework/_section';

import Portle from 'components/general/_portle';

import Demo from "../_demo";

import 'sass/_demo.scss';
import Table from "../../../components/base/_table";


class Tables extends Component {
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
                    <SubHeader  title="表格"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '基础表格'
                                    }
                                }} >
                                    <Section
                                        describe={<Text>使用 <Code>Table</Code> 组件可以快速构建一个简易表格：</Text>}>
                                        <Table {
                                                   ...{
                                                       head: ['#', 'First Name', 'Last Name', 'Username'],
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ]
                                                   }
                                               }/>
                                    </Section>
                                    <Section
                                        describe={<Text>也可以使用 <Code>inverse</Code> 属性对样式进行颠倒——在深色背景下显示亮色的文字。</Text>}>
                                        <Table {
                                                   ...{
                                                       head: ['#', 'First Name', 'Last Name', 'Username'],
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       inverse: true
                                                   }
                                               }/>
                                    </Section>

                                </Portle>

                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '表头选项'
                                    }
                                }} >
                                    <Section
                                        describe={<Text>类似于基础表格，可以通过设置部分属性，显示不同的 <Code>thead</Code> 样式。</Text>}>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username']
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ]
                                                   }
                                               }/>
                                    </Section>
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           inverse: false
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       inverse: true
                                                   }
                                               }/>
                                    </Section>
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           hideBorder: true
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       inverse: true
                                                   }
                                               }/>
                                    </Section>

                                </Portle>

                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '细表格'
                                    }
                                }} >
                                    <Section
                                        describe={<Text>设置 <Code>size</Code> 属性为 <Code>sm</Code> 让表格以基础表格一半行高显示，使表格显示更紧凑。</Text>}>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           bgColor: 'brand'
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       size: 'sm'
                                                   }
                                               }/>
                                    </Section>

                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '带有条纹的行'
                                    }
                                }} >
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username']
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       stripe: true
                                                   }
                                               }/>
                                    </Section>

                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '带有边框的表格'
                                    }
                                }} >
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username']
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       bordered: true
                                                   }
                                               }/>
                                    </Section>

                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '带有悬停的表格'
                                    }
                                }} >
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username']
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       hover: true
                                                   }
                                               }/>
                                    </Section>

                                </Portle>
                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '表头状态'
                                    }
                                }} >
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           bgColor: 'success'
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ]
                                                   }
                                               }/>
                                    </Section>
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           bgColor: 'brand'
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ]
                                                   }
                                               }/>
                                    </Section>
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           separateColor: 'primary'
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ]
                                                   }
                                               }/>
                                    </Section>
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           separateColor: 'danger'
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ]
                                                   }
                                               }/>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '表格边框状态'
                                    }
                                }} >
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username']
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       borderColor: 'success'
                                                   }
                                               }/>
                                    </Section>
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           bgColor: 'brand'
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       borderColor: 'brand'
                                                   }
                                               }/>
                                    </Section>
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           bgColor: 'primary'
                                                       },
                                                       data: [
                                                           [1, 'Jhon', 'Stone', '@jhon'],
                                                           [2, 'Lisa', 'Nilson', '@lisa'],
                                                           [3, 'Larry', 'the Bird', '@twitter']
                                                       ],
                                                       borderColor: 'danger'
                                                   }
                                               }/>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '表格行状态'
                                    }
                                }} >
                                    <Section>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username']
                                                       },
                                                       data: [
                                                           {
                                                               value: [1, 'Jhon', 'Stone', '@jhon']
                                                           },
                                                           {
                                                               value: [2, 'Lisa', 'Nilson', '@lisa'],
                                                               bgColor: 'primary'
                                                           },
                                                           {
                                                               value: [3, 'Larry', 'the Bird', '@twitter'],
                                                               bgColor: 'success'
                                                           },
                                                           {
                                                               value: [4, 'Jhon', 'Stone', '@jhon'],
                                                               bgColor: 'brand'
                                                           },
                                                           {
                                                               value: [5, 'Lisa', 'Nilson', '@lisa'],
                                                               bgColor: 'warning'
                                                           },
                                                           {
                                                               value: [6, 'Larry', 'the Bird', '@twitter'],
                                                               bgColor: 'danger'
                                                           }
                                                       ]
                                                   }
                                               }/>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '响应式表格'
                                    }
                                }} >
                                    <Section describe={<Text>通过设置 <Code>responsive</Code> 可以让表格实现响应式，在低分辨率设备（低于768px）上可以出现滚动条。</Text>}>
                                        <Table {
                                                   ...{
                                                       responsive: true,
                                                       head: {
                                                           value: ['#', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading']
                                                       },
                                                       data: [
                                                           {
                                                               value: [1, 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']
                                                           },
                                                           {
                                                               value: [2, 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']
                                                           },
                                                           {
                                                               value: [3, 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']
                                                           },
                                                           {
                                                               value: [4, 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']
                                                           }
                                                       ]
                                                   }
                                               }/>
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

export default Tables;