# 引用组件
> 从第三方来源引用的一段文字、图片等内容，可以使用引用组件包含。

### 作用
引用组件为块状组件。通常作为一段第三方文字、图片或行间 DOM 元素的容器，它会以特殊的样式进行展示。

### 语法
##### 私有参数

| 参数名 | 类型 | 默认值 | 描述
| :-: | :-: | :-: | :- |
| `align` | string | left | 指定引用来源的对齐方式，可选的参数有`left`、`right`、`center`、`justify`。 |
| `quote` | string | 空 | 指定引用来源，通常指创作者，例如文章作者 |
| `source` | string | 空 | 指定引用来源，通常指资源，例如书籍名称 |

##### 调用方式
``` jsx
import Blockquote from '@Blockquote';
<Blockquote {...{
    align:'left',
    quote:'加缪',
    source:'《局外人》'
}>
    一个人只要学会了回忆，就再不会孤独，哪怕只在世上生活一日，你也能毫无困难地凭回忆在囚牢中独处百年。
</Blockquote>
```

##### 渲染结果
``` html
<blockquote class='blockquote text-left'>
    一个人只要学会了回忆，就再不会孤独，哪怕只在世上生活一日，你也能毫无困难地凭回忆在囚牢中独处百年。
    <footer className="blockquote-footer">
        - 加缪 <cite title='《局外人》'>《局外人》</cite>
    </footer>
</blockquote>
```

> 渲染结果中 `blockquote`、`text-left` 和 `blockquote-footer` 为自动生成的系统级 `class` 修饰符。
 
#####  实现效果

![](./_image/2018-06-21-13-17-22.jpg)

### 最佳实践
通过 [公共配置](../ch1/public.md)，组件可以实现丰富的样式和逻辑的控制。

##### 对齐方式
引用组件支持多种对齐方式。用户可以根据业务需求自行调整。

**代码示例：**
```js
{
    align:'right'
}
```
**实现效果：**

右对齐示例：
![](./_image/2018-06-21-13-21-23.jpg)

居中对齐示例:
![](./_image/2018-06-21-13-22-05.jpg)



