/**
 *
 * @Demo: Inputs
 * @User: Longjun.Qu
 * @Date: 2018-07-01
 * @Time: 10:35
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Section,
    Demo,
    ButtonDropdown,
    Text,
    Code,
    Separator,
    Space,
    Paragraph,
    Form,
    Input,
    Alert,
    Button
} from 'omega';

export default class Inputs extends Component {
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
                                header: '基础文本输入'
                            }} >
                                <Form {...{
                                    items: [
                                        (
                                            <Input {...{
                                                type: 'custom',
                                                custom: (
                                                    <Alert {...{
                                                        message: (
                                                            <Text>以下是一些简单的文本输入组件，可以通过 <Code>input</Code> 组件实现如下效果。</Text>),
                                                        _includeClass: 'm-alert--default'
                                                    }}/>
                                                )
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'email',
                                                    placeholder: 'Enter email',
                                                    solid: false,
                                                    value: ''
                                                },
                                                label: '示例文本框',
                                                helper: 'We\'ll never share your email with anyone else.\n'

                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'password',
                                                    placeholder: 'Password',
                                                    value: ''
                                                },
                                                label: '示例密码框',
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'static',
                                                text: 'email@example.com',
                                                label: '示例静态文字:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5]
                                                },
                                                label: '示例单选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5],
                                                    multiple: true
                                                },
                                                label: '示例多选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'textarea',
                                                textarea: {
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                },
                                                label: '示例文本框:'
                                            }} />
                                        )
                                    ],
                                    foot: {
                                        type: 'actions',
                                        value: (
                                            <Fragment>
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Fragment>
                                        )
                                    }
                                }}/>

                            </Portlet>
                            <Portlet {...{
                                header: 'HTML5 文本输入'
                            }} >
                                <Form {...{
                                    items: [
                                        (
                                            <Input {...{
                                                type: 'custom',
                                                custom: (
                                                    <Alert {...{
                                                        message: (
                                                            <Text>除了常见的文本输入，<Code>input</Code> 组件也支持 HTML5
                                                                中所有类型。</Text>),
                                                        _includeClass: 'm-alert--default'
                                                    }}/>
                                                )
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'text',
                                                    value: 'This is omega ui',
                                                    solid: false,
                                                },
                                                label: 'Text',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'search',
                                                    value: 'What\'s the weather?',
                                                    solid: false,
                                                },
                                                label: 'Search',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'email',
                                                    value: 'omega_ui@163.com',
                                                    solid: false,
                                                },
                                                label: 'Email',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'url',
                                                    value: 'https://omega.qulongjun.com',
                                                    solid: false,
                                                },
                                                label: 'URL',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'tel',
                                                    value: '1-(555)-555-5555',
                                                    solid: false,
                                                },
                                                label: 'Tel',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'password',
                                                    value: '123456',
                                                    solid: false,
                                                },
                                                label: 'Password',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'number',
                                                    solid: false,
                                                    value: '22'
                                                },
                                                label: 'Number',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'datetime-local',
                                                    solid: false,
                                                    value: '2018-07-01T13:45:00'
                                                },
                                                label: 'Date & Time',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'date',
                                                    solid: false,
                                                    value: '2018-07-01'
                                                },
                                                label: 'Date',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'month',
                                                    solid: false,
                                                    value: '2018-07'
                                                },
                                                label: 'Month',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'week',
                                                    solid: false,
                                                    value: '2018-W33'
                                                },
                                                label: 'Week',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'time',
                                                    solid: false,
                                                    value: '13:45:00'
                                                },
                                                label: 'Time',
                                                display: [2]
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'color',
                                                    solid: false,
                                                    value: '#563d7c'
                                                },
                                                label: 'Color',
                                                display: [2]
                                            }} />
                                        )
                                    ],
                                    foot: {
                                        type: 'actions',
                                        value: (
                                            <Fragment>
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Fragment>
                                        )
                                    }
                                }}/>
                            </Portlet>
                            <Portlet {...{
                                header: '阴影特效'
                            }} >
                                <Form {...{
                                    items: [
                                        (
                                            <Input {...{
                                                type: 'custom',
                                                custom: (
                                                    <Alert {...{
                                                        message: (
                                                            <Text>可以通过设置 <Code>style</Code> 属性实现阴影效果。</Text>),
                                                        _includeClass: 'm-alert--default'
                                                    }}/>
                                                )
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'email',
                                                    placeholder: 'Enter email',
                                                    solid: false,
                                                    value: ''
                                                },
                                                style: 'air',
                                                label: '示例文本框',
                                                helper: 'We\'ll never share your email with anyone else.\n'

                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'password',
                                                    placeholder: 'Password',
                                                    value: ''
                                                },
                                                style: 'air',
                                                label: '示例密码框',
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5]
                                                },
                                                style: 'air',
                                                label: '示例单选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5],
                                                    multiple: true
                                                },
                                                style: 'air',
                                                label: '示例多选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'textarea',
                                                textarea: {
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                },
                                                style: 'air',
                                                label: '示例文本框:'
                                            }} />
                                        )
                                    ],
                                    foot: {
                                        type: 'actions',
                                        value: (
                                            <Fragment>
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Fragment>
                                        )
                                    }
                                }}/>

                            </Portlet>
                            <Portlet {...{
                                header: '椭圆样式'
                            }} >
                                <Form {...{
                                    items: [
                                        (
                                            <Input {...{
                                                type: 'custom',
                                                custom: (
                                                    <Alert {...{
                                                        message: (
                                                            <Text>可以通过设置 <Code>style</Code> 属性实现椭圆样式。</Text>),
                                                        _includeClass: 'm-alert--default'
                                                    }}/>
                                                )
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'email',
                                                    placeholder: 'Enter email',
                                                    solid: false,
                                                    value: ''
                                                },
                                                style: 'pill',
                                                label: '示例文本框',
                                                helper: 'We\'ll never share your email with anyone else.\n'

                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'password',
                                                    placeholder: 'Password',
                                                    value: ''
                                                },
                                                style: 'pill',
                                                label: '示例密码框',
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5]
                                                },
                                                style: 'pill',
                                                label: '示例单选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5],
                                                    multiple: true
                                                },
                                                style: 'pill',
                                                label: '示例多选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'textarea',
                                                textarea: {
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                },
                                                style: 'pill',
                                                label: '示例文本框:'
                                            }} />
                                        )
                                    ],
                                    foot: {
                                        type: 'actions',
                                        value: (
                                            <Fragment>
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Fragment>
                                        )
                                    }
                                }}/>

                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '直角样式'
                            }} >
                                <Form {...{
                                    items: [
                                        (
                                            <Input {...{
                                                type: 'custom',
                                                custom: (
                                                    <Alert {...{
                                                        message: (
                                                            <Text>可以通过设置 <Code>style</Code> 属性实现椭圆样式。</Text>),
                                                        _includeClass: 'm-alert--default'
                                                    }}/>
                                                )
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'email',
                                                    placeholder: 'Enter email',
                                                    solid: false,
                                                    value: ''
                                                },
                                                style: 'square',
                                                label: '示例文本框',
                                                helper: 'We\'ll never share your email with anyone else.\n'

                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'password',
                                                    placeholder: 'Password',
                                                    value: ''
                                                },
                                                style: 'square',
                                                label: '示例密码框',
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5]
                                                },
                                                style: 'square',
                                                label: '示例单选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5],
                                                    multiple: true
                                                },
                                                style: 'square',
                                                label: '示例多选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'textarea',
                                                textarea: {
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                },
                                                style: 'square',
                                                label: '示例文本框:'
                                            }} />
                                        )
                                    ],
                                    foot: {
                                        type: 'actions',
                                        value: (
                                            <Fragment>
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Fragment>
                                        )
                                    }
                                }}/>
                            </Portlet>
                            <Portlet {...{
                                header: '直角样式&反色'
                            }} >
                                <Form {...{
                                    items: [
                                        (
                                            <Input {...{
                                                type: 'custom',
                                                custom: (
                                                    <Alert {...{
                                                        message: (
                                                            <Text>可以通过设置 <Code>solid</Code> 属性实现反色效果（灰色背景色，透明边框）。</Text>),
                                                        _includeClass: 'm-alert--default'
                                                    }}/>
                                                )
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'email',
                                                    placeholder: 'Enter email',
                                                    value: ''
                                                },
                                                solid: true,
                                                style: 'square',
                                                label: '示例文本框',
                                                helper: 'We\'ll never share your email with anyone else.\n'

                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'password',
                                                    placeholder: 'Password',
                                                    value: ''
                                                },
                                                solid: true,
                                                style: 'square',
                                                label: '示例密码框',
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5]
                                                },
                                                solid: true,
                                                style: 'square',
                                                label: '示例单选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5],
                                                    multiple: true
                                                },
                                                solid: true,
                                                style: 'square',
                                                label: '示例多选框:'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'textarea',
                                                textarea: {
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                },
                                                solid: true,
                                                style: 'square',
                                                label: '示例文本框:'
                                            }} />
                                        )
                                    ],
                                    foot: {
                                        type: 'actions',
                                        value: (
                                            <Fragment>
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Fragment>
                                        )
                                    }
                                }}/>
                            </Portlet>
                            <Portlet {...{
                                header: 'Diabled & Readonly'
                            }} >
                                <Form {...{
                                    items: [
                                        (
                                            <Input {...{
                                                type: 'custom',
                                                custom: (
                                                    <Alert {...{
                                                        message: (
                                                            <Text>将 <Code>disabled</Code> 属性设置为 <Code>true</Code> 将禁用该组件,将 <Code>readOnly</Code> 属性设置为 <Code>true</Code> 将以只读的方式显示该组件。</Text>),
                                                        _includeClass: 'm-alert--default'
                                                    }}/>
                                                )
                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'email',
                                                    placeholder: 'Disabled email',
                                                    solid: false,
                                                    value: '',
                                                    disabled: true
                                                },
                                                label: '示例文本框(Disabled)',
                                                helper: 'We\'ll never share your email with anyone else.\n'

                                            }} />
                                        ), (
                                            <Input {...{
                                                input: {
                                                    type: 'password',
                                                    placeholder: 'Password',
                                                    value: 'password',
                                                    readOnly: true
                                                },
                                                label: '示例密码框(readOnly)',
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5],
                                                    disabled: true
                                                },
                                                label: '示例单选框(Disabled):'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'select',
                                                select: {
                                                    items: [1, 2, 3, 4, 5],
                                                    multiple: true,
                                                    disabled: true
                                                },
                                                label: '示例多选框(Disabled):'
                                            }} />
                                        ), (
                                            <Input {...{
                                                type: 'textarea',
                                                textarea: {
                                                    _includeAttribute: {
                                                        row: 3
                                                    },
                                                    readOnly: true
                                                },
                                                label: '示例文本框(readOnly)'
                                            }} />
                                        )
                                    ],
                                    foot: {
                                        type: 'actions',
                                        value: (
                                            <Fragment>
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Fragment>
                                        )
                                    }
                                }}/>

                            </Portlet>
                            <Portlet {...{
                                header: '组件尺寸'
                            }} >
                                <Form {...{
                                    items: [(
                                        <Input {...{
                                            type: 'custom',
                                            custom: (
                                                <Alert {...{
                                                    message: (
                                                        <Text>使用 <Code>size</Code> 属性可以设置组件的显示尺寸，支持的参数有 <Code>lg</Code> ， <Code>sm</Code> 或 <Code>normal</Code> 。</Text>),
                                                    _includeClass: 'm-alert--default'
                                                }}/>
                                            )
                                        }} />
                                    ), (
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Large Text',
                                                solid: false,
                                                value: ''
                                            },
                                            size: 'lg',
                                            label: 'Large Text',

                                        }} />
                                    ), (
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Default Text',
                                                solid: false,
                                                value: ''
                                            },
                                            label: 'Default Text',

                                        }} />
                                    ), (
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Small Text',
                                                solid: false,
                                                value: ''
                                            },
                                            size: 'sm',
                                            label: 'Small Text',

                                        }} />
                                    ), (
                                        <Input {...{
                                            type: 'select',
                                            select: {
                                                items: [1, 2, 3, 4, 5]
                                            },
                                            size: 'lg',
                                            label: 'Large Select'
                                        }} />
                                    ), (
                                        <Input {...{
                                            type: 'select',
                                            select: {
                                                items: [1, 2, 3, 4, 5]
                                            },
                                            label: 'Default Select'
                                        }} />
                                    ), (
                                        <Input {...{
                                            type: 'select',
                                            select: {
                                                items: [1, 2, 3, 4, 5]
                                            },
                                            size: 'sm',
                                            label: 'Small Select'
                                        }} />
                                    )
                                    ],
                                    foot: {
                                        type: 'actions',
                                        value: (
                                            <Fragment>
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Fragment>
                                        )
                                    }
                                }}/>

                            </Portlet>
                            <Portlet {...{
                                header: '特殊组件'
                            }} >

                                <Form {...{
                                    items: [(
                                        <Input {...{
                                            type: 'custom',
                                            custom: (
                                                <Alert {...{
                                                    message: (
                                                        <Text>我们针对部分组件也进行了个性化的定制，例如文件选择组件 <Code>file</Code>。</Text>),
                                                    _includeClass: 'm-alert--default'
                                                }}/>
                                            )
                                        }} />
                                    ), (
                                        <Input {...{
                                            type: 'file',
                                            file: {
                                                placeholder: '选择文件'
                                            }
                                        }} />
                                    )
                                    ]
                                }}/>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}