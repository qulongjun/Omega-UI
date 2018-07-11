import React, {Component, Fragment} from 'react';

import logo_blue from '../../src/assets/logo_blue.png';
import MenuJSON from '../routes/_menu.json';

// import 'omega-t/base';
// import Page from 'omega-t/components/Page/index.osx';
// import Container from 'omega-t/components/Container/index.osx'
// import Header from 'omega-t/components/Header/index.osx'
// import Aside from 'omega-t/components/Aside/index.osx';
// import Wrapper from 'omega-t/components/Wrapper/index.osx';
// import Footer from 'omega-t/components/Footer/index.osx';

import {Page,Container,Header,Aside,Wrapper,Footer} from 'omega-t';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        return (<Fragment>
            <Page>
                <Header {...{
                    brand: {
                        show: true,
                        skin: 'light',
                        logo: {
                            src: logo_blue,
                            _includeStyle: {
                                width: '120px'
                            }
                        },
                        href: 'https://github.com/qulongjun/Omega-UI'
                    }
                }}/>
                <Container>
                    <Aside {...{
                        skin: 'light',
                        menu: MenuJSON
                    }}/>
                    <Wrapper>

                    </Wrapper>
                </Container>
                <Footer {...{
                    nav: [
                        {
                            text: {
                                value: 'React 中文官网',
                                href: 'https://doc.react-china.org/'
                            }
                        }, {
                            text: {
                                value: '技术文档',
                                href: 'http://omega-doc.qulongjun.com/'
                            }
                        }, {
                            text: {
                                value: '官方示例',
                                href: 'http://omega.qulongjun.com/'
                            }
                        }, {
                            text: {
                                value: '快速构建',
                                href: 'https://github.com/qulongjun/Omega-cli'
                            }
                        }, {
                            text: {
                                value: 'Github',
                                href: 'https://github.com/qulongjun/Omega-UI'
                            }
                        }
                    ]
                }}/>
            </Page>
        </Fragment>)
    }
}