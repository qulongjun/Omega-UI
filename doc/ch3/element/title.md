# 标题组件
> 该组件可以在页面中插入一个带样式的文本标题，可以控制标题的显示级别。

### 作用
`Title` 组件为块级组件，表示一个标题。内部可嵌套纯文本内容、行间 DOM 元素或组件。`Title` 共可设置六个等级，分别对应 DOM 元素中的 `h1` ~ `h6` 。
 
### 语法
##### 私有参数

| 参数名 | 类型 | 默认值 | 描述
| :-: | :-: | :-: | :- |
| `level` | number | 1 | 标识标题等级，可选的参数由1到6，分别对应 DOM 元素中 `h1` 到 `h6`。 |

##### 调用方式
``` jsx
import Title from '@Title';
<Title level={1}>
    This is a h1 title.
</Title>
```

##### 渲染结果
``` html
<h1>
    This is a text.
</h1>
```
#####  默认样式

![](./_image/2018-06-21-08-28-09.jpg)

### 最佳实践
Omega 预留了部分 `class` 修饰符对样式进行了定制，满足更多的业务需求。
##### 辅助类
`Title` 组件支持公共配置，因此可以通过 _includeClass 和 _includeStyle 等参数实现对标题的定制，可以通过设置 [辅助类](../../ch1/helperClass.md) 实现不同样式的标题。

![](./_image/2018-06-21-08-27-35.jpg)

> 通过 辅助类的 m--font-[state] 设置了状态颜色。

##### Display类型
这是一种字体更大，更吸引人的标题类型，主要实现内容展示效果。

| 修饰符名 |  描述
| :-: | :- |
| `display-[size]` | 标识标题展示等级，可选的 `size` 参数由1到5，例如 `display-1`。 |

![](./_image/2018-06-21-08-07-18.jpg)

##### 其他
`Title` 组件支持与其他行间 DOM 元素或行间组件进行整合，实现更加丰富的效果，以下为与 `small` 元素整合，实现主副标题的简单示例。
```jsx
import Title from '@Title';
<Title>
    这是主标题
    <small class='text-muted'>这是副标题</small>
</Title>
```

![](./_image/2018-06-21-08-16-32.jpg)
