import React, {Fragment} from 'react'
import {hot} from 'react-hot-loader'
import './App.css'
import logo from './assets/logo_blue.png';
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
    Header
} from 'omega';

const App = () => (
    <Fragment>
        <Page>
            <Header {...{
                brand: {
                    show: true,
                    skin: 'dark',
                    logo: {
                        src: logo,
                        _includeStyle: {
                            width: '120px'
                        }
                    },
                    href: 'http://www.baidu.com'
                }
            }}/>
            <Container>
                <Button {...{
                    _includeClass: 'm-aside-left-close  m-aside-left-close--skin-dark '
                }} />
                <Div _includeClass="m-grid__item m-aside-left m-aside-left--skin-dark">
                    <Menu {...{
                        skin: 'dark',
                        autoScroll: true,
                        items: [
                            {
                                text: 'Dashboard',
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
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                text: 'Base',
                                icon: {
                                    show: true,
                                    name: 'flaticon-layers'
                                },
                                child: [
                                    {
                                        text: 'State Color',
                                        isActive: true,
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Typography',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Stack',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        }
                                    },
                                    {
                                        text: 'Tables',
                                        bullet: {
                                            show: true,
                                            type: 'dot'
                                        },
                                        child: [
                                            {
                                                isActive: true,
                                                text: 'Tables',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }} />
                </Div>
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
            <Footer {...{
                copyright: (
                    <Fragment>
                        2018 © Omega UI by <Link href="https://doc.react-china.org/"> React </Link> 。
                    </Fragment>
                )
            }}/>
        </Page>
    </Fragment>
);

export default hot(module)(App)
