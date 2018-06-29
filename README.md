<p align="center">
  <a href="javascript:;" rel="noopener" target="_blank"><img width="70%" src="https://cdn.qulongjun.cn/omega/logo_blue.png" alt="Omega-UI logo"></a></p>
</p>

------
<div align="center">
![](https://img.shields.io/badge/node-%3E%3D9.0.0-brightgreen.svg) ![](https://img.shields.io/badge/npm-%3E%3D6.1.0-brightgreen.svg) ![](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg)  ![](https://img.shields.io/badge/stable-v0.0.9-blue.svg) ![](https://img.shields.io/badge/beta-v0.1.0-blue.svg) ![](https://img.shields.io/npm/l/express.svg)
</div>
<div align="center">一套基于 [React](http://facebook.github.io/react/) 实现的企业级响应式UI设计实现</div>

## 功能特性
* 现代化的企业视觉UI设计，符合现代审美标准。
* 从基础元素到复杂交互，多元化的组件复用技术。
* 完全开源，丰富的使用示例，完善的技术文档。

## 快速构建

推荐使用快速构建工具  `Omegaui-CLI`  搭建项目，只需依次执行：
 ![](./doc/_assets/build-tools.png)
> 构建工具具体用法清参考[构建工具说明](https://github.com/qulongjun/Omega-cli)。

## 使用示例

以下是一个组件的简单使用示例, **你只需做如下事情**:
![](./doc/_assets/demo_code.png)

>  我们提供了丰富的组件供开发者使用，可以访问[官方示例](https://omega-qulongjun.com)查看具体实现。

## 调试与部署

快速构建工具已经集成了一键式调试与部署指令，只需执行如下命令即可实现开发环境下的调试和生产环境的部署：
![](./doc/_assets/dev.png)

>  开发环境下启动调试后，在浏览器中打开 [http://127.0.0.1:8080](http://127.0.0.1:8080) 查看效果。

## 开发计划
- [x] 页面布局
- [x] 基础组件
- [x] 按钮组件
- [ ] 表单组件
- [ ] 图表组件
- [ ] 地图组件
- [] 高级表格组件
- [] 工具类组件

## 发布周期
本项目更新参照 [Semantic Versioning 2.0.0](https://semver.org/) 标准进行：
- 修订版本：每周一个修订版本，用于进行日常的 Bug 修复（非紧急）。
- 次版本号：每一到两天发布一个次版本，次版本更新会向下兼容当前主版本。
- 主版本号：重大迭代工作，非周期性更新，与历史主版本不兼容。

## 获取帮助
如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助：
* 我们提供了详细的[说明文档](https://omega-doc.qulongjun.com)，大部分问题都可以在文档中得以解决。
* 利用强大的 [Issue](https://github.com/qulongjun/Omega-UI/issues) 功能，您可以直接进行提问，我们会随时关注并解答，同时我们也鼓励资深用户通过 Issue 给新人提供帮助。

## 参与项目
我们很期待您能参与进来一起开发 :)，但我们希望您能遵守相关约定：
* 我们有一份[行为准则](./CODE_OF_CONDUCT.md)，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保您能明白哪些是可以做的，哪些是不可以做的。
* 基于我们的发布周期，我们每周都会从 `master` 分支切一个 `feature` 分支出来，命名规则一般为 `feature-版本号` ，例如 `feature-1.3.0` 即将要发布的 `1.3.0` 版本。如果您进行了一个Bug修复，请直接 Pull Request 到 `master` 分支，如果进行的是新功能开发，请 Pull Request 到当前的 `feature` 分支。
* 如果您有较好的创意，我们也欢迎您通过[Issue](https://github.com/qulongjun/Omega-UI/issues) 直接告诉我们。

## License

本项目基于 [MIT license](./LICENSE.md) 开源。