# 段落组件
> 段落组件用来封装文本内容、图片或其他行间 DOM 元素或行间组件。

### 作用
`Paragraph` 组件为块级组件，表示一个片段分块。该组件内部可嵌套行间 DOM 元素或行间组件。`Paragraph` 组件不产生任何 `class` 修饰符、`style` 样式和自定义属性。
 
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
