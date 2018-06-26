/**
 *
 * @Demo: Menu
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 17:36
 *
 */


import React, {Component, Fragment} from 'react';
import {Content, Div, Portlet, Section, Demo, Button} from 'omega';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {history} = _props;
        return (
            <Fragment>
                <Content>
                    <Div _includeClass="row">
                        <Div _includeClass="col-xl-6">
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
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Typography');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Tables',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Tables');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Progress',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Progress');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Modal',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Modal');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Alerts',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Alerts');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Popover',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Popover');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Tooltip',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Tooltip');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'BlockUI',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/BlockUI');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Scrollable',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Scrollable');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Spinner',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Spinner');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Navs',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Navs');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'SweetAlert2',
                                            btnColor: 'outline-brand',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/SweetAlert2');
                                                }
                                            }
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section title="Tabs">
                                    <Demo>
                                        <Button {...{
                                            value: 'Bootstrap Tabs',
                                            btnColor: 'outline-info',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/base/tabs/BootstrapTabs');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Line Tabs',
                                            btnColor: 'outline-info',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/base/tabs/LineTabs');
                                                }
                                            }
                                        }}/>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: 'Button'
                            }} >
                                <Section title="Button Base">
                                    <Demo>
                                        <Button {...{
                                            value: 'Default',
                                            btnColor: 'outline-focus',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/default');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Square',
                                            btnColor: 'outline-focus',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/square');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Pill',
                                            btnColor: 'outline-focus',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/pill');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Air',
                                            btnColor: 'outline-focus',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/air');
                                                }
                                            }
                                        }}/>

                                    </Demo>
                                </Section>
                                <Section title="Button Group">
                                    <Demo>
                                        <Button {...{
                                            value: 'Button Group',
                                            btnColor: 'outline-success',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/group');
                                                }
                                            }
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section title="Button Dropdown">
                                    <Demo>
                                        <Button {...{
                                            value: 'Button Dropdown',
                                            btnColor: 'outline-danger',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/dropdown');
                                                }
                                            }
                                        }}/>
                                    </Demo>
                                </Section>
                                <Section title="Button Icon">
                                    <Demo>
                                        <Button {...{
                                            value: 'Lineawesome Icon',
                                            btnColor: 'outline-warning',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/LineawesomeIcon');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Fontawesome Icon',
                                            btnColor: 'outline-warning',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/FontawesomeIcon');
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: 'Flaticon Icon',
                                            btnColor: 'outline-warning',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/button/FlaticonIcon');
                                                }
                                            }
                                        }}/>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}

export default Menu;