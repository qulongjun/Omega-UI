## Button组件

### 1. 使用方式

你可通过直接引入<Button />组件的方式使用，或通过引入<ButtonDemo />与Demo保持一致。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'components/general/button/_button';

//这是Button组件的配置参数
const customConfig = {...}

function App() {
  return (
    <Button {...customConfig} />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

或者

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonDemo from 'demo/_button';

//这是用来覆盖默认Button的配置参数
const customConfig = {...}

function App() {
  return (
    <ButtonDemo {...customConfig}/>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### 2. 配置参数

Button组件的公共配置参数如下

| 参数名 | 类型 | 默认值 | 是否必须 | 说明 |
| ---- |---- | ---- | ---- | ----- |
| element | string | 'button' | 否 | 设置DOM元素的类型，支持'button', 'input', 'a'
| type | string | 'button' | 否 | 设置按钮的类型，支持'button', 'submit', 'reset'
| color | string | 'primary' | 否 | 设置按钮的样式，支持'brand', 'metal', 'light', 'accent', 'focus', 'primary', 'success', 'info', 'warning', 'danger', 'secondary', 'outline-brand', 'outline-metal', 'outline-light', 'outline-accent', 'outline-focus', 'outline-primary', 'outline-success', 'outline-info', 'outline-warning', 'outline-danger'
| gradient | object | null | 否 | 设置按钮渐变方式
| gradient.from | string | '' | 否 | 设置按钮的起始颜色，支持'brand', 'metal', 'light', 'accent', 'focus', 'primary', 'success', 'info', 'warning', 'danger'
| gradient.to | string | '' | 否 | 设置按钮的终止颜色，支持'brand', 'metal', 'light', 'accent', 'focus', 'primary', 'success', 'info', 'warning', 'danger'
| isWide | boolean | false | 否 | 设置按钮是否加宽
| isBlock | boolean | false | 否 | 设置按钮是否显示为Block（宽度占满整行）
| border | string | 'normal' | 否 | 设置按钮边框，仅在color属性设置为outline-*时支持，支持'normal', 'double'
| size | string | 'normal' | 否 | 设置按钮字体大小，支持'normal', 'lg', 'sm'
| value | string | 'Button'' | 否 | 设置按钮字体大小，支持'normal', 'lg', 'sm'
| state | string | 'normal' | 否 | 设置按钮当前状态，支持'normal', 'active', 'disabled'
| labelState | string | 'primary' | 否 | 设置按钮文字状态，支持''brand', 'metal', 'light', 'accent', 'focus', 'primary', 'success', 'info', 'warning', 'danger'
| btnStyle | string | 'normal' | 否 | 设置按钮样式，支持'normal', 'square', 'pill', 'air'
| textStyle | object | null | 否 | 设置按钮文字样式
| textStyle.custom | boolean | null | 否 | 设置按钮文字样式，以Poppins字体显示，字体为1Rem，字体加粗400
| textStyle.bolder | boolean | null | 否 | 设置按钮文字是否加粗
| textStyle.uppercase | boolean | null | 否 | 设置按钮文字是否以大写显示
| handle | object | null | 否 | 设置事件处理Handle
| handle.click | function | null | 否 | 设置点击事件Handle
| customStyle | object | null | 否 | 设置自定义样式控制





