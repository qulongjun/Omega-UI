import React, {Component} from 'react'

import Button from 'components/general/button/_button'
import './_demo.scss'


const demoConfig = {
    element: 'button',//指定DOM元素的类型[button,a,input]
    type: 'button',//指定按钮的类型[button,submit,reset]
    color: 'info',//指定按钮的颜色，支持btnState+btnOutlineState
    gradient: null,//指定按钮的变色， Object对象，从from到to，支持btnState+btnOutlineState
    isWide: false,//是否变宽显示 true/false
    border: 'normal',//是否双倍边框显示（仅针对btnOutlineState有效）
    isBlock: false,//是否按照块元素显示 true/false
    size: 'normal',//按钮的尺寸，['normal', 'lg', 'sm']
    value: 'Demo Button',//按钮显示文本
    state: 'normal',//当前按钮状态['normal', 'active', 'disabled']
    btnStyle: 'normal',//当前按钮样式['normal', 'square', 'pill', 'air']
    labelState: '',//当前文本颜色（仅针对secondary有效）
    textStyle: {//指定按钮文本显示样式
        custom: true,
        bolder: true,
        uppercase: true
    },
    handle: { //事件处理Handle
        click: () => {
            alert('Click me!');
        }
    },
    customStyle: {} //自定义样式
};

class ButtonDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        Object.assign(demoConfig, this.props);
        return (
            <div className="m-demo">
                <div className="m-demo__preview  m-demo__preview--btn">
                    <Button {...demoConfig}/>
                </div>
            </div>
        );
    }
}

export default ButtonDemo;