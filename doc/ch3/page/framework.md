# 框架组件
> 框架组件并非功能性组件，框架组件提供了一种作者认为的较好的页面实现方案，主要包括页面的模块化，各个模块之间的衔接等。`Omega` 的官方示例采用框架组件搭建，开发者也可以自行设计框架搭建方案。

####框架组件列表：

* [页面组件](./page.md)
* [头部组件](./header.md)
* [容器组件](./container.md)
* [侧边栏组件](./aside.md)
* [菜单组件](./menu.md)
* [包装组件](./wrapper.md)
* [页脚组件](./footer.md)

#### 通常框架结构：
```html
<body>
    <Page>
        <Header {...headerConfig} />
        <Container>
            <Aside {...asideConfig} />
            <Wrapper>其他组件</Wrapper>
        </Container>
        <Footer {...footerConfig}/>
    </Page>
</body>
```

#### 通常框架结示意图
