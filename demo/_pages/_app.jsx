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
import Alerts from './_base/_alert';
import Popover from './_base/_popover';
import Tooltips from "./_base/_tooltip";
import BlockUIs from "./_base/_blockui";
import Scrollable from "./_base/_scrollable";
import Spinners from "./_base/_spinner";
import Navs from "./_base/_navs";
// import BootstrapTabs from './_base/_tabs/_bootstrap';
import SweetAlert from './_base/_sweetAlerts';
import DefaultButton from "./_button/_default";
import PillButton from './_button/_pill';
import SquareButton from './_button/_square';
import AirButton from './_button/_air';
import ButtonGroup from './_button/_group';
import ButtonDropdown from './_button/_dropdown';
import LineAwesomeButton from './_button/_lineAwesome';
import FontAwesomeButton from './_button/_fontAwesome';
import FlaticonButton from './_button/_flaticon';
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
                            <Route path='/alerts' component={Alerts}/>
                            <Route path='/popover' component={Popover}/>
                            <Route path='/tooltip' component={Tooltips}/>
                            <Route path='/blockui' component={BlockUIs}/>
                            <Route path='/scrollable' component={Scrollable}/>
                            <Route path='/spinner' component={Spinners}/>
                            <Route path='/navs' component={Navs}/>
                            {/*<Route path='/tabs/bootstrap' component={BootstrapTabs}/>*/}
                            <Route path='/sweetAlert2' component={SweetAlert}/>
                            <Route path='/button/default' component={DefaultButton}/>
                            <Route path='/button/pill' component={PillButton}/>
                            <Route path='/button/square' component={SquareButton}/>
                            <Route path='/button/air' component={AirButton}/>
                            <Route path='/button/group' component={ButtonGroup}/>
                            <Route path='/button/dropdown' component={ButtonDropdown}/>
                            <Route path='/button/lineawesome' component={LineAwesomeButton}/>
                            <Route path='/button/fontawesome' component={FontAwesomeButton}/>
                            <Route path='/button/flaticon' component={FlaticonButton}/>
                        </Wrapper>
                    </Container>
                </Page>
            </Fragment>
        );
    }
}

export default App;