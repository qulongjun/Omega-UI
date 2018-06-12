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
                    <SubHeader title="Tables"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Basic Tables'
                                    }
                                }} >
                                    <Section
                                        describe='Using the most basic table markup, here’s how tables look in Metronic:'>
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
                                        describe={<Text>You can also invert the colors—with light text on dark
                                            backgrounds—with <Code>.table-inverse</Code> .</Text>}>
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
                                        title: 'Table Head Options'
                                    }
                                }} >
                                    <Section
                                        describe='Similar to default and inverse tables, use one of two modifier classes to make <thead>s appear light or dark gray.'>
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
                                    <Section
                                        describe={<Text>You can also invert the colors—with light text on dark
                                            backgrounds—with <Code>.table-inverse</Code> .</Text>}>
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

                                </Portle>

                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Table Head Options'
                                    }
                                }} >
                                    <Section
                                        describe={<Text>Add <Code>.table-sm</Code> to make tables more compact by
                                            cutting cell padding in half.</Text>}>
                                        <Table {
                                                   ...{
                                                       head: {
                                                           value: ['#', 'First Name', 'Last Name', 'Username'],
                                                           bgColor:'brand'
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
                                        title: 'Striped Rows'
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
                                        title: 'Bordered Table'
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
                                        title: 'Hoverable Table'
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
                                        title: 'Table Head States'
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
                                        title: 'Table Bordered States'
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
                                        title: 'Table Row States'
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
                                        title: 'Responsive tables'
                                    }
                                }} >
                                    <Section describe={<Text>Create responsive tables by wrapping any table with <Code>.table-responsive
                                        DIV</Code> to make them scroll horizontally on small devices (under
                                        768px)</Text>}>
                                        <Table {
                                                   ...{
                                                       responsive: true,
                                                       head: {
                                                           value: ['#', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading', 'Table heading']
                                                       },
                                                       data: [
                                                           {
                                                               value: [1, 'Table cell', 'Table cell', 'Table cell','Table cell','Table cell','Table cell','Table cell']
                                                           },
                                                           {
                                                               value: [2, 'Table cell', 'Table cell', 'Table cell','Table cell','Table cell','Table cell','Table cell']
                                                           },
                                                           {
                                                               value: [3, 'Table cell', 'Table cell', 'Table cell','Table cell','Table cell','Table cell','Table cell']
                                                           },
                                                           {
                                                               value: [4, 'Table cell', 'Table cell', 'Table cell','Table cell','Table cell','Table cell','Table cell']
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