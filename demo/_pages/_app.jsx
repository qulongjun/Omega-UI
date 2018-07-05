/**
 *
 * @Demo: App
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 17:28
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Page,
    Container,
    Wrapper,
    Div,
    Portlet,
    Paragraph,
    Separator,
    Section,
    Link,
    Space,
    Header,
    Aside,
    Footer
} from 'omega';
import {Route, Switch} from 'react-router-dom'
import MenuJSON from './_menu.json';
import Menu from './_menu';
import Grids from './_grid/_grid';
import Stack from './_grid/_stack';
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
import Dropdowns from "./_base/_dropdown";
import BootstrapTabs from './_base/_tabs/_bootstrap';
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
import Inputs from './_form/control/_inputs';
import Options from './_form/control/_option';
import Group from './_form/control/_group';
import logo_blue from 'src/assets/logo_blue.png';

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
                            <Route path='/' exact component={Menu}/>
                            <Route path='/grid' component={Grids}/>
                            <Route path='/stack' component={Stack}/>
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
                            <Route path='/dropdown' component={Dropdowns}/>
                            <Route path='/tabs/bootstrap' component={BootstrapTabs}/>
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
                            <Route path='/form/control/input' component={Inputs}/>
                            <Route path='/form/control/option' component={Options}/>
                            <Route path='/form/control/group' component={Group}/>
                        </Wrapper>
                    </Container>
                    <Footer {...{
                        copyright: (
                            <Fragment>
                                2018 © Omega UI by <Link href="https://doc.react-china.org/"> React </Link> 。
                            </Fragment>
                        ),
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
            </Fragment>
        );
    }
}

export default App;