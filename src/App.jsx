import React, {Fragment} from 'react'
import {hot} from 'react-hot-loader'
import './App.css'
import logo from './assets/logo_blue.png';
import {Page, Container, Wrapper, Content, Div, Portlet, Paragraph, Separator, Section, Link, Space, SubHeader} from 'omega';

const App = () => (
    <Fragment>
        <Page>
            <Container>
                <Wrapper>
                    <SubHeader {...{
                        header: {
                            show: true,
                            name: 'Dashboard'
                        }
                    }}/>
                    <Content>
                        <Div _includeClass='row'>
                            <Div _includeClass="col-xl-12">
                                <Portlet {...{
                                    header: {title: 'Get Started'},
                                    _includeClass: 'text-center'
                                }}>
                                    <img src={logo} width='20%'/>
                                    <Separator/>
                                    <Section title="恭喜您，Omega 搭建成功！" describe="在开始项目之前，以下内容可能会对您有帮助：">
                                        <Link {...{
                                            href: 'https://doc.react-china.org/'
                                        }}>React 中文文档</Link>
                                        <Space/>
                                        <Link {...{
                                            href: 'http://omega-doc.qulongjun.com/'
                                        }}>Omega 中文文档</Link>
                                        <Space/>
                                        <Link {...{
                                            href: 'http://omega.qulongjun.com/'
                                        }}>Omega 官方示例</Link>
                                    </Section>
                                    <Space size="50"/>
                                </Portlet>
                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Container>
        </Page>
    </Fragment>
);

export default hot(module)(App)
