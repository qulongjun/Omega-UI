# 图标组件
> 行间组件，显示一个图标文字。

### 语法
##### 私有参数

| 参数名 | 类型 | 默认值 | 描述
| :-: | :-: | :-: | :- |
| iconName | string | 空 | 设置图标名称，参考下文。|

##### 调用方式
``` jsx
import Icon from '@Icon';
<Icon {...{
   iconName:'fa fa-warning'
}}/>
```
##### 渲染结果
``` html
<i class='fa fa-warning'></i>
```

##### 实现效果
![](./_image/2018-06-22-13-20-53.jpg)

### 最佳实践
通过 [公共配置](../ch1/public.md)，组件可以实现丰富的样式和逻辑的控制。

##### 复合组件
通常情况下，图标往往和其他组件配合使用，作为行间组件，它可以被嵌入任何组件中，成为子组件。

**代码示例：**
```jsx
<Text>
    <Icon  className='fa fa-warning'/>
    Warning
</Text>
```

**实现效果：**
![](./_image/2018-06-22-13-24-42.jpg)

