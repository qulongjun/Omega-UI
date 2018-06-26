# _includeAttribute
> 为组件追加自定义 DOM 属性，指定该组件最外层 DOM 元素增加指定的自定义属性。

### 作用
该属性可以为某个组件增加一个或多个自定义属性，通常情况下，该自定义属性会直接作用于组件的最外层容器中，若组件为复合类型组件，则同时支持在子组件上设置`_includeAttribute` 属性。
 
### 语法
##### 调用方式
``` jsx
//_includeAttribute 支持传入一个对象作为参数。
<Text _includeAttribute={{
    'data-title':'This is a title',
    'role':'tooltip',
    'id':'container'
}}>This is a text. </Text>
```

##### 渲染结果
``` html
<span id='container' data-title='This is a title' role='tooltip'>
    This is a text.
</span>
```
