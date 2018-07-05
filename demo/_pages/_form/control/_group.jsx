/**
 *
 * @Demo: Group
 * @User: Longjun.Qu
 * @Date: 2018-07-04
 * @Time: 09:37
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
    FormGroup,
    CheckboxRadio,
    SubHeader,
    Input,
    InsertPend
} from 'omega';

export default class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '组合表单',
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
                                    value: '表单组件',
                                    href: 'javascript:;'
                                }
                            }, {
                                text: {
                                    value: '表单控制',
                                    href: 'javascript:;'
                                }
                            }, {
                                text: {
                                    value: '组合表单',
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
                    <Div _includeClass="row">
                        <Div _includeClass="col-xl-6">
                            <Portlet header="基础示例">
                                <Section describe="可以在表单控制组件前后追加图标或文字。">
                                    <Demo>
                                        <Form>
                                            <FormGroup label="左侧追加">
                                                <InsertPend {...{
                                                    element: 'prepend',
                                                    items: ['@']
                                                }}/>
                                                <Input {...{
                                                    input: {
                                                        placeholder: 'Email'
                                                    }
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="右侧追加">
                                                <Input {...{
                                                    input: {
                                                        placeholder: 'Email'
                                                    }
                                                }}/>
                                                <InsertPend {...{
                                                    element: 'append',
                                                    items: ['@example.com']
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="多个追加">
                                                <InsertPend {...{
                                                    element: 'prepend',
                                                    items: ['$', '0.00']
                                                }}/>
                                                <Input {...{
                                                    input: {
                                                        placeholder: 'Payment'
                                                    }
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="同时追加">
                                                <InsertPend {...{
                                                    element: 'prepend',
                                                    items: ['@']
                                                }}/>
                                                <Input {...{
                                                    input: {
                                                        placeholder: 'Payment'
                                                    }
                                                }}/>
                                                <InsertPend {...{
                                                    element: 'append',
                                                    items: ['@example.com']
                                                }}/>
                                            </FormGroup>
                                        </Form>
                                    </Demo>
                                </Section>
                                <Section describe={<Text>设置 <Code>display</Code> 属性可以实现横向显示。</Text>}>
                                    <Demo>
                                        <Form>
                                            <FormGroup label="默认复选框" display={[3, 9]}>
                                                <CheckboxRadio {...{
                                                    element: 'checkbox',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Default"
                                                            },
                                                            {
                                                                name: "Disabled",
                                                                disabled: true
                                                            }, {
                                                                name: "Checked",
                                                                checked: true
                                                            }
                                                        ]
                                                    }
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="带状态复选框" display={[3, 9]}>
                                                <CheckboxRadio {...{
                                                    element: 'checkbox',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Success Checkbox",
                                                                checkedColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand Checkbox",
                                                                checkedColor: 'brand'
                                                            }, {
                                                                name: "Primary Checkbox",
                                                                checkedColor: 'primary'
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="横向复选框" display={[3, 9]}>
                                                <CheckboxRadio {...{
                                                    element: 'checkbox',
                                                    config: {
                                                        type: 'inline',
                                                        items: [
                                                            {
                                                                name: "Success Checkbox",
                                                                checkedColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand Checkbox",
                                                                checkedColor: 'brand'
                                                            }, {
                                                                name: "Primary Checkbox",
                                                                checkedColor: 'primary'
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                        </Form>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet header="自定义单选框">
                                <Section describe="在表单中使用自定义单选框">
                                    <Demo>
                                        <Form>
                                            <FormGroup label="默认单选框">
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Default"
                                                            },
                                                            {
                                                                name: "Disabled",
                                                                disabled: true
                                                            }, {
                                                                name: "Checked",
                                                                checked: true
                                                            }
                                                        ]
                                                    }
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="带状态单选框">
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Success Checkbox",
                                                                stateColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand Checkbox",
                                                                stateColor: 'brand'
                                                            }, {
                                                                name: "Primary Checkbox",
                                                                stateColor: 'primary'
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="选中带状态单选框">
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Success Checkbox",
                                                                checkedColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand Checkbox",
                                                                checkedColor: 'brand'
                                                            }, {
                                                                name: "Primary Checkbox",
                                                                checkedColor: 'primary'
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="横向单选框">
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        type: 'inline',
                                                        items: [
                                                            {
                                                                name: "Success Checkbox",
                                                                checkedColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand Checkbox",
                                                                checkedColor: 'brand'
                                                            }, {
                                                                name: "Primary Checkbox",
                                                                checkedColor: 'primary'
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="反色的单选框">
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    solid: true,
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Default"
                                                            },
                                                            {
                                                                name: "Checked",
                                                                checked: true
                                                            },
                                                            {
                                                                name: "Disabled",
                                                                disabled: true
                                                            },
                                                            {
                                                                name: "Success State",
                                                                stateColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand",
                                                                stateColor: 'brand'
                                                            },
                                                            {
                                                                name: "Success State",
                                                                checkedColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand",
                                                                checkedColor: 'brand'
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="加粗的单选框">
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Default",
                                                                bold: true
                                                            },
                                                            {
                                                                name: "Checked",
                                                                bold: true
                                                            },
                                                            {
                                                                name: "Disabled",
                                                                bold: true
                                                            },
                                                            {
                                                                name: "Success State",
                                                                checkedColor: 'success',
                                                                bold: true
                                                            },
                                                            {
                                                                name: "Brand",
                                                                checkedColor: 'brand',
                                                                bold: true
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="选中加粗的单选框">
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Default",
                                                                checkedBold: true
                                                            },
                                                            {
                                                                name: "Checked",
                                                                checkedBold: true
                                                            },
                                                            {
                                                                name: "Disabled",
                                                                checkedBold: true
                                                            },
                                                            {
                                                                name: "Success State",
                                                                checkedColor: 'success',
                                                                checkedBold: true
                                                            },
                                                            {
                                                                name: "Brand",
                                                                checkedColor: 'brand',
                                                                checkedBold: true
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                        </Form>
                                    </Demo>
                                </Section>
                                <Section describe={<Text>设置 <Code>display</Code> 属性可以实现横向显示。</Text>}>
                                    <Demo>
                                        <Form>
                                            <FormGroup label="默认单选框" display={[3, 9]}>
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Default"
                                                            },
                                                            {
                                                                name: "Disabled",
                                                                disabled: true
                                                            }, {
                                                                name: "Checked",
                                                                checked: true
                                                            }
                                                        ]
                                                    }
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="带状态单选框" display={[3, 9]}>
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        items: [
                                                            {
                                                                name: "Success Checkbox",
                                                                checkedColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand Checkbox",
                                                                checkedColor: 'brand'
                                                            }, {
                                                                name: "Primary Checkbox",
                                                                checkedColor: 'primary'
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                            <FormGroup label="横向单选框" display={[3, 9]}>
                                                <CheckboxRadio {...{
                                                    element: 'radio',
                                                    config: {
                                                        type: 'inline',
                                                        items: [
                                                            {
                                                                name: "Success Checkbox",
                                                                checkedColor: 'success'
                                                            },
                                                            {
                                                                name: "Brand Checkbox",
                                                                checkedColor: 'brand'
                                                            }, {
                                                                name: "Primary Checkbox",
                                                                checkedColor: 'primary'
                                                            }
                                                        ]
                                                    },
                                                    helper: 'Some help text goes here'
                                                }}/>
                                            </FormGroup>
                                        </Form>
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