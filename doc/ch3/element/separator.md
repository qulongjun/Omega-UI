# 分割线组件
> 特殊组件，该组件可以在页面空间内形成一条可见的分割线。

### 作用
分割线组件为块级组件，是一种特殊组件。它一般用来对两个独立的 DOM 元素块或组件进行空间上的分隔，并使用分割线进行分隔，会占满外部容器的全部宽度并显示为默认背景色。
>与分隔组件不同，分割线组件注重分隔样式，而分隔组件注重分隔高度尺寸。

### 语法
##### 私有参数

| 参数名 | 类型 | 默认值 | 描述
| :-: | :-: | :-: | :- |
| `size` | string | sm | 设置分割线粗细，支持的参数有`lg`、`xl`、`sm`、`fit` |
| `color` | string | 空 | 设置分割线颜色。|
| `dashed` | bool | false | 设置是否以虚线显示。|

##### 调用方式
``` jsx
import Separator from '@Separator';
<Separator {...{
    size:'sm',
    color:'success',
    dashed:true
}}/>
```
##### 渲染结果
``` html
<div class='m-separator m-separator--sm m-separator--success m-separator-dashed'>
</div>
```
##### 实现效果
显示一段高度为size，且长度占满整个容器的空白区域。
![](./_image/2018-06-21-14-42-00.jpg)
### 最佳实践
通过 [公共配置](../ch1/public.md)，组件可以实现丰富的样式和逻辑的控制。