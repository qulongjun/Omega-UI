# 快速上手
Omega 致力于为程序员提供愉悦的开发体验。
> 在开始 Omega 之旅之前，您需要有一定的前端基础，包括且不限于 React 入门和 Ecmascript 2015。本说明默认您已经具备了一定的 HTML 、 CSS 和 Javascript相关知识，并已经了解了 React 的开发方式。

### 第一个本地实例
在实际项目开发中，一般我们使用 `Webpack` 进行 `JSX` 的代码构建、代理管理、资源打包和部署等服务，Omega 提供了一套基于 `NPM` + `Webpack` 的开发模式，以下为简单步骤。
**下载 Omega UI项目**

我们推荐使用 `npm` 的方式进行开发，不仅可以在开发环境调试，也可以便捷的在生产环境打包和部署，享受整个 `npm` 的生态链。
```bash
$ npm install omega-ui
```
>如果网络环境太差，推荐使用 cnpm 。

**安装依赖环境**

通常情况下，您通过 npm 命令下载的项目是不包含依赖关系的，您可以通过以下命令进行依赖安装。
```bash
$ cd omega-ui
$ npm install
```
>如果网络环境太差，推荐使用 cnpm 。

**使用组件**

当您安装完依赖项，开发环境就已经搭建完毕，下面试着进行一个组件开发。
打开位于 `src` 目录下的 `App.jsx` ，键入如下代码：
```js
import React,{Component} from 'react';
import Text from '@Text';
class App extends Component {
    render() {
        return (
            <Text>Hello World!</Text>
        );
    }
}
export default App;
```
**开发调试**

在命令行中使用以下命令开启调试功能，并在浏览器中打开 http://localhost:8080 查看效果。
```bash
$ npm run dev
```

**构建与部署**

在命令行中使用以下命令进行生产环境的打包工作。
```bash
$ npm run build`
```
打包之后会在项目根目录构建一个 `dist` 文件夹，您可以自行部署至生产环境中。

> 以上环节仅是一个开发示例，您可以根据自己业务需求，自行设置相关流程和规范。

### 修改组件
由于业务需求的复杂，预设的组件无法完全满足实际业务需求，开发人员可以根据自己实际情况，对项目中的组件进行自定义或扩展操作。
欢迎进行试用和贡献。