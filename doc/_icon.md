## Icon组件

### 1. 使用方式

你可通过直接引入<Icon />组件的方式使用，或通过引入<IconDemo />与Demo保持一致。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'components/general/icon/_icon'

//这是Icon组件的配置参数
const customConfig = {...}

function App() {
  return (
    <Icon {...customConfig} />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

或者

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import IconDemo from 'demo/_icon';

//这是用来覆盖默认Icon的配置参数
const customConfig = {...}

function App() {
  return (
    <IconDemo {...customConfig}/>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### 2. 配置参数

Icon组件的公共配置参数如下

| 参数名 | 类型 | 默认值 | 是否必须 | 说明 |
| ---- |---- | ---- | ---- | ----- |
| iconName | string | '' | 是 | 设置icon的内容
| style | object | null | 否 | 设置Icon的显示样式，样式属性以驼峰显示
| value | string | 'icon' | 否 | 设置文字内容（仅IconDemo）
| textStyle | object | null | 否 | 设置文字的显示样式（仅IconDemo），样式属性以驼峰显示

### 3. Icon来源

| Icon类型 | 来源 | 示例 |
| ---- |---- | ---- |
| Font Awasome | [Font Awasome](http://fontawesome.dashgame.com/) | 'fa-heart'
| Line Awasome | [Line Awasome](https://icons8.com/line-awesome) | 'la-adjust'
| Flaticon | [Flaticon](https://www.flaticon.com) | 'flaticon-alarm'
| Socicon | [Socicon](http://www.socicon.com) | 'socicon-facebook' 


