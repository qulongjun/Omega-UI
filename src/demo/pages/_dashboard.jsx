/**
 *
 * @Demo: Dashboard
 * @User: Longjun.Qu
 * @Date: 2018-06-13
 * @Time: 10:15
 *
 */


import React, {Component, Fragment} from 'react';

import Text from 'components/framework/_text';
import Code from 'components/framework/_code'
import Paragraph from 'components/framework/_paragraph';
import SubHeader from './_subheader';
import Wrapper from 'components/framework/_wrapper';
import Content from 'components/framework/_content';
import Section from 'components/framework/_section';

import Portle from 'components/general/_portle';
import Button from "components/general/_button";

import Demo from "./_demo";

import 'sass/_demo.scss';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {history} = _props;
        return (
            <Fragment>
                <Wrapper>
                    {/*<SubHeader title="Dashboard"/>*/}
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '页面导航'
                                    }
                                }} >
                                    <Paragraph>
                                        <Text>这是一个临时导航，当所有组件开发完成后会使用 <Code>Menu</Code> 组件重构。</Text>
                                    </Paragraph>
                                    <Section title="Base">
                                        <Demo>
                                            <Button {...{
                                                value: 'State Color',
                                                color: 'outline-brand',
                                                handle: {
                                                    click: () => {
                                                        history.push('/StateColor');
                                                    }
                                                }

                                            }}/>
                                            <Button {...{
                                                value: 'Typography',
                                                color: 'outline-focus',
                                                handle: {
                                                    click: () => {
                                                        history.push('/Typography');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Tables',
                                                color: 'outline-accent',
                                                handle: {
                                                    click: () => {
                                                        history.push('/Tables');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Alerts',
                                                color: 'outline-primary',
                                                handle: {
                                                    click: () => {
                                                        history.push('/Alerts');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Progress',
                                                color: 'outline-success',
                                                handle: {
                                                    click: () => {
                                                        history.push('/Progress');
                                                    }
                                                }
                                            }}/>
                                        </Demo>
                                    </Section>

                                </Portle>
                            </div>
                            <div className="col-xl-6">

                            </div>
                        </div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default Dashboard;