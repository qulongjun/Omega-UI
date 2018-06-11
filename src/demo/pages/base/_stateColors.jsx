/**
 *
 * @Demo: StateColor
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 16:18
 *
 */

import React, {Component, Fragment} from 'react';

import Text from 'components/framework/text/_text';
import Paragraph from 'components/framework/paragraph/_paragraph';
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
                                        describe={
                                            <Text>Metronic comes with a number of state colors that can be applied to
                                                the most of elements and components. It reuses Bootstrap's original 6
                                                states:</Text>
                                        }>

                                    </Section>
                                    <Section
                                        describe={
                                            <Text> And also adds its own <Code>brand</Code> and <Code>metal</Code>
                                                states:</Text>
                                        }>

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
                                            <Paragraph state="success">Success state text</Paragraph>
                                            <Paragraph state="warning">Warning state text</Paragraph>
                                            <Paragraph state="info">Info state text</Paragraph>
                                            <Paragraph state="danger">Danger state text</Paragraph>
                                            <Paragraph state="primary">Primary state text</Paragraph>
                                            <Paragraph state="focus">Focus state text</Paragraph>
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
                                            <Alert {...{
                                                title: 'Well done! ',
                                                message: 'You successfully read this important alert message.',
                                                bgColor: 'success',
                                            }}/>
                                            <Alert {...{
                                                title: 'Well done! ',
                                                message: 'You successfully read this important alert message.',
                                                bgColor: 'primary',
                                            }}/>
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