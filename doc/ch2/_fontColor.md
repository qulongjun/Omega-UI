# _fontColor
> 为组件设置字体颜色，指定该组件最外层 DOM 元素应用该字体颜色。组件内所有非覆盖字体均会显示该颜色。

### 作用
该属性是 `_includeClass` 和 `_includeStyle` 的语法糖。用来统一设置组件内部所有字体默认颜色。若子 DOM 元素或子组件存在字体颜色设置，该属性会被覆盖。

### 语法
##### 调用方式
``` jsx
//_fontColor 支持传入一个状态字符串作为参数。
<Text _fontColor='success'>This is a text. </Text>
//_fontColor 同时支持直接传入一个色值作为参数。
<Paragraph _fontColor='rgb(255,255,255)'>This is a paragraph.</Paragraph>
```

##### 渲染结果
``` html
<!--若传入状态字符串，则该状态会直接添加至 class 标签中。-->
<span class='m--font-success'>
    This is a text.
</span>
<!--若传入色值，则会以 color 属性添加至 style 标签中。-->
<p style="color:'rgb(255,255,255)'">
    This is a paragraph.
</p>
```