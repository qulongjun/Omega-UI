## ButtonGroup组件

### 1. 使用方式

你可通过直接引入<ButtonGroup />组件的方式使用，或通过引入<ButtonGroupDemo />与Demo保持一致。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from 'components/general/buttonGroup/_buttonGroup'

//这是ButtonGroup组件的配置参数
const customConfig = {...}

function App() {
  return (
    <ButtonGroup {...customConfig} />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

或者

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonGroupDemo from 'demo/_buttonGroup';

//这是用来覆盖默认ButtonGroup的配置参数
const customConfig = {...}

function App() {
  return (
    <ButtonGroupDemo {...customConfig}/>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### 2. 配置参数

Button组件的公共配置参数如下

| 参数名 | 类型 | 默认值 | 是否必须 | 说明 |
| ---- |---- | ---- | ---- | ----- |
| btns | array | array | 是 | 设置Group中Button参数，参考 [Button Component](./_button.md)
| onlyIcon | boolean | false | 否 | 设置是否仅显示Icon
| groupStyle | string | 'normal' | 否 | 设置Group的类型，支持'normal', 'square', 'pill', 'air'
| size | string | 'normal' | 否 | 设置Group的尺寸，支持'normal', 'lg', 'sm'
| vertical | boolean | false | 否 | 设置以竖排的形式展示Button





