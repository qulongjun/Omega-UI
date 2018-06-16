/**
 *
 * @Demo: Dashboard
 * @User: Longjun.Qu
 * @Date: 2018-06-13
 * @Time: 10:15
 *
 */


import React, {Component, Fragment} from 'react';

import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';

import Portlet from 'components/_portlet/Portlet';
import Button from "components/_button/Button";

import Demo from "components/_framework/Demo";

import 'sass/_demo.scss';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {history} = _props;
        return (
            <Fragment>
                <Wrapper>
                    {/*<SubHeader title="Dashboard"/>*/}
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portlet {...{
                                    header: 'Base'
                                }} >
                                    <Section title="Base">
                                        <Demo>
                                            <Button {...{
                                                value: 'State Color',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/StateColor');
                                                    }
                                                }

                                            }}/>
                                            <Button {...{
                                                value: 'Typography',
                                                btnColor: 'outline-focus',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Typography');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Tables',
                                                btnColor: 'outline-accent',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Tables');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Progress',
                                                btnColor: 'outline-success',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Progress');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Modal',
                                                btnColor: 'outline-metal',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Modal');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Alerts',
                                                btnColor: 'outline-primary',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Alerts');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Popover',
                                                btnColor: 'outline-warning',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Popover');
                                                    }
                                                }
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                            </div>
                            <div className="col-xl-6">
                                <Portlet {...{
                                    header: 'Buttons'
                                }} >
                                    <Section title="Button">
                                        <Demo>
                                            <Button {...{
                                                value: 'Default Style',
                                                btnColor: 'outline-danger',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/base/default');
                                                    }
                                                }
                                            }}/>

                                        </Demo>
                                    </Section>
                                </Portlet>
                            </div>
                        </div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default Dashboard;