# 菜单组件
>  为页面提供导航路由的组件，单页 Web 应用核心组件，支持 `NavLink` 路由功能。

### 语法
>  菜单组件目前处于 Beta 状态。

#####私有参数
| 参数名 | 类型 | 默认值 | 描述
| :-: | :-: | :-: | :- |
| skin  | string | light | 设置菜单的皮肤颜色，支持的参数有 `dark` 、`light`。 |
| items  | array | 空 | 设置菜单项，具体配置参数见下文。 |
| isChild  | bool | false | 设置当前菜单是否为子菜单。 |
| autoScroll  | bool | true | 设置展开或关闭子菜单时是否自动滚动。 |
| expandAll  | bool | false | 设置默认展开或关闭所有子菜单，该属性正处于 `Beta` 中。 |
| slideSpeed  | number | 200 | 设置展开或关闭子菜单速度，单位：毫秒。 |
| speed  | number | 1200 | 设置自动滚动的速度，单位：毫秒。 |
| autoScrollSpeed  | number | 1200 | 设置点击菜单后子菜单展开或关闭的速度，单位：毫秒。 |
| timeout  | number | 500 | 设置超时关闭的时间，单位：毫秒，该属性正处于 `Beta` 中。 |

##### `Items` 对象参数
| 参数名 | 类型 | 描述
| :-: | :-: | :- |
| type  | string  |  当前菜单项类型，支持的参数有 `section`（分段）、`separator`（分割线）、`route`（`NavLink` 链接）、`default`（默认链接） 。 |
| text  | string | 菜单项文本内容，仅 `type` 设置为 `route` 、`section` 或 `default` 时生效。。 |
| icon  | object | 菜单项图标显示，相关配置见下文，仅 `type` 设置为 `route`、`section` 或 `default` 时生效。 |
| badge  | object | 菜单项徽章显示，相关配置见下文，仅 `type` 设置为 `route`、`section` 或 `default` 时生效。  |
| bullet  | object | 菜单项列表显示前缀，相关配置见下文，仅 `type` 设置为 `route` 或 `default` 时生效。 |
| child  | array | 菜单项子项列表，配置同本组件，仅 `type` 设置为 `route` 或 `default` 时生效 。|
| isExpand  | bool | 当前菜单项是否默认展开所有子项，仅存在子项且  `type` 设置为 `route` 或 `default` 时生效。 |
| isActive  | bool | 当前菜单项是否默认选中，仅 `type` 设置为 `route` 或 `default` 时生效。 |
| href  | string | 当前菜单项跳转 URI，仅 `type` 设置为 `route` 或 `default` 时生效。 |

##### `icon` 对象参数
>  [图标组件](../base/icon.md)中所有的配置均对该参数生效。

| 参数名 | 类型 | 描述
| :-: | :-: | :- |
| show | bool | 设置菜单项是否显示图标 |

##### `budge` 对象参数
>  [徽章组件](../base/badge.md)中所有的配置均对该参数生效。

| 参数名 | 类型 | 描述
| :-: | :-: | :- |
| show | bool | 设置菜单项是否显示徽章 |

##### `bullet` 对象参数

| 参数名 | 类型 | 描述
| :-: | :-: | :- |
| show | bool | 设置菜单项是否显示列表前缀 |
| type | string | 设置前缀类型，支持的参数有 `dot` 、`line`。 |