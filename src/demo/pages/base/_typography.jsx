/**
 *
 * @Demo: Alerts
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 09:18
 *
 */

import React, {Component, Fragment} from 'react';

import SubHeader from '../_subheader';
import Wrapper from 'components/framework/_wrapper';
import Content from 'components/framework/_content';
import Section from 'components/framework/_section';

import Portle from 'components/general/_portle';

import Demo from '../_demo'

import 'sass/_demo.scss';
import Paragraph from "../../../components/framework/_paragraph";
import Text from "../../../components/framework/_text";



class Typography extends Component {
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
                    <SubHeader title="Typography"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Heading'
                                    }
                                }} >
                                    <Section>

                                    </Section>
                                </Portle>


                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Text'
                                    }
                                }} >
                                    <Section title="Basic text" describe="Basic text examples">
                                        <Demo>
                                            <Paragraph>
                                                <Text>Example text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-bold']}>Example bold text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-bolder']}>Example bolder text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-boldest']}>Example boldest text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-transform-u']}>Example uppercase text</Text>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section describe="State colors">
                                        <Demo>
                                            <Paragraph>
                                                <Text state='success'>Success state text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='warning'>Warning state text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='info'>Info state text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='danger'>Danger state text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='primary'>Primary state text</Text>
                                            </Paragraph>
                                        </Demo>
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

export default Typography;