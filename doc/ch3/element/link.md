# 链接组件
> 该组件可以在页面中插入一个带样式的超级链接，点击该组件可以产生跳转效果。

### 作用
链接组件为行间组件，表示一个超级链接。内部可嵌套纯文本内容、行间 DOM 元素或行间组件。链接组件底层由 DOM 元素的 `A` 标签实现，可以在页面中插入一个可供跳转的超级链接。
 
### 语法
##### 私有参数

| 参数名 | 类型 | 默认值 | 描述
| :-: | :-: | :-: | :- |
| `color` | string | 空 | 链接的颜色，该属性与 `_fontColor` 互斥，支持的参数有`brand`、 `metal`、`light`、 `accent`、` focus`、 `primary`、 `success`、 `info`、` warning` 和 `danger`。 |
| `href` | string | # | 链接指向的URL。 |
| `download` | string | 空 | 规定被下载的超链接目标。 |
| `target` | string | _blank | 规定在何处打开链接文档。 支持的参数有 `_blank` 、`_parent`、`_self`、`_top`|

##### 调用方式
``` jsx
import Link from '@Link';
<Link  {...{
        href:'https://o-ui.cn',
        color:'primary'
    }}>
    This is a link.
</Link>
```

##### 渲染结果
``` html
<a href='https://o-ui.cn' class='m-link m--link-primary'>
    This is a link.
</a>
```
> `m-link` 修饰符为默认链接修饰符。

#####  实现效果
![](./_image/2018-06-21-08-53-28.jpg)
> 下划线仅在鼠标 hover 状态触发时显示。

### 最佳实践
通过 [公共配置](../ch1/public.md)，组件可以实现丰富的样式和逻辑的控制。