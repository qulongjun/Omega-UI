## ButtonGroup组件

### 1. 使用方式

你可通过直接引入<ButtonDropdown />组件的方式使用，或通过引入<ButtonDropdownDemo />与Demo保持一致。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonDropdown from 'components/general/buttonDropdown/_buttonDropdown'

//这是ButtonGroup组件的配置参数
const customConfig = {...}

function App() {
  return (
    <ButtonDropdown {...customConfig} />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

或者

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonDropdownDemo from 'demo/_buttonDropdown';

//这是用来覆盖默认ButtonGroup的配置参数
const customConfig = {...}

function App() {
  return (
    <ButtonDropdownDemo {...customConfig}/>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### 2. 配置参数

Button组件的公共配置参数如下

| 参数名 | 类型 | 默认值 | 是否必须 | 说明 |
| ---- |---- | ---- | ---- | ----- |
| split | boolean | false | 否 | 设置是否分割Button（单独下拉Button）
| direction | string | 'down' | 否 | 设置列表的展示方向，支持'up', 'down', 'left', 'right'
| button | object | object | 否 | 设置顶层Button的样式,参考 [Button Component](./_button.md)
| toggle | object | object | 否 | 设置分割Button的样式,参考 [Button Component](./_button.md)
| items | array | [object] | 否 | 设置下拉列表Button


### 3. Items

Items接受由对象组成的数组，对象的配置参数如下

| 参数名 | 类型 | 默认值 | 是否必须 | 说明 |
| ---- |---- | ---- | ---- | ----- |
| type | string | 'item' | 否 | 设置列表的类型，支持'item', 'divider'
| value | string | '' | 否 | 设置列表显示文本
| icon | string | '' | 否 | 设置显示的icon,参考 [Icon Component](./_icon.md)
| toggle | object | object | 否 | 设置分割Button的样式,参考 [Button Component](./_button.md)
| handle | object | null | 否 | 设置列表事件处理，参考 [Button Component](./_button.md)


