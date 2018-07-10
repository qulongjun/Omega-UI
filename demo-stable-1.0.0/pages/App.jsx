import React, {Component, Fragment} from 'react';

import logo_blue from '../../src/assets/logo_blue.png';
import '../../lib-stable-1.0.0/index';
import MenuJSON from '../routes/_menu.json';

import Page from '../../lib-stable-1.0.0/components/Page/index.osx';
import Container from '../../lib-stable-1.0.0/components/Container/index.osx'
import Header from '../../lib-stable-1.0.0/components/Header/index.osx'
import Aside from '../../lib-stable-1.0.0/components/Aside/index.osx';
import Wrapper from '../../lib-stable-1.0.0/components/Wrapper/index.osx';
import Footer from '../../lib-stable-1.0.0/components/Footer/index.osx';

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