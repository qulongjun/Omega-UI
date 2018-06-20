# _bgColor
> 为组件设置背景颜色，指定该组件最外层 DOM 元素应用该背景颜色。组件内所有非覆盖容器均会显示该颜色。

### 作用
该属性是 `_includeClass` 和 `_includeStyle` 的语法糖。用来统一设置组件最外层容器默认背景颜色。若存在其他背景颜色设置，该属性可能会被覆盖。

### 语法
##### 调用方式
``` html
<!--_bgColor 支持传入一个状态字符串作为参数。-->
<Div _bgColor='success'>This is a div. </Div>
<!--_bgColor 同时支持直接传入一个色值作为参数。-->
<Div _bgColor='rgb(255,255,255)'>This is a div.</Div>
```

##### 渲染结果
``` html
<!--若传入状态字符串，则该状态会直接添加至 class 标签中。-->
<div class='m--font-success'>
    This is a div.
</div>
<!--若传入色值，则会以 color 属性添加至 style 标签中。-->
<div style="color:'rgb(255,255,255)'">
    This is a div.
</div>
```