/**
 *
 * @Demo: SweetAlerts
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
    Table,
    Text,
    Code,
    Button,
    SubHeader
} from 'omega';
import Swal from 'sweetalert2';
import 'animate.css/animate.css';
export default class SweetAlerts extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Swal.setDefaults({
            width: 400,
            padding: '2.5rem',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success m-btn m-btn--custom',
            confirmButtonColor: null,
            cancelButtonClass: 'btn btn-secondary m-btn m-btn--custom',
            cancelButtonColor: null
        });
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: 'SweetAlert 2',
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
                                    value: 'SweetAlert 2',
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
                        <Div _includeClass="col-xl-12">
                            <Portlet {...{
                                header: '示例'
                            }} >
                                <Table {...{
                                    data: [
                                        ['基础消息框',
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'info',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal('干的漂亮！');
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }],
                                        ['带标题的消息框',
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'focus',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal('消息提醒', '干的漂亮');
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }],
                                        [{
                                            value: (<Text>带状态的消息框（
                                                <Code>warning</Code>，<Code>error</Code>，<Code>success</Code>，<Code>info</Code>
                                                和 <Code>question</Code> ）</Text>)
                                        },
                                            {
                                                value: (
                                                    <Fragment>
                                                        <Button {...{
                                                            btnColor: 'warning',
                                                            isCustom: true,
                                                            value: 'Warning',
                                                            _handle: {
                                                                onClick: () => {
                                                                    Swal('消息提醒', '干得漂亮', 'warning');
                                                                }
                                                            },
                                                            _includeStyle: {
                                                                marginRight: '5px'
                                                            }
                                                        }}/>
                                                        <Button {...{
                                                            btnColor: 'success',
                                                            isCustom: true,
                                                            value: 'Success',
                                                            _handle: {
                                                                onClick: () => {
                                                                    Swal('消息提醒', '干得漂亮', 'success');
                                                                }
                                                            },
                                                            _includeStyle: {
                                                                marginRight: '5px'
                                                            }
                                                        }}/>
                                                        <Button {...{
                                                            btnColor: 'danger',
                                                            isCustom: true,
                                                            value: 'Error',
                                                            _handle: {
                                                                onClick: () => {
                                                                    Swal('消息提醒', '干得漂亮', 'error');
                                                                }
                                                            },
                                                            _includeStyle: {
                                                                marginRight: '5px'
                                                            }
                                                        }}/>
                                                        <Button {...{
                                                            btnColor: 'info',
                                                            isCustom: true,
                                                            value: 'Info',
                                                            _handle: {
                                                                onClick: () => {
                                                                    Swal('消息提醒', '干得漂亮', 'info');
                                                                }
                                                            },
                                                            _includeStyle: {
                                                                marginRight: '5px'
                                                            }
                                                        }}/>
                                                        <Button {...{
                                                            btnColor: 'metal',
                                                            isCustom: true,
                                                            value: 'Question',
                                                            _handle: {
                                                                onClick: () => {
                                                                    Swal('消息提醒', '干得漂亮', 'question');
                                                                }
                                                            },
                                                            _includeStyle: {
                                                                marginRight: '5px'
                                                            }
                                                        }}/>
                                                    </Fragment>
                                                )
                                            }],
                                        ['自定义按钮样式',
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'success',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal({
                                                                    title: "干得漂亮!",
                                                                    text: "你点击了按钮!",
                                                                    type: "success",
                                                                    confirmButtonText: "点击确认!",
                                                                    confirmButtonClass: "btn btn-focus m-btn m-btn--pill m-btn--air"
                                                                });
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }],
                                        ['带Icon的按钮',
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'danger',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal({
                                                                    title: "干得漂亮!",
                                                                    text: "你点击了按钮!",
                                                                    icon: "success",

                                                                    confirmButtonText: "<span><i class='la la-headphones'></i><span>确认操作!</span></span>",
                                                                    confirmButtonClass: "btn btn-danger m-btn m-btn--pill m-btn--air m-btn--icon",

                                                                    showCancelButton: true,
                                                                    cancelButtonText: "<span><i class='la la-thumbs-down'></i><span>不，谢谢</span></span>",
                                                                    cancelButtonClass: "btn btn-secondary m-btn m-btn--pill m-btn--icon"
                                                                });
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }],
                                        ['自定义展示位置，并定时关闭',
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'success',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal({
                                                                    position: 'top-right',
                                                                    type: 'success',
                                                                    title: 'Your work has been saved',
                                                                    showConfirmButton: false,
                                                                    timer: 1500
                                                                });
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }],
                                        [{
                                            value: (<Text>
                                                使用 <Code>animate.css</Code> 动画可以实现有特效的消息框
                                            </Text>)
                                        },
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'focus',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal({
                                                                    title: 'jQuery HTML example',
                                                                    html: $('<div>')
                                                                        .addClass('some-class')
                                                                        .text('jQuery is everywhere.'),
                                                                    animation: false,
                                                                    customClass: 'animated tada'
                                                                });
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }],
                                        [{
                                            value: (<Text>
                                                使用 <Code>then</Code> 进行链式回调
                                            </Text>)
                                        },
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'info',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal({
                                                                    title: '是否确认？',
                                                                    text: "您无法回滚该项操作!",
                                                                    type: 'warning',
                                                                    showCancelButton: true,
                                                                    confirmButtonText: '确认删除!'
                                                                }).then(function (result) {
                                                                    if (result.value) {
                                                                        Swal(
                                                                            '已删除!',
                                                                            '您的文件已经被删除！',
                                                                            'success'
                                                                        )
                                                                    } else if (result.dismiss === 'cancel') {
                                                                        Swal(
                                                                            '已取消',
                                                                            '您已取消了该操作！',
                                                                            'error'
                                                                        )
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }],
                                        ['自定义图片展示',
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'success',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal({
                                                                    text: '这是一个自定义图片',
                                                                    imageUrl: 'http://cdn.qulongjun.cn/omega/logo_blue.png',
                                                                    imageWidth: 300,
                                                                    imageHeight: 200,
                                                                    imageAlt: 'Custom image',
                                                                    animation: false
                                                                });
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }],
                                        ['自动定时器',
                                            {
                                                value: (
                                                    <Button {...{
                                                        btnColor: 'metal',
                                                        isCustom: true,
                                                        value: 'Show me',
                                                        _handle: {
                                                            onClick: () => {
                                                                Swal({
                                                                    title: '自动关闭消息!',
                                                                    text: '我将在5秒之后关闭',
                                                                    timer: 5000,
                                                                    onOpen: function () {
                                                                        Swal.showLoading()
                                                                    }
                                                                }).then(function (result) {
                                                                    if (result.dismiss === 'timer') {
                                                                        console.log('我被定时器关闭了')
                                                                    }
                                                                })
                                                            }
                                                        }
                                                    }}/>
                                                )
                                            }]
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