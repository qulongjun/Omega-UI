/**
 *
 * @Demo: Dropdowns
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 22:17
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Section,
    Code,
    Text,
    Dropdown,
    Nav,
    Button,
    Separator,
    Scroll,
    Paragraph,
    SubHeader
} from 'omega';

export default class Dropdowns extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '下拉组件',
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
                                    value: '下拉组件',
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
                    <div className="row">
                        <div className="col-xl-6">
                            <Portlet {...{
                                header: {
                                    show: true,
                                    title: '基础提醒'
                                },
                                _includeClass: 'm-demo-dropdowns'
                            }} >
                                <Section title='基础示例'
                                         describe={<Text>通过使用 <Code>Dropdown</Code> 组件，可以快速构建一个下拉组件。</Text>}>
                                    <Div _includeClass="row">
                                        <Div _includeClass="col">
                                            <Dropdown {...{
                                                button: {
                                                    value: 'Dropdown',
                                                    btnColor: 'success'
                                                }
                                            }}>
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
                                            </Dropdown>
                                        </Div>
                                        <Div _includeClass="col">
                                            <Dropdown {...{
                                                button: {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-ellipsis-v'
                                                    }
                                                }
                                            }}>
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
                                            </Dropdown>
                                            <Dropdown {...{
                                                button: {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-ellipsis-h'
                                                    }
                                                }
                                            }}>
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
                                            </Dropdown>
                                        </Div>
                                        <Div _includeClass="col">
                                            <Dropdown {...{
                                                button: {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-ellipsis-v'
                                                    },
                                                    btnStyle: 'pill',
                                                    btnColor: 'secondary',
                                                    _excludeClass: 'm-btn--icon-only'
                                                }
                                            }}>
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
                                            </Dropdown>
                                        </Div>
                                        <Div _includeClass="col">
                                            <Dropdown {...{
                                                button: {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-ellipsis-h'
                                                    },
                                                    btnStyle: 'pill',
                                                    btnColor: 'secondary',
                                                    _excludeClass: 'm-btn--icon-only'
                                                }
                                            }}>
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
                                            </Dropdown>
                                        </Div>
                                    </Div>
                                </Section>
                                <Separator dashed={true}/>
                                <Section {...{
                                    describe: (
                                        <Text>通过设置 <Code>toggle</Code> 属性可以切换 <Code>hover</Code> 或 <Code>click</Code>
                                            激活方式。</Text>)
                                }}>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Hover',
                                            btnColor: 'primary'
                                        },
                                        toggle: 'hover'
                                    }}>
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
                                    </Dropdown>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Click',
                                            btnColor: 'brand'
                                        },
                                        toggle: 'click'
                                    }}>
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
                                    </Dropdown>
                                </Section>
                                <Separator dashed={true}/>
                                <Section {...{
                                    describe: (
                                        <Text>通过设置 <Code>persistent</Code> 属性可以让下拉组件在点击后不消失。</Text>)
                                }}>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Persistent',
                                            btnColor: 'danger'
                                        },
                                        toggle: 'click',
                                        persistent: true
                                    }}>
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
                                    </Dropdown>
                                </Section>
                            </Portlet>
                        </div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: {
                                    show: true,
                                    title: '高级示例'
                                },
                                _includeClass: 'm-demo-dropdowns'
                            }} >
                                <Section describe={<Text>通过使用 <Code>direction</Code> 属性，可以控制下拉组件展示的位置。</Text>}>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Left',
                                            btnColor: 'info'
                                        },
                                        toggle: 'click',
                                        direction: 'left',
                                        showArrow: true
                                    }}>
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
                                    </Dropdown>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Center',
                                            btnColor: 'warning'
                                        },
                                        toggle: 'click',
                                        direction: 'center',
                                        showArrow: true
                                    }}>
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
                                    </Dropdown>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Left',
                                            btnColor: 'brand'
                                        },
                                        toggle: 'click',
                                        direction: 'right',
                                        showArrow: true
                                    }}>
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
                                    </Dropdown>
                                </Section>
                                <Section describe={<Text>通过使用 <Code>vertical</Code> 属性，可以控制下拉组件的展示方向。</Text>}>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Top',
                                            btnColor: 'brand'
                                        },
                                        toggle: 'click',
                                        direction: 'center',
                                        vertical: 'top'
                                    }}>
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
                                    </Dropdown>
                                </Section>
                                <Section describe={<Text>通过使用 <Code>showArrow</Code> 属性，可以隐藏下拉组件的指示箭头。</Text>}>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-No-Arrow',
                                            btnColor: 'success'
                                        },
                                        toggle: 'click',
                                        direction: 'center',
                                        vertical: 'top',
                                        showArrow: false
                                    }}>
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
                                    </Dropdown>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-No-Arrow',
                                            btnColor: 'primary'
                                        },
                                        toggle: 'click',
                                        direction: 'center',
                                        showArrow: false
                                    }}>
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
                                    </Dropdown>
                                </Section>
                                <Section describe={<Text>通过配合 <Code>Scroll</Code> 组件，可以让下拉组件实现滚动。</Text>}>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Scroll',
                                            btnColor: 'primary'
                                        },
                                        toggle: 'click',
                                        direction: 'left',
                                    }}>
                                        <Scroll fixHeight='100px'>
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
                                        </Scroll>
                                    </Dropdown>
                                </Section>
                                <Section describe={<Text> <Code>Dropdown</Code> 组件也支持显示其他组件或内容，如文本内容。</Text>}>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Text',
                                            btnColor: 'primary'
                                        },
                                        toggle: 'click',
                                        direction: 'center',
                                        vertical: 'top'
                                    }}>
                                        <Div>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                            <Separator/>
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                            when an unknown printer took
                                        </Div>
                                    </Dropdown>
                                    <Dropdown {...{
                                        button: {
                                            value: 'Dropdown-Text-Scroll',
                                            btnColor: 'info'
                                        },
                                        toggle: 'click',
                                        direction: 'center',
                                        vertical: 'top'
                                    }}>
                                        <Scroll fixHeight='100px'>
                                            <Div>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry.
                                                <Separator/>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s,
                                                when an unknown printer took
                                            </Div>
                                        </Scroll>
                                    </Dropdown>
                                </Section>
                            </Portlet>
                        </Div>
                    </div>
                </Content>
            </Fragment>
        );
    }
}