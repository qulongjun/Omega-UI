import React, {Component, Fragment} from 'react';

import logo_blue from '../../src/assets/logo_blue.png';
import '../../lib-stable-1.0.0/index';
import MenuJSON from '../routes/_menu.json';

import Page from '../../lib-stable-1.0.0/components/Page/index.osx';
import Container from '../../lib-stable-1.0.0/components/Container/index.osx'
import Header from '../../lib-stable-1.0.0/components/Header/index.osx'
import Aside from '../../lib-stable-1.0.0/components/Aside/index.osx';

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
                </Container>
            </Page>
        </Fragment>)
    }
}