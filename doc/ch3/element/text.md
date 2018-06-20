# 文本组件
> 文本组件用来封装文本内容、图片或其他行间 DOM 元素，底层由 `span` 标签实现。

### 作用
`Text` 组件为行间组件，该组件可以作为文本内容、图片或其他行间 DOM 元素的容器。`Text` 组件不产生任何 `class` 修饰符、`style` 样式和自定义属性。
 
### 语法
##### 调用方式
``` js
import Text from '@Text';
<Text>
    This is a text.
</Text>
```
##### 渲染结果
``` html
<span>
    This is a text.
</span>
```

