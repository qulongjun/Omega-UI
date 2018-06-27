/**
 *
 * @Demo: Group
 * @User: Longjun.Qu
 * @Date: 2018-06-26
 * @Time: 10:31
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Section,
    Demo,
    ButtonGroup,
    Text,
    Code,
    Separator,
    Space,
    Paragraph
} from 'omega';
export default class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <Content>
                    <Div _includeClass="row">
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: ''
                            }} >
                                <Section title="基础示例" describe="基础按钮组示例">
                                    <Demo btnStyle={false}>
                                        <Div _includeClass="row">
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'secondary'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'secondary'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'secondary'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'brand'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'brand'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'brand'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>
                                        </Div>
                                    </Demo>
                                    <Demo btnStyle={false}>
                                        <Div _includeClass="row">
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'primary'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'primary'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'primary'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'success'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'success'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'success'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>
                                        </Div>
                                    </Demo>
                                </Section>
                                <Section title="按钮组工具栏"
                                         describe={<Text>使用 <Code>btn-toolbar</Code> 修饰符可以将多个按钮组合并为一个工具栏。</Text>}>
                                    <Demo btnStyle={false}>
                                        <ButtonGroup {...{
                                            btns: [
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-file-text-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-bold'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-paperclip'
                                                    },
                                                    btnColor: 'secondary'
                                                }
                                            ],
                                            _includeClass: 'mr-2'
                                        }}/>
                                        <ButtonGroup {...{
                                            btns: [
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-floppy-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-files-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-header'
                                                    },
                                                    btnColor: 'secondary'
                                                }
                                            ],
                                            _includeClass: 'mr-2'
                                        }}/>
                                        <ButtonGroup {...{
                                            btns: [
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-scissors'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-unlink'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-italic'
                                                    },
                                                    btnColor: 'secondary'
                                                }
                                            ],
                                            _includeClass: 'mr-2'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section title="按钮组尺寸"
                                         describe={<Text>无需为每个按钮单独设置尺寸，只需要为按钮组设置 <Code>size</Code> 属性即可。</Text>}>
                                    <Demo btnStyle={false}>
                                        <ButtonGroup {...{
                                            btns: [
                                                {
                                                    value: 'Left',
                                                    btnColor: 'outline-success'
                                                },
                                                {
                                                    value: 'Middle',
                                                    btnColor: 'outline-success'
                                                },
                                                {
                                                    value: 'Right',
                                                    btnColor: 'outline-success'
                                                }
                                            ],
                                            size: 'lg'
                                        }}/>
                                        <Space size={5}/>
                                        <ButtonGroup {...{
                                            btns: [
                                                {
                                                    value: 'Left',
                                                    btnColor: 'outline-warning'
                                                },
                                                {
                                                    value: 'Middle',
                                                    btnColor: 'outline-warning'
                                                },
                                                {
                                                    value: 'Right',
                                                    btnColor: 'outline-warning'
                                                }
                                            ],
                                            size: 'normal'
                                        }}/>
                                        <Space size={5}/>
                                        <ButtonGroup {...{
                                            btns: [
                                                {
                                                    value: 'Left',
                                                    btnColor: 'outline-info'
                                                },
                                                {
                                                    value: 'Middle',
                                                    btnColor: 'outline-info'
                                                },
                                                {
                                                    value: 'Right',
                                                    btnColor: 'outline-info'
                                                }
                                            ],
                                            size: 'sm'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section title="带 Dropdown 的按钮组"
                                         describe={<Text>按钮组可以和 ButtonDropdown 配合使用，只需要为按钮组设置 <Code>type</Code> 属性为
                                             <Code>dropdown</Code> 即可。</Text>}>
                                    <Demo btnStyle={false}>
                                        <ButtonGroup {...{
                                            btns: [
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-file-text-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-floppy-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-italic'
                                                    },
                                                    btnColor: 'secondary'
                                                }, {
                                                    type: 'dropdown',
                                                    dropdown: {
                                                        button: {
                                                            value: 'Dropdown',
                                                            btnColor: 'secondary'
                                                        },
                                                        items: [
                                                            {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }, {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }, {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section title="按钮组垂直"
                                         describe={<Text>使用 <Code>vertical</Code> 属性使按钮组以垂直方式显示。</Text>}>
                                    <Demo btnStyle={false}>
                                        <ButtonGroup {...{
                                            vertical: true,
                                            btns: [
                                                {
                                                    value: 'Button',
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    value: 'Button',
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    value: 'Button',
                                                    btnColor: 'secondary'
                                                }, {
                                                    type: 'dropdown',
                                                    dropdown: {
                                                        button: {
                                                            value: 'Dropdown',
                                                            btnColor: 'secondary'
                                                        },
                                                        items: [
                                                            {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }, {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }, {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }}/>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: ''
                            }} >
                                <Section title="高级按钮组" describe="不同样式按钮组示例">
                                    <Demo btnStyle={false}>
                                        <Div _includeClass="row">
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    groupStyle: 'pill',
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'secondary'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'secondary'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'secondary'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    groupStyle: 'pill',
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'brand'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'brand'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'brand'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>
                                        </Div>
                                    </Demo>
                                    <Demo btnStyle={false}>
                                        <Div _includeClass="row">
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    groupStyle: ['pill', 'air'],
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'primary'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'primary'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'primary'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    groupStyle: ['pill', 'air'],
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'success'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'success'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'success'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>

                                        </Div>
                                    </Demo>
                                    <Demo btnStyle={false}>
                                        <Div _includeClass="row">
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    groupStyle: 'square',
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'info'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'info'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'info'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>
                                            <Div _includeClass="col-md-6">
                                                <ButtonGroup {...{
                                                    groupStyle: 'square',
                                                    btns: [
                                                        {
                                                            value: 'left',
                                                            btnColor: 'info'
                                                        },
                                                        {
                                                            value: 'middle',
                                                            btnColor: 'info'
                                                        },
                                                        {
                                                            value: 'right',
                                                            btnColor: 'info'
                                                        }
                                                    ]
                                                }}/>
                                            </Div>

                                        </Div>
                                    </Demo>
                                </Section>
                                <Section title="按钮组工具栏"
                                         describe={<Text>使用 <Code>btn-toolbar</Code> 修饰符可以将多个按钮组合并为一个工具栏。</Text>}>
                                    <Demo btnStyle={false}>
                                        <ButtonGroup {...{
                                            groupStyle: ['pill', 'air'],
                                            btns: [
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-file-text-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-bold'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-paperclip'
                                                    },
                                                    btnColor: 'secondary'
                                                }
                                            ],
                                            _includeClass: 'mr-2'
                                        }}/>
                                        <ButtonGroup {...{
                                            groupStyle: ['pill', 'air'],
                                            btns: [
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-floppy-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-files-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-header'
                                                    },
                                                    btnColor: 'secondary'
                                                }
                                            ],
                                            _includeClass: 'mr-2'
                                        }}/>
                                        <ButtonGroup {...{
                                            groupStyle: ['pill', 'air'],
                                            btns: [
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-scissors'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-unlink'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-italic'
                                                    },
                                                    btnColor: 'secondary'
                                                }
                                            ],
                                            _includeClass: 'mr-2'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section title="按钮组尺寸"
                                         describe={<Text>无需为每个按钮单独设置尺寸，只需要为按钮组设置 <Code>size</Code> 属性即可。</Text>}>
                                    <Demo btnStyle={false}>
                                        <ButtonGroup {...{
                                            groupStyle: ['pill', 'air'],
                                            btns: [
                                                {
                                                    value: 'Left',
                                                    btnColor: 'outline-success'
                                                },
                                                {
                                                    value: 'Middle',
                                                    btnColor: 'outline-success'
                                                },
                                                {
                                                    value: 'Right',
                                                    btnColor: 'outline-success'
                                                }
                                            ],
                                            size: 'lg'
                                        }}/>
                                        <Space size={5}/>
                                        <ButtonGroup {...{
                                            groupStyle: ['square'],
                                            btns: [
                                                {
                                                    value: 'Left',
                                                    btnColor: 'outline-warning'
                                                },
                                                {
                                                    value: 'Middle',
                                                    btnColor: 'outline-warning'
                                                },
                                                {
                                                    value: 'Right',
                                                    btnColor: 'outline-warning'
                                                }
                                            ],
                                            size: 'normal'
                                        }}/>
                                        <Space size={5}/>
                                        <ButtonGroup {...{
                                            groupStyle: ['pill'],
                                            btns: [
                                                {
                                                    value: 'Left',
                                                    btnColor: 'outline-info'
                                                },
                                                {
                                                    value: 'Middle',
                                                    btnColor: 'outline-info'
                                                },
                                                {
                                                    value: 'Right',
                                                    btnColor: 'outline-info'
                                                }
                                            ],
                                            size: 'sm'
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section title="带 Dropdown 的按钮组"
                                         describe={<Text>按钮组可以和 ButtonDropdown 配合使用，只需要为按钮组设置 <Code>type</Code> 属性为
                                             <Code>dropdown</Code> 即可。</Text>}>
                                    <Demo btnStyle={false}>
                                        <ButtonGroup {...{
                                            groupStyle: 'pill',
                                            btns: [
                                                {
                                                    type: 'dropdown',
                                                    dropdown: {
                                                        button: {
                                                            value: 'Dropdown',
                                                            btnColor: 'secondary'
                                                        },
                                                        items: [
                                                            {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }, {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }, {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }
                                                        ]
                                                    }
                                                }, {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-file-text-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-floppy-o'
                                                    },
                                                    btnColor: 'secondary'
                                                },
                                                {
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-italic'
                                                    },
                                                    btnColor: 'secondary'
                                                }, {
                                                    type: 'dropdown',
                                                    dropdown: {
                                                        button: {
                                                            value: 'Dropdown',
                                                            btnColor: 'secondary'
                                                        },
                                                        items: [
                                                            {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }, {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }, {
                                                                value: 'Dropdown link',
                                                                btnColor: 'secondary'
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }}/>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}