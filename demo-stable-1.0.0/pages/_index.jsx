/**
 *
 * @Demo: Menu
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 17:36
 *
 */


import React, {Component, Fragment} from 'react';
import {Content, Div, Portlet, Section, Separator, Link, Space, SubHeader} from 'omega-t';
import logo_blue from 'src/assets/logo_blue.png';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '欢迎使用'
                    }
                }}/>
                <Content>
                    <Div _includeClass='row'>
                        <Div _includeClass="col-xl-12">
                            <Portlet {...{
                                header: {title: 'Get Started'},
                                _includeClass: 'text-center'
                            }}>
                                <img src={logo_blue} width='20%'/>
                                <Separator/>
                                <Section title="欢迎访问 Omega 官方示例！" describe="在开发中遇到困难，以下内容可能会对您有帮助：">
                                    <Link {...{
                                        href: 'https://doc.react-china.org/'
                                    }}>React 中文官网</Link>
                                    <Space/>
                                    <Link {...{
                                        href: 'http://omega-doc.qulongjun.com/'
                                    }}>技术文档</Link>
                                    <Space/>
                                    <Link {...{
                                        href: 'https://github.com/qulongjun/Omega-UI/issues'
                                    }}>Github Issue</Link>
                                </Section>
                                <Space size="50"/>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}

export default Index;