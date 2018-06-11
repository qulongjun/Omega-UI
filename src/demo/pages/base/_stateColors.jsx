/**
 *
 * @Demo: StateColor
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 16:18
 *
 */

import React, {Component, Fragment} from 'react';


import SubHeader from '../_subheader';
import Wrapper from 'components/framework/wrapper/_wrapper';
import Content from 'components/framework/content/_content';
import Section from 'components/framework/section/_section';

import Space from 'components/base/space/_space'
import Badge from 'components/base/badge/_badge'
import ProgressBar from 'components/base/progressBar/_progressBar'
import Code from 'components/base/code/_code'
import Alert from 'components/base/alert/_alert'

import Portle from 'components/general/portle/_portle';
import Button from 'components/general/button/_button'


import Demo from "../_demo";

import 'sass/_demo.scss';
import '../../_demo.scss';


const rightPortle = {};

class StateColor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {} = _props;
        return (
            <Fragment>
                <Wrapper>
                    <SubHeader title="State Colors"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'State Colors'
                                    }
                                }} >
                                    <Section
                                        describe="Metronic comes with a number of state colors that can be applied to the most of elements and components. It reuses Bootstrap's original 6 states:">

                                    </Section>

                                </Portle>
                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'State Examples'
                                    }
                                }} >
                                    <Section
                                        {...{describe: 'Apply state classes to any typography element:'}}>
                                        <Demo>
                                            <p className="m--font-success">Success state text </p>
                                            <p className="m--font-warning">Warning state text </p>
                                            <p className="m--font-info">Info state text </p>
                                            <p className="m--font-danger">Danger state text </p>
                                            <p className="m--font-primary">Primary state text </p>
                                            <p className="m--font-focus">Focus state text </p>
                                        </Demo>
                                    </Section>
                                    <Section
                                        {...{describe: 'Apply state classes to any component:'}}>
                                        <Demo>
                                            <Button color="primary" value="Primary"/>
                                            <Button color="success" value="Success"/>
                                            <Button color="warning" value="Warning"/>
                                            <Button color="danger" value="Danger"/>
                                            <Button color="metal" value="Metal"/>
                                            <Button color="brand" value="Brand"/>
                                            <Button color="focus" value="Focus"/>
                                        </Demo>
                                        <Demo>
                                            <Alert {...{
                                                title:'Hello World! ',
                                                message:'This is default alert message box style.',
                                                closeBtn:true,
                                                bgColor:'success',
                                                styles:['outline','outline-2x','air'],
                                                icon:'la la-warning',
                                                iconStyle:'solid'
                                            }}/>
                                            <Badge color="brand">new</Badge>
                                            <Badge color="metal">pendding</Badge>
                                            <Badge color="primary">203</Badge>
                                            <Badge color="success">hot</Badge>
                                            <Badge color="info">fixed</Badge>
                                            <Badge color="warning">in process</Badge>
                                            <Badge color="danger">completed</Badge>
                                            <Badge color="focus">focus</Badge>
                                            <Badge color="accent">accent</Badge>
                                        </Demo>
                                        <Demo>
                                            <ProgressBar {...{
                                                items: [{
                                                    now: 25,
                                                    showValue: true
                                                }]
                                            }} />
                                            <Space/>
                                            <ProgressBar {...{
                                                items: [{
                                                    now: 80,
                                                    color: 'warning'
                                                }]
                                            }} />
                                            <Space/>
                                            <ProgressBar {...{
                                                items: [{
                                                    now: 50,
                                                    color: 'success'
                                                }]
                                            }} />
                                        </Demo>
                                    </Section>
                                </Portle>
                            </div>
                        </div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}
export default StateColor;