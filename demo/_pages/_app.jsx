/**
 *
 * @Demo: App
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 17:28
 *
 */


import React, {Component, Fragment} from 'react';
import {Page, Container, Wrapper, Div, Portlet, Paragraph, Separator, Section, Link, Space} from 'omega';
import {Route, Switch} from 'react-router-dom'
import Menu from './_menu';
import StateColor from './_base/_stateColor';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {} = _props;
        return (
            <Fragment>
                <Page>
                    <Container>

                    </Container>
                </Page>
            </Fragment>
        );
    }
}

export default App;