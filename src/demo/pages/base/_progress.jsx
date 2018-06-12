/**
 *
 * @Demo: Progress
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 13:32
 *
 */


import React, {Component, Fragment} from 'react';

import SubHeader from '../_subheader';


import Text from 'components/framework/_text';
import Code from 'components/framework/_code'
import Wrapper from 'components/framework/_wrapper';
import Content from 'components/framework/_content';
import Section from 'components/framework/_section';
import Separator from 'components/framework/_separator'
import Space from "components/framework/_space";

import Portle from 'components/general/_portle';
import Progress from 'components/base/_progress';

import 'sass/_demo.scss';


class ProgressBar extends Component {
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
                    <SubHeader title="Progress"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Basic Progress Bars'
                                    }
                                }} >
                                    <Section
                                        describe={'Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.'}>
                                        <Progress {...{
                                            items: [{
                                                now: 0
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 25
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 50
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 100
                                            }]
                                        }}/>
                                    </Section>
                                </Portle>

                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Sizing'
                                    }
                                }} >
                                    <Section title="Sizing"
                                             describe={<Text>Use <Code>.m-progress--sm</Code> class to change progress
                                                 size to small:
                                             </Text>}>
                                        <Progress {...{
                                            size: 'sm',
                                            items: [{
                                                now: 25,
                                                color: 'primary'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'sm',
                                            items: [{
                                                now: 50,
                                                color: 'accent'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'sm',
                                            items: [{
                                                now: 75,
                                                color: 'warning'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'sm',
                                            items: [{
                                                now: 100,
                                                color: 'danger'
                                            }]
                                        }}/>
                                        <div className="m-separator m-separator--dashed"/>
                                    </Section>
                                    <Section title="Sizing"
                                             describe={<Text>Use <Code>.m-progress--lg</Code> class to change progress
                                                 size to large:
                                             </Text>}>
                                        <Progress {...{
                                            size: 'lg',
                                            items: [{
                                                now: 25,
                                                color: 'primary'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'lg',
                                            items: [{
                                                now: 50,
                                                color: 'accent'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'lg',
                                            items: [{
                                                now: 75,
                                                color: 'warning'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'lg',
                                            items: [{
                                                now: 100,
                                                color: 'danger'
                                            }]
                                        }}/>
                                        <Separator />
                                    </Section>
                                    <Section title="Custom Height"
                                             describe={<Text>Set a height value on the <Code>.progress-bar</Code> , so
                                                 if you change that value the outer <Code>.progress</Code> will
                                                 automatically resize accordingly.
                                             </Text>}>
                                        <Progress {...{
                                            height: '1px',
                                            items: [{
                                                now: 25,
                                                color: 'primary'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            height: '5px',
                                            items: [{
                                                now: 50,
                                                color: 'accent'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            height: '10px',
                                            items: [{
                                                now: 75,
                                                color: 'warning'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            height: '15px',
                                            items: [{
                                                now: 100,
                                                color: 'danger'
                                            }]
                                        }}/>
                                        <Separator />
                                    </Section>
                                </Portle>
                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Progress States'
                                    }
                                }} >
                                    <Section title="Backgrounds"
                                             describe={'Use state utility classes to change the appearance of individual progress bars.'}>
                                        <Progress {...{
                                            items: [{
                                                now: 25,
                                                color: 'success'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 50,
                                                color: 'info'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 75,
                                                color: 'warning'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 100,
                                                color: 'danger'
                                            }]
                                        }}/>
                                    </Section>
                                    <Section title="Multiple bars"
                                             describe={'Include multiple progress bars in a progress component if you need.'}>
                                        <Progress {...{
                                            items: [{
                                                now: 15
                                            }, {
                                                now: 30,
                                                color: 'success'
                                            }, {
                                                now: 20,
                                                color: 'info'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 35
                                            }, {
                                                now: 10,
                                                color: 'warning'
                                            }, {
                                                now: 40,
                                                color: 'danger'
                                            }]
                                        }}/>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Striped'
                                    }
                                }} >
                                    <Section
                                        describe={<Text>Add <Code>.progress-bar-striped</Code> to any <Code>.progress-bar</Code>
                                            to apply a stripe via CSS gradient over the progress bar’s background color.</Text>}>
                                        <Progress {...{
                                            items: [{
                                                now: 10,
                                                pattern: 'striped'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 25,
                                                color: 'success',
                                                pattern: 'striped'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 50,
                                                color: 'info',
                                                pattern: 'striped'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 75,
                                                color: 'warning',
                                                pattern: 'striped'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 100,
                                                color: 'danger',
                                                pattern: 'striped'
                                            }]
                                        }}/>
                                    </Section>
                                    <Section describe={<Text>The striped gradient can also be animated. Add <Code>.progress-bar-animated</Code>
                                        to <Code>.progress-bar</Code> to animate the stripes right to left via CSS3
                                        animations.</Text>}>
                                        <Progress {...{
                                            items: [{
                                                now: 75,
                                                color: 'success',
                                                pattern: 'animated'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 35,
                                                color: 'warning',
                                                pattern: 'animated'
                                            }]
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            items: [{
                                                now: 65,
                                                color: 'danger',
                                                pattern: 'animated'
                                            }]
                                        }}/>
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

export default ProgressBar;