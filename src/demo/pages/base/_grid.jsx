/**
 *
 * @Demo: Alerts
 * @User: Longjun.Qu
 * @Date: 2018-06-11
 * @Time: 16:18
 *
 */

import React, {Component, Fragment} from 'react';


import SubHeader from 'components/_framework/SubHeader';

import Text from 'components/_element/Text';
import Code from 'components/_element/Code';
import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';
import Demo from 'components/_framework/Demo';
import Portle from 'components/_portlet/Portlet';
import Grid from "components/_base/Grid";
import GridItem from "components/_base/GridItem";
import 'sass/_demo.scss';
import 'plugins/config'


class Grids extends Component {
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
                    <SubHeader title="栅格系统"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '基础示例'
                                    }
                                }} >
                                    <Section
                                        describe={
                                            <Text>通过 <Code>Grid</Code> 组件和 <Code>GridItem</Code> 组件可以快速构建 <Code>Flex</Code> 布局。</Text>}>
                                        <Demo>
                                            <Grid {...{
                                                direction: 'ver',
                                                justify: 'flex-end',
                                                mode:'desktop'
                                            }}>
                                                <GridItem {...{
                                                    fluid: true
                                                }}>Item 1</GridItem>
                                                <GridItem {...{
                                                    fluid: true
                                                }}>Item 2</GridItem>
                                                <GridItem {...{
                                                    fluid: true
                                                }}>Item 3</GridItem>
                                            </Grid>
                                        </Demo>
                                        <Demo>
                                            <Grid {...{
                                                direction: 'hor'
                                            }}>
                                                <GridItem {...{
                                                    fluid: true
                                                }}>Item 1</GridItem>
                                                <GridItem {...{
                                                    fluid: true
                                                }}>Item 2</GridItem>
                                                <GridItem {...{
                                                    fluid: true
                                                }}>Item 3</GridItem>
                                            </Grid>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '排列顺序'
                                    }
                                }} >
                                    <Section describe={<Text>通过指定 <Code>order</Code> 属性可以设置排列顺序。</Text>}>
                                        <Demo>
                                            <Grid {...{
                                                direction: 'ver'
                                            }}>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 2
                                                }}>Item 1</GridItem>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 3
                                                }}>Item 2</GridItem>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 1
                                                }}>Item 3</GridItem>
                                            </Grid>
                                        </Demo>
                                        <Demo>
                                            <Grid {...{
                                                direction: 'hor'
                                            }}>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 2
                                                }}>Item 1</GridItem>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 3
                                                }}>Item 2</GridItem>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 1
                                                }}>Item 3</GridItem>
                                            </Grid>
                                        </Demo>
                                    </Section>
                                </Portle>
                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '对齐方式'
                                    }
                                }} >
                                    <Section describe={
                                        <Text>通过在 <Code>GridItem</Code> 组件上设置 <Code>align</Code> 属性可以指定该元素在主轴上对齐方式。</Text>}>
                                        <Demo>
                                            <Grid {...{
                                                direction: 'ver',
                                                _includeStyle: {
                                                    height: '200px'
                                                }
                                            }}>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 2,
                                                    align: 'center'
                                                }}>Item 1</GridItem>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 3,
                                                    align: 'flex-end'
                                                }}>Item 2</GridItem>
                                                <GridItem {...{
                                                    fluid: true,
                                                    order: 1,
                                                    align: 'flex-start'
                                                }}>Item 3</GridItem>
                                            </Grid>
                                        </Demo>
                                        <Demo>
                                            <Grid {...{
                                                direction: 'hor'
                                            }}>
                                                <GridItem {...{
                                                    order: 1,
                                                    align: 'flex-start',
                                                    _includeStyle: {
                                                        width: '33%'
                                                    }
                                                }}>Item 1</GridItem>
                                                <GridItem {...{
                                                    order: 2,
                                                    align: 'center',
                                                    _includeStyle: {
                                                        width: '33%'
                                                    }
                                                }}>Item 2</GridItem>
                                                <GridItem {...{
                                                    order: 3,
                                                    align: 'flex-end',
                                                    _includeStyle: {
                                                        width: '33%'
                                                    }
                                                }}>Item 3</GridItem>
                                            </Grid>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '占位比例'
                                    }
                                }} >
                                    <Section
                                        describe={
                                            <Text>通过 <Code>GridItem</Code> 组件的 <Code>flex</Code> 属性可以对不同元素的占比进行调整。</Text>}>
                                        <Demo>
                                            <Grid {...{
                                                direction: 'ver'
                                            }}>
                                                <GridItem {...{
                                                    flex: '1 1 auto'
                                                }}>Item 1</GridItem>
                                                <GridItem {...{
                                                    flex: '2 1 auto'
                                                }}>Item 2</GridItem>
                                                <GridItem {...{
                                                    flex: '3 1 auto'
                                                }}>Item 3</GridItem>
                                            </Grid>
                                        </Demo>
                                        <Demo>
                                            <Grid {...{
                                                direction: 'hor',
                                                _includeStyle: {
                                                    height: '200px'
                                                }
                                            }}>
                                                <GridItem {...{
                                                    flex: '1 1 auto',
                                                    _includeStyle: {
                                                        height: 'auto'
                                                    }
                                                }}>Item 1</GridItem>
                                                <GridItem {...{
                                                    flex: '2 1 auto',
                                                    _includeStyle: {
                                                        height: 'auto'
                                                    }
                                                }}>Item 2</GridItem>
                                                <GridItem {...{
                                                    flex: '3 1 auto',
                                                    _includeStyle: {
                                                        height: 'auto'
                                                    }
                                                }}>Item 3</GridItem>
                                            </Grid>
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

export default Grids;