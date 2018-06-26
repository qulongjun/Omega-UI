/**
 *
 * @Demo: Navs
 * @User: Longjun.Qu
 * @Date: 2018-06-18
 * @Time: 22:16
 *
 */


import React, {Component, Fragment} from 'react';

import Text from 'components/_element/Text';
import Paragraph from 'components/_element/Paragraph';
import Div from 'components/_element/Div';
import SubHeader from 'components/_framework/SubHeader';
import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';
import Demo from "components/_framework/Demo";

import Portlet from 'components/_portlet/Portlet';


import 'sass/_demo.scss';
import Nav from "../../../components/_base/Nav";
import Badge from "../../../components/_base/Badge";
import Button from "../../../components/_button/Button";


class Navs extends Component {
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
                    <SubHeader title="导航"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '默认导航'
                                }} >
                                    <Section>
                                        <Demo>
                                            <Nav {...{
                                                items: [{
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-share'
                                                    },
                                                    text: {
                                                        value: 'Activity',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-chat-1'
                                                    },
                                                    text: {
                                                        value: 'Message',
                                                        href: '#'
                                                    },
                                                    badge: (<Badge {...{
                                                        bgColor: 'danger',
                                                        type: ['wide', 'rounded']
                                                    }}>new</Badge>)
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-info'
                                                    },
                                                    text: {
                                                        value: 'FAQ',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-cogwheel-2'
                                                    },
                                                    text: {
                                                        value: 'Settings',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-lifebuoy'
                                                    },
                                                    text: {
                                                        value: 'Support',
                                                        href: '#'
                                                    },
                                                    badge: (<Badge {...{
                                                        bgColor: 'success',
                                                        type: ['wide']
                                                    }}>23</Badge>)
                                                }]
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '分段和分隔线'
                                }} >
                                    <Section>
                                        <Demo>
                                            <Nav {...{
                                                items: [{
                                                    type: 'section',
                                                    text: {
                                                        value: 'SECTION 1',
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-share'
                                                    },
                                                    text: {
                                                        value: 'Activity',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-chat-1'
                                                    },
                                                    text: {
                                                        value: 'Message',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-info'
                                                    },
                                                    text: {
                                                        value: 'FAQ',
                                                        href: '#'
                                                    }
                                                }, {
                                                    type: 'section',
                                                    text: {
                                                        value: 'SECTION 2',
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-cogwheel-2'
                                                    },
                                                    text: {
                                                        value: 'Settings',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-lifebuoy'
                                                    },
                                                    text: {
                                                        value: 'Support',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-interface-1'
                                                    },
                                                    text: {
                                                        value: 'Logs',
                                                        href: '#'
                                                    }
                                                }, {
                                                    type: 'separator'
                                                }, {
                                                    type: 'other',
                                                    text: {
                                                        value: (<Button {...{
                                                            btnColor: 'outline-danger',
                                                            value: 'Logout',
                                                            btnStyle: 'pill',
                                                            size: 'sm'
                                                        }}/>)
                                                    }
                                                }]
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '激活和禁用导航项'
                                }} >
                                    <Section>
                                        <Demo>
                                            <Nav {...{
                                                items: [{
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-share'
                                                    },
                                                    text: {
                                                        value: 'Activity（Active）',
                                                        href: '#'
                                                    },
                                                    state: 'active'
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-chat-1'
                                                    },
                                                    text: {
                                                        value: 'Message',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-info'
                                                    },
                                                    text: {
                                                        value: 'FAQ（Disabled）',
                                                        href: '#'
                                                    },
                                                    state: 'disabled'
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-cogwheel-2'
                                                    },
                                                    text: {
                                                        value: 'Settings',
                                                        href: '#'
                                                    }
                                                }]
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '多级导航'
                                }} >
                                    <Section>
                                        <Demo>
                                            <Nav {...{
                                                items: [{
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-share'
                                                    },
                                                    text: {
                                                        value: 'Activity',
                                                        href: '#'
                                                    }
                                                }, {
                                                    type: 'child',
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-chat-1'
                                                    },
                                                    text: {
                                                        value: 'Message',
                                                        href: '#',
                                                        child: (<Nav {...{
                                                            type: 'sub',
                                                            items: [{
                                                                bullet: {
                                                                    show: true,
                                                                    type: 'dot'
                                                                },
                                                                text: {
                                                                    value: 'Activity',
                                                                    href: '#'
                                                                }
                                                            }, {
                                                                bullet: {
                                                                    show: true,
                                                                    type: 'dot'
                                                                },
                                                                text: {
                                                                    value: 'Message',
                                                                    href: '#'
                                                                },
                                                                badge: (<Badge {...{
                                                                    bgColor: 'danger',
                                                                    type: ['wide', 'rounded']
                                                                }}>new</Badge>)
                                                            }, {
                                                                type:'child',
                                                                bullet: {
                                                                    show: true,
                                                                    type: 'line'
                                                                },
                                                                text: {
                                                                    value: 'FAQ',
                                                                    href: '#',
                                                                    child:(<Nav {...{
                                                                        type: 'sub',
                                                                        items: [{
                                                                            bullet: {
                                                                                show: true,
                                                                                type: 'dot'
                                                                            },
                                                                            text: {
                                                                                value: 'Activity',
                                                                                href: '#'
                                                                            }
                                                                        }, {
                                                                            bullet: {
                                                                                show: true,
                                                                                type: 'dot'
                                                                            },
                                                                            text: {
                                                                                value: 'Message',
                                                                                href: '#'
                                                                            },
                                                                            badge: (<Badge {...{
                                                                                bgColor: 'danger',
                                                                                type: ['wide', 'rounded']
                                                                            }}>new</Badge>)
                                                                        }, {
                                                                            bullet: {
                                                                                show: true,
                                                                                type: 'line'
                                                                            },
                                                                            text: {
                                                                                value: 'FAQ',
                                                                                href: '#'
                                                                            }
                                                                        }, {
                                                                            bullet: {
                                                                                show: true,
                                                                                type: 'line'
                                                                            },
                                                                            text: {
                                                                                value: 'Settings',
                                                                                href: '#'
                                                                            }
                                                                        }]
                                                                    }}/>)
                                                                }
                                                            }, {
                                                                bullet: {
                                                                    show: true,
                                                                    type: 'line'
                                                                },
                                                                text: {
                                                                    value: 'Settings',
                                                                    href: '#'
                                                                }
                                                            }]
                                                        }}/>)
                                                    },
                                                    badge: (<Badge {...{
                                                        bgColor: 'danger',
                                                        type: ['wide', 'rounded']
                                                    }}>new</Badge>)
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-info'
                                                    },
                                                    text: {
                                                        value: 'FAQ',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-cogwheel-2'
                                                    },
                                                    text: {
                                                        value: 'Settings',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-lifebuoy'
                                                    },
                                                    text: {
                                                        value: 'Support',
                                                        href: '#'
                                                    },
                                                    badge: (<Badge {...{
                                                        bgColor: 'success',
                                                        type: ['wide']
                                                    }}>23</Badge>)
                                                }]
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                            </Div>
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '其他导航前缀'
                                }} >
                                    <Section>
                                        <Demo>
                                            <Nav {...{
                                                items: [{
                                                    bullet: {
                                                        show: true,
                                                        type: 'dot'
                                                    },
                                                    text: {
                                                        value: 'Activity',
                                                        href: '#'
                                                    }
                                                }, {
                                                    bullet: {
                                                        show: true,
                                                        type: 'dot'
                                                    },
                                                    text: {
                                                        value: 'Message',
                                                        href: '#'
                                                    },
                                                    badge: (<Badge {...{
                                                        bgColor: 'danger',
                                                        type: ['wide', 'rounded']
                                                    }}>new</Badge>)
                                                }, {
                                                    bullet: {
                                                        show: true,
                                                        type: 'line'
                                                    },
                                                    text: {
                                                        value: 'FAQ',
                                                        href: '#'
                                                    }
                                                }, {
                                                    bullet: {
                                                        show: true,
                                                        type: 'line'
                                                    },
                                                    text: {
                                                        value: 'Settings',
                                                        href: '#'
                                                    }
                                                }]
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '嵌套导航'
                                }} >
                                    <Section>
                                        <Demo>
                                            <Nav {...{
                                                items: [{
                                                    type: 'child',
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-share'
                                                    },
                                                    text: {
                                                        value: 'Activity',
                                                        href: '#',
                                                        child: (
                                                            <Nav {...{
                                                                type: 'sub',
                                                                items: [{
                                                                    icon: {
                                                                        show: true,
                                                                        name: 'flaticon-share'
                                                                    },
                                                                    text: {
                                                                        value: 'Activity',
                                                                        href: '#'
                                                                    }
                                                                }, {
                                                                    icon: {
                                                                        show: true,
                                                                        name: 'flaticon-chat-1'
                                                                    },
                                                                    text: {
                                                                        value: 'Message',
                                                                        href: '#'
                                                                    },
                                                                    badge: (<Badge {...{
                                                                        bgColor: 'danger',
                                                                        type: ['wide', 'rounded']
                                                                    }}>new</Badge>)
                                                                }]
                                                            }}/>
                                                        )
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-chat-1'
                                                    },
                                                    text: {
                                                        value: 'Message',
                                                        href: '#'
                                                    },
                                                    badge: (<Badge {...{
                                                        bgColor: 'danger',
                                                        type: ['wide', 'rounded']
                                                    }}>new</Badge>)
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-info'
                                                    },
                                                    text: {
                                                        value: 'FAQ',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-cogwheel-2'
                                                    },
                                                    text: {
                                                        value: 'Settings',
                                                        href: '#'
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-lifebuoy'
                                                    },
                                                    text: {
                                                        value: 'Support',
                                                        href: '#'
                                                    },
                                                    badge: (<Badge {...{
                                                        bgColor: 'success',
                                                        type: ['wide']
                                                    }}>23</Badge>)
                                                }]
                                            }}/>
                                        </Demo>
                                        <Demo>
                                            <Nav {...{
                                                items: [{
                                                    type: 'child',
                                                    bullet: {
                                                        show: true,
                                                        type: 'dot'
                                                    },
                                                    text: {
                                                        value: 'Activity',
                                                        href: '#',
                                                        child: (
                                                            <Nav {...{
                                                                type: 'sub',
                                                                items: [{
                                                                    bullet: {
                                                                        show: true,
                                                                        type: 'dot'
                                                                    },
                                                                    text: {
                                                                        value: 'Activity',
                                                                        href: '#'
                                                                    }
                                                                }, {
                                                                    bullet: {
                                                                        show: true,
                                                                        type: 'dot'
                                                                    },
                                                                    text: {
                                                                        value: 'Message',
                                                                        href: '#'
                                                                    },
                                                                    badge: (<Badge {...{
                                                                        bgColor: 'danger',
                                                                        type: ['wide', 'rounded']
                                                                    }}>new</Badge>)
                                                                }]
                                                            }}/>
                                                        )
                                                    }
                                                }, {
                                                    bullet: {
                                                        show: true,
                                                        type: 'dot'
                                                    },
                                                    text: {
                                                        value: 'Message',
                                                        href: '#'
                                                    },
                                                    badge: (<Badge {...{
                                                        bgColor: 'danger',
                                                        type: ['wide', 'rounded']
                                                    }}>new</Badge>)
                                                }, {
                                                    bullet: {
                                                        show: true,
                                                        type: 'line'
                                                    },
                                                    text: {
                                                        value: 'FAQ',
                                                        href: '#'
                                                    }
                                                }, {
                                                    bullet: {
                                                        show: true,
                                                        type: 'line'
                                                    },
                                                    text: {
                                                        value: 'Settings',
                                                        href: '#'
                                                    }
                                                }]
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default Navs;