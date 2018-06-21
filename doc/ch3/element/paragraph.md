# 段落组件
> 段落组件用来封装文本内容、图片或其他行间 DOM 元素或行间组件。

### 作用
`Paragraph` 组件为块级组件，表示一个片段分块。内部可嵌套行间 DOM 元素或行间组件。`Paragraph` 组件不产生任何 `class` 修饰符、`style` 样式和自定义属性。
 
### 语法
##### 调用方式
``` jsx
import Paragraph from '@Paragraph';
<Paragraph>
    This is a text.
</Paragraph>
```
##### 渲染结果
``` html
<p>
    This is a text.
</p>
```
##### 默认样式

![](./_image/2018-06-21-09-00-53.jpg)
###最佳实践
通常情况下，默认段落样式可以满足大部分的业务需求，若存在特殊业务需求，可以通过 [公共配置](../../ch2/public.md) 实现。
##### 导言
Omega 预留了一种针对文章导言的 `class` 修饰符。

| 修饰符名 | 描述
| :-: | :- |
| `lead`   | 标识段落以导言样式显示。 |

![](./_image/2018-06-21-09-05-20.jpg)
