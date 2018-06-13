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
                    <SubHeader title="进度条"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '基础进度条'
                                    }
                                }} >
                                    <Section
                                        describe={<Text>可以通过使用 <Code>Progress</Code> 组件快速构建一个通用进度条，只需设置 <Code>item</Code> 属性。</Text>}>
                                        <Progress {...{
                                            item: {
                                                now: 0
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 25
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 50
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 100
                                            }
                                        }}/>
                                    </Section>
                                </Portle>

                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '尺寸'
                                    }
                                }} >
                                    <Section title="细尺寸"
                                             describe={<Text>可以通过设置 <Code>size</Code> 属性为<Code>sm</Code>，控制进度条以较细的样式显示：
                                             </Text>}>
                                        <Progress {...{
                                            size: 'sm',
                                            item: {
                                                now: 25,
                                                color: 'primary'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'sm',
                                            item: {
                                                now: 50,
                                                color: 'accent'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'sm',
                                            item: {
                                                now: 75,
                                                color: 'warning'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'sm',
                                            item: {
                                                now: 100,
                                                color: 'danger'
                                            }
                                        }}/>
                                        <div className="m-separator m-separator--dashed"/>
                                    </Section>
                                    <Section title="粗尺寸"
                                             describe={<Text>可以通过设置 <Code>size</Code> 属性为<Code>lg</Code>，控制进度条以较粗的样式显示：</Text>}>
                                        <Progress {...{
                                            size: 'lg',
                                            item: {
                                                now: 25,
                                                color: 'primary'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'lg',
                                            item: {
                                                now: 50,
                                                color: 'accent'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'lg',
                                            item: {
                                                now: 75,
                                                color: 'warning'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            size: 'lg',
                                            item: {
                                                now: 100,
                                                color: 'danger'
                                            }
                                        }}/>
                                        <Separator/>
                                    </Section>
                                    <Section title="自定义高度"
                                             describe={<Text>如果对预设进度条粗细样式不满意，可以通过设置 <Code>style</Code> 属性的 <Code>height</Code> 参数自定义进度条高度。
                                             </Text>}>
                                        <Progress {...{
                                            height: '1px',
                                            item: {
                                                now: 25,
                                                color: 'primary'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            height: '5px',
                                            item: {
                                                now: 50,
                                                color: 'accent'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            height: '10px',
                                            item: {
                                                now: 75,
                                                color: 'warning'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            height: '15px',
                                            item: {
                                                now: 100,
                                                color: 'danger'
                                            }
                                        }}/>
                                        <Separator/>
                                    </Section>
                                </Portle>
                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '进度条状态'
                                    }
                                }} >
                                    <Section title="背景颜色"
                                             describe={<Text>通过设置 <Code>item</Code> 属性的 <Code>color</Code> 参数可以修改进度条状态。</Text>}>
                                        <Progress {...{
                                            item: {
                                                now: 25,
                                                color: 'success'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 50,
                                                color: 'info'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 75,
                                                color: 'warning'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 100,
                                                color: 'danger'
                                            }
                                        }}/>
                                    </Section>
                                    <Section title="复合进度条"
                                             describe={<Text>通过设置多个 <Code>item</Code> 对象元素可以创建多个进度条。</Text>}>
                                        <Progress {...{
                                            item: [{
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
                                            item: [{
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
                                        title: '条纹'
                                    }
                                }} >
                                    <Section
                                        describe={<Text>通过设置 <Code>item</Code> 属性的 <Code>pattern</Code> 参数为 <Code>striped</Code> 可以显示条纹样式。</Text>}>
                                        <Progress {...{
                                            item: {
                                                now: 10,
                                                pattern: 'striped'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 25,
                                                color: 'success',
                                                pattern: 'striped'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 50,
                                                color: 'info',
                                                pattern: 'striped'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 75,
                                                color: 'warning',
                                                pattern: 'striped'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 100,
                                                color: 'danger',
                                                pattern: 'striped'
                                            }
                                        }}/>
                                    </Section>
                                    <Section describe={<Text>条纹样式也可以是动画形式，只需修改 <Code>item</Code> 属性中 <Code>pattern</Code> 参数为 <Code>animated</Code> 。</Text>}>
                                        <Progress {...{
                                            item: {
                                                now: 75,
                                                color: 'success',
                                                pattern: 'animated'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 35,
                                                color: 'warning',
                                                pattern: 'animated'
                                            }
                                        }}/>
                                        <Space size={10}/>
                                        <Progress {...{
                                            item: {
                                                now: 65,
                                                color: 'danger',
                                                pattern: 'animated'
                                            }
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