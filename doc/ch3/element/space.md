# 分隔组件
> 特殊组件，该组件可以在页面空间内形成一个占满外部容器全宽的空白空间。

### 作用
分隔组件为块级组件，是一种特殊组件。它一般用来对两个独立的 DOM 元素块或组件进行空间上的分隔，会占满外部容器的全部宽度并显示为默认背景色。

### 语法
##### 私有参数

| 参数名 | 类型 | 默认值 | 描述
| :-: | :-: | :-: | :- |
| `size` | int/string | 10 | 设置分隔区域高度，支持的参数有`5`、`10`、`15`、`20`、`25`、`30`、`35`、`40`、`45`和`50`（数字类型），若预设的参数值不满足业务需求，也可以自定义尺寸，例如 `80`、`30%` |

##### 调用方式
``` jsx
import Space from '@Space';
<Space size={15}/>
<Space size=‘40%’/>
```
##### 渲染结果
``` html
<!--设置的size在预设中，则使用class修饰符控制。-->
<div class='m--space-15'></div>
<!--设置的size不在预设中，则使用style样式控制。-->
<div style='display:block;height:0;margin-bottom:40%'></div>
```
##### 实现效果
显示一段高度为size，且长度占满整个容器的空白区域。

### 最佳实践
通过 [公共配置](../ch1/public.md)，组件可以实现丰富的样式和逻辑的控制。
>不建议在分隔组件上设置自定义样式，根据 `HTML` 语义化要求，建议使用容器组件。