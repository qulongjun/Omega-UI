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
import Typography from './_base/_typography';
import Tables from './_base/_tables';
import Progress from './_base/_progress';
import Modal from './_base/_modal';

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
                        <Wrapper>
                            <Route path='/' exact component={Menu}/>
                            <Route path='/stateColor' component={StateColor}/>
                            <Route path='/typography' component={Typography}/>
                            <Route path='/tables' component={Tables}/>
                            <Route path='/progress' component={Progress}/>
                            <Route path='/modal' component={Modal}/>
                        </Wrapper>
                    </Container>
                </Page>
            </Fragment>
        );
    }
}

export default App;