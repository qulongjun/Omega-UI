import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom'

import logo_blue from '../../src/assets/logo_blue.png';
import MenuJSON from '../routes/_menu.json';

import {Page, Container, Header, Aside, Wrapper, Footer} from 'omega-t';
import Index from './_index';
import Grids from './grid/_grid';
import Stack from './grid/_stack';
// import StateColor from './base/_stateColor';
import Typography from './base/_typography';
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
                        <Route path='/' exact component={Index}/>
                        <Route path='/grid' component={Grids}/>
                        <Route path='/stack' component={Stack}/>
                        {/*<Route path='/stateColor' component={StateColor}/>*/}
                        <Route path='/typography' component={Typography}/>
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