# _handle
> 为组件绑定事件触发的回调函数，指定该组件最外层 DOM 元素绑定回调函数。

### 作用

该属性可以为某个组件移除一个或多个 `class` 修饰符，如果组件存在该 `class` 修饰符，则直接移除该修饰符，若不存在，则不进行操作。通常情况下，该 `class` 修饰符会直接作用于组件的最外层容器中，若组件为复合类型组件，则同时支持在子组件上设置`_excludeClass` 属性。

### 模拟事件

`_handle` 并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式：在根节点 `document` 上为每种事件添加唯一的 `Listener` ，然后通过事件的 `target` 找到真实的触发元素。这样从触发元素到顶层节点之间的所有节点如果有绑定这个事件，都会触发对应的事件处理函数。这就是所谓的模拟事件系统。
 
### 语法

##### 调用方式

> 类似于 `Javascript` 语法， `_handle` 属性的键值采用驼峰命名方式，例如：点击事件 `onClick` ，鼠标进入事件 `onMouseEnter` 等。

``` jsx
//_handle 支持同时绑定多个事件的回调函数。
<Button _hanlde={{
    onClick:()=>{
         alert( 'Click it' );
    },
    onMouseEnter:()=>{
         alert( 'Enter it' );
    }
}}/>
```

> 无需关心移除事件绑定的时机，因为在对应的真实 DOM 节点移除时就自动解除了事件绑定。

###事件捕获
默认事件处理程序由冒泡阶段中的事件触发。 要为捕获阶段注册事件处理程序，请将 `Capture` 附加到事件名称中; 例如，您可以使用 `onClickCapture` 来处理捕获阶段中的点击事件，而不是使用 `onClick` 。

### 支持事件
#### 剪贴板事件 
- onCopy 
- onCut
- onPaste

#### 合成事件
- onCompositionEnd 
- onCompositionStart 
- onCompositionUpdate

#### 键盘事件
- onKeyDown
- onKeyPress
- onKeyUp

#### 焦点事件
- onFocus
- onBlur

#### 表单事件
- onChange
- onInput
- onSubmit

#### 鼠标事件
- onClick 
- onContextMenu 
- onDoubleClick 
- onDrag 
- onDragEnd 
- onDragEnter 
- onDragExit 
- onDragLeave 
- onDragOver 
- onDragStart 
- onDrop 
- onMouseDown 
- onMouseEnter 
- onMouseLeave
- onMouseMove 
- onMouseOut 
- onMouseOver 
- onMouseUp

#### 选择事件
- onSelect

#### 触摸事件
- onTouchCancel 
- onTouchEnd 
- onTouchMove 
- onTouchStart

#### UI 事件
- onScroll

#### 滚轮事件
- onWheel

#### 媒体事件
- onAbort 
- onCanPlay 
- onCanPlayThrough 
- onDurationChange 
- onEmptied 
- onEncrypted 
- onEnded onError 
- onLoadedData 
- onLoadedMetadata 
- onLoadStart 
- onPause 
- onPlay 
- onPlaying 
- onProgress 
- onRateChange 
- onSeeked 
- onSeeking 
- onStalled 
- onSuspend 
- onTimeUpdate
- onVolumeChange
- onWaiting

#### 图像事件
- onLoad
- onError

#### 动画事件
- onAnimationStart
- onAnimationEnd
- onAnimationIteration

#### 转换事件
- onTransitionEnd

#### 其他事件
- onToggle


