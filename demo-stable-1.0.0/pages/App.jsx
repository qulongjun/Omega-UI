import React, {Component, Fragment} from 'react';

import Page from '../../lib-stable-1.0.0/components/Page';
import Container from '../../lib-stable-1.0.0/components/Container'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        return (<Fragment>
            <Page>
                <Container>

                </Container>
            </Page>
        </Fragment>)
    }
}