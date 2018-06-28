import React, {Fragment} from 'react'
import {hot} from 'react-hot-loader'
import './App.css'
import logo_blue from './assets/logo_blue.png';

import {
    Page,
    Container,
    Wrapper,
    Content,
    Div,
    Portlet,
    Paragraph,
    Separator,
    Section,
    Link,
    Space,
    SubHeader,
    Menu,
    Button,
    Badge,
    Stack,
    Footer,
    Text,
    Header,
    Icon,
    Aside
} from 'omega';

const App = () => (
    <Fragment>
        <Page>
            <Header {...{
                brand: {
                    show: true,
                    skin: 'light',
                    logo: {
                        src: logo_blue,
                        _includeStyle: {
                            width: '120px'
                        }
                    },
                    href: 'https://github.com/qulongjun/Omega-UI'
                }
            }}/>
            <Container>
                <Aside {...{
                    skin: 'light',
                    menu: {
                        show: true,
                        autoScroll: true,
                        items: [
                            {
                                text: '欢迎使用',
                                icon: {
                                    show: true,
                                    name: 'flaticon-line-graph'
                                },
                                badge: {
                                    show: true,
                                    bgColor: 'danger',
                                    value: 2
                                }
                            },
                            {
                                type: 'section',
                                text: 'Components'
                            },
                            {
                                text: '这是一级菜单',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: '这是二级菜单',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                text: '这是三级菜单',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ],
                                        isExpand: true
                                    }
                                ],
                                isExpand: true
                            }
                        ]
                    }
                }}/>
                <Wrapper>
                    <SubHeader {...{
                        header: {
                            show: true,
                            name: '欢迎使用'
                        }
                    }}/>
                    <Content>
                        <Div _includeClass='row'>
                            <Div _includeClass="col-xl-12">
                                <Portlet {...{
                                    header: {title: 'Get Started'},
                                    _includeClass: 'text-center'
                                }}>
                                    <img src={logo_blue} width='20%'/>
                                    <Separator/>
                                    <Section title="恭喜您，Omega 搭建成功！" describe="在开始项目之前，以下内容可能会对您有帮助：">
                                        <Link {...{
                                            href: 'https://doc.react-china.org/'
                                        }}>React 中文官网</Link>
                                        <Space/>
                                        <Link {...{
                                            href: 'http://omega-doc.qulongjun.com/'
                                        }}>技术文档</Link>
                                        <Space/>
                                        <Link {...{
                                            href: 'http://omega.qulongjun.com/'
                                        }}>官方示例</Link>
                                    </Section>
                                    <Space size="50"/>
                                </Portlet>
                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Container>
            <Footer {...{
                copyright: (
                    <Fragment>
                        2018 © Omega UI by <Link href="https://doc.react-china.org/"> React </Link> 。
                    </Fragment>
                ),
                nav: [
                    {
                        text: {
                            value: 'React 中文官网',
                            href: 'https://doc.react-china.org/'
                        }
                    }, {
                        text: {
                            value: '技术文档',
                            href: 'http://omega-doc.qulongjun.com/'
                        }
                    }, {
                        text: {
                            value: '官方示例',
                            href: 'http://omega.qulongjun.com/'
                        }
                    }, {
                        text: {
                            value: '快速构建',
                            href: 'https://github.com/qulongjun/Omega-cli'
                        }
                    }, {
                        text: {
                            value: 'Github',
                            href: 'https://github.com/qulongjun/Omega-UI'
                        }
                    }
                ]
            }}/>
        </Page>
    </Fragment>
);

export default hot(module)(App)
