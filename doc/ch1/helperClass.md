# 辅助类
> 辅助类（Helper Classes）是一类由 UI 预留，封装了一些简单样式实现，方便用户开发使用的 `class` 修饰符。

### 作用
辅助类可用于所有的 DOM 元素和组件（使用 [_includeClass](../ch2/_includeClass.md) 属性，并作用于组件最外层容器。）。辅助类等效于直接在 DOM 元素上设置行间样式，且可以被其他 `class` 修饰符或同名 `style` 样式覆盖。
 
### 类型
|  修饰符名        | 描述  |
| :---:  | :---- |
| `m-margin-[size]`、`m-margin-top-[size]`、`m-margin-bottom-[size]`、`m-margin-left-[size]`、`m-margin-right-[size]`     | 设置 DOM 元素或组件的外边距属性，支持的参数有5、10、15、20、25、30、35、40、45和50（数字类型）。例如 `m-margin-50` 。 |
| `m-padding-[size]`、`m-padding-top-[size]`、`m-padding-bottom-[size]`、`m-padding-left-[size]`、`m-padding-right-[size]`     | 设置 DOM 元素或组件的内边距属性，支持的参数有5、10、15、20、25、30、35、40、45和50（数字类型）。例如 `m-padding-50` 。 |
| `m--full-height`        |    设置该 DOM 元素或组件 `100%` 占满整个外部容器的宽度。    |  
| `m--valign-top`、`m--valign-middle`、`m--valign-bottom`        |    设置该 DOM 元素或组件的垂直对齐方式，支持顶部对齐，居中对齐和底部对齐 。    |  
| `m--space-[size]`        |    空间分隔类，该辅助类可以用来分隔两个 DOM 元素或组件，支持的参数有5、10，15，20，30和40。例如 `m-padding-10` 。  | 
| `m--block-center`        |    设置该 DOM 元素或组件以Block方式显示，并居中对齐。  | 
| `m--align-[alignment]`        |    设置该 DOM 元素或组件的对齐方式，支持的参数有`left`、`right`、`center`。例如 `m--align-right`。  |  
| `m--pull-[direction]`        |    设置该 DOM 元素或组件 `Pull` 方式，支持的参数有`left`、`right`、`center`。例如 `m--pull-right`。  | 
| `m--img-rounded`        |    设置图片以圆角边框显示。  | 
| `m--block-inline`        |    设置该 DOM 元素或组件以 `inline` 的方式显示。  | 
| `m--hide`        |    设置该 DOM 元素或组件隐藏。  |
| `m--clearfix`        |    清除浮动样式。  |
| `m--marginless`        |    移除该 DOM 元素或组件的外边距设置。  |
| `m--img-centered`        |    设置图片以居中方式显示。  |
|`m--font-transform-u`、`m--font-transform-l`、`m--font-transform-c`、`m--font-transform-i` | 设置英文字母的展示方式，支持的参数有大写（upper）、小写（lower）、首字母大写（capitalize）、默认（inherit） 。 |
| `m--font-[weight]`        |    设置文字的加粗程度，支持的参数有`thin`、`normal`、`bold`、`bolder`、`boldest`、`boldest2`。例如 `m--font-bold`。  | 
| `m--[type]-font-size-[size]`        |    设置文字的尺寸，`type` 支持的参数有 `text` 和 `icon` ，`size` 支持的参数有`lg1`、`lg2`、`lg3`、`lg4`、`lg5`、`normal`、`sm1`、`sm2`、`sm3`、`sm4`、`sm5`。例如 `m--font-normal`、`m--icon-lg2`。  | 
|`m--font-[color] `、`m--font-inverse-[color]`、`m--bg-[color]`、`m--bg-fill-[color]`  | 设置字体颜色或 DOM 元素和组件的背景颜色，支持的参数有`brand`、 `metal`、`light`、 `accent`、` focus`、 `primary`、 `success`、 `info`、` warning` 和 `danger`。 |
|`m--visible-[breakpoint]`、`m--visible-[breakpoint]-inline-block`、`m--hidden-[breakpoint]`     |   设置响应式 DOM 元素或组件的展示或隐藏临界点，支持的参数有`sm`、`md`、`lg`、`xxl`、`xxxl`。例如 `m--visible-sm` 。  |