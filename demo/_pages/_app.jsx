/**
 *
 * @Demo: App
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 17:28
 *
 */


import React, {Component, Fragment} from 'react';
import {Page, Container, Wrapper, Div, Portlet, Paragraph, Separator, Section, Link, Space, Header, Aside} from 'omega';
import {Route, Switch} from 'react-router-dom'
import Menu from './_menu';
import Grids from './_grid/_grid';
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
                            menu: {
                                show: true,
                                autoScroll: true,
                                items: [
                                    {
                                        text: '访问文档',
                                        icon: {
                                            show: true,
                                            name: 'flaticon-line-graph'
                                        },
                                        badge: {
                                            show: true,
                                            bgColor: 'danger',
                                            value: 2
                                        },
                                        type: 'link',
                                        href: 'https://omega-doc.qulongjun.com'
                                    },
                                    {
                                        type: 'section',
                                        text: 'Components'
                                    },
                                    {
                                        text: 'Base',
                                        icon: {
                                            show: true,
                                            name: 'flaticon-layers'
                                        },
                                        child: [
                                            {
                                                text: '状态与颜色',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                },
                                                href: '/stateColor'
                                            }, {
                                                text: '排版',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                },
                                                href: '/typography'
                                            }, {
                                                text: '表格',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                },
                                                href: '/tables'
                                            }, {
                                                text: '进度条',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                },
                                                href: '/progress'
                                            }, {
                                                text: '模态框',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                },
                                                href: '/modal'
                                            }, {
                                                text: '消息提醒',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                },
                                                href: '/alerts'
                                            }, {
                                                text: '弹出层',
                                                bullet: {
                                                    show: true,
                                                    type: 'dot'
                                                },
                                                href: '/popover'
                                            }
                                        ],
                                        isExpand: true
                                    }
                                ]
                            }
                        }}/>
                        <Wrapper>
                            <Route path='/' exact component={Menu}/>
                            <Route path='/grid' component={Grids}/>
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
                        </Wrapper>
                    </Container>
                </Page>
            </Fragment>
        );
    }
}

export default App;