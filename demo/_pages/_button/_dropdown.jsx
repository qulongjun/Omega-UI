/**
 *
 * @Demo: Dropdown
 * @User: Longjun.Qu
 * @Date: 2018-06-26
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
    Paragraph
} from 'omega';
export default class Dropdown extends Component {
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
                                header: '基础设置'
                            }} >
                                <Section title="基础示例" describe="简单下拉示例">
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Dropdown button',
                                                btnColor: 'secondary'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Dropdown button',
                                                btnColor: 'success'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Dropdown button',
                                                btnColor: 'brand'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section describe="下拉图标按钮示例">
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Lineawesome',
                                                btnColor: 'accent'
                                            },
                                            items: [{
                                                value: 'Action',
                                                icon: {
                                                    show: true,
                                                    name: 'la la-bell'
                                                }
                                            }, {
                                                value: 'Another action',
                                                icon: {
                                                    show: true,
                                                    name: 'la la-cloud-upload'
                                                }
                                            }, {
                                                value: 'Something else here',
                                                icon: {
                                                    show: true,
                                                    name: 'la la-cog'
                                                }
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Fontawesome',
                                                btnColor: 'brand'
                                            },
                                            items: [{
                                                value: 'Action',
                                                icon: {
                                                    show: true,
                                                    name: 'fa fa-bell'
                                                }
                                            }, {
                                                value: 'Another action',
                                                icon: {
                                                    show: true,
                                                    name: 'fa fa-cloud-upload'
                                                }
                                            }, {
                                                value: 'Something else here',
                                                icon: {
                                                    show: true,
                                                    name: 'fa fa-cog'
                                                }
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Flaticon',
                                                btnColor: 'primary'
                                            },
                                            items: [{
                                                value: 'Action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-share'
                                                }
                                            }, {
                                                value: 'Another action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-settings'
                                                }
                                            }, {
                                                value: 'Something else here',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-graphic-2'
                                                }
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section describe="带状态的下拉按钮">
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Primary',
                                                btnColor: 'primary'
                                            },
                                            items: [{
                                                value: 'Action',
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Secondary',
                                                btnColor: 'secondary'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Success',
                                                btnColor: 'success'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Info',
                                                btnColor: 'info'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Danger',
                                                btnColor: 'danger'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section describe="单独的下拉按钮">
                                    <Demo btnStyle={false}>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Primary',
                                                btnColor: 'primary'
                                            },
                                            toggle: {
                                                show: true,
                                                btnColor: 'primary',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                }
                                            },
                                            items: [{
                                                value: 'Action',
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Secondary',
                                                btnColor: 'secondary'
                                            },
                                            toggle: {
                                                show: true,
                                                btnColor: 'secondary',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                }
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Success',
                                                btnColor: 'success'
                                            },
                                            toggle: {
                                                show: true,
                                                btnColor: 'success',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                }
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Info',
                                                btnColor: 'info'
                                            },
                                            toggle: {
                                                show: true,
                                                btnColor: 'info',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                }
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Danger',
                                                btnColor: 'danger'
                                            },
                                            toggle: {
                                                show: true,
                                                btnColor: 'danger',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                }
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section describe={<Text>可以通过设置 <Code>size</Code> 属性对按钮组的尺寸进行通知</Text>}
                                         title="按钮组尺寸">
                                    <Demo btnStyle={false}>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Large Button',
                                                btnColor: 'secondary',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                },
                                                size: 'lg'
                                            },
                                            items: [{
                                                value: 'Action',
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Large Button',
                                                btnColor: 'secondary',
                                                size: 'lg'
                                            },
                                            toggle: {
                                                show: true,
                                                btnColor: 'secondary',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                },
                                                size: 'lg'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Small Button',
                                                btnColor: 'secondary',
                                                size: 'sm',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                }
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Small Button',
                                                btnColor: 'secondary',
                                                size: 'sm'
                                            },
                                            toggle: {
                                                show: true,
                                                btnColor: 'secondary',
                                                _includeStyle: {
                                                    marginRight: '5px'
                                                },
                                                size: 'sm'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section describe={<Text>可以通过设置 <Code>direction</Code> 属性为
                                    <Code>up、down、left、right</Code>
                                    控制按钮组打开的方向。</Text>}
                                         title="方向">
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Button Right',
                                                btnColor: 'primary',
                                            },
                                            direction: 'right',
                                            items: [{
                                                value: 'Action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-share'
                                                }
                                            }, {
                                                value: 'Another action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-settings'
                                                }
                                            }, {
                                                value: 'Something else here',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-graphic-2'
                                                }
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Button Up',
                                                btnColor: 'primary',
                                            },
                                            direction: 'up',
                                            items: [{
                                                value: 'Action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-share'
                                                }
                                            }, {
                                                value: 'Another action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-settings'
                                                }
                                            }, {
                                                value: 'Something else here',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-graphic-2'
                                                }
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Button Left',
                                                btnColor: 'success',
                                            },
                                            direction: 'left',
                                            items: [{
                                                value: 'Action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-share'
                                                }
                                            }, {
                                                value: 'Another action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-settings'
                                                }
                                            }, {
                                                value: 'Something else here',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-graphic-2'
                                                }
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Button Down',
                                                btnColor: 'warning',
                                            },
                                            direction: 'down',
                                            items: [{
                                                value: 'Action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-share'
                                                }
                                            }, {
                                                value: 'Another action',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-settings'
                                                }
                                            }, {
                                                value: 'Something else here',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-graphic-2'
                                                }
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '高级设置'
                            }} >
                                <Section title="按钮元素"
                                         describe={<Text>可以通过设置 <Code>label</Code> 属性，控制按钮的生成元素。</Text>}>
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Label Link',
                                                btnColor: 'success'
                                            },
                                            items: [{
                                                value: 'Action',
                                                label: 'a'
                                            }, {
                                                value: 'Another action',
                                                label: 'a'
                                            }, {
                                                value: 'Something else here',
                                                label: 'a'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Label Button',
                                                btnColor: 'brand'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={<Text>可以通过设置 <Code>itemAlign</Code> 属性，或单独为某个选项设置 <Code>align</Code> 为
                                        <Code>left、right、center</Code>
                                        控制按钮组打开的方向。</Text>}
                                    title="文字对齐">
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Dropdown Left',
                                                btnColor: 'secondary'
                                            },
                                            itemAlign: 'left',
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Dropdown Right',
                                                btnColor: 'secondary'
                                            },
                                            itemAlign: 'right',
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Dropdown Center',
                                                btnColor: 'secondary'
                                            },
                                            itemAlign: 'center',
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                        <Separator dashed={true}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Single Right',
                                                btnColor: 'secondary'
                                            },
                                            itemAlign: 'left',
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action',
                                                align: 'right'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Single Center',
                                                btnColor: 'secondary'
                                            },
                                            itemAlign: 'right',
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action',
                                                align: 'center'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Single Left',
                                                btnColor: 'secondary'
                                            },
                                            itemAlign: 'center',
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action',
                                                align: 'left'
                                            }, {
                                                value: 'Something else here'
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={<Text>可以通过在 <Code>item</Code> 属性中传入 <Code>type</Code> 属性为
                                        <Code>header</Code> 的对象增加选项标题。</Text>}
                                    title="分组标题">
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Button Header',
                                                btnColor: 'info'
                                            },
                                            items: [{
                                                type: 'header',
                                                value: 'DropDown header'
                                            }, {
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={<Text>可以通过在 <Code>item</Code> 属性中传入 <Code>type</Code> 属性为
                                        <Code>divider</Code> 的对象增加分隔线。</Text>}
                                    title="分隔线">
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Button Header',
                                                btnColor: 'primary'
                                            },
                                            items: [{
                                                value: 'Action'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section
                                    describe={<Text>可以通过给 <Code>item</Code> 属性中传入 <Code>btnState</Code> 属性为
                                        <Code>active，disabled</Code> 设置按钮状态。</Text>}
                                    title="分隔线">
                                    <Demo>
                                        <ButtonDropdown {...{
                                            button: {
                                                value: 'Button Header',
                                                btnColor: 'primary'
                                            },
                                            items: [{
                                                value: 'Action',
                                                btnState: 'active'
                                            }, {
                                                value: 'Another action'
                                            }, {
                                                value: 'Something else here',
                                                btnState: 'disabled'
                                            }, {
                                                type: 'divider'
                                            }, {
                                                value: 'Separated link'
                                            }]
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