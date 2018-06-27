/**
 *
 * @Demo: Progress
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 19:44
 *
 */


import React, {Component, Fragment} from 'react';
import {Content, Div, Portlet, Section, Text, Code, Progress, Space, Separator} from 'omega';
export default class Progresses extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Content>
                    <Div _includeClass="row">
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '基础进度条'
                            }} >
                                <Section
                                    describe={<Text>可以通过使用 <Code>Progress</Code> 组件快速构建一个通用进度条，只需设置
                                        <Code>items</Code> 属性。</Text>}>
                                    <Progress {...{
                                        items: {
                                            now: 0
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 25
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 50
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 100
                                        }
                                    }}/>
                                </Section>
                            </Portlet>

                            <Portlet {...{
                                header: '尺寸'
                            }} >
                                <Section title="细尺寸"
                                         describe={<Text>可以通过设置 <Code>size</Code> 属性为<Code>sm</Code>，控制进度条以较细的样式显示：
                                         </Text>}>
                                    <Progress {...{
                                        size: 'sm',
                                        items: {
                                            now: 25,
                                            _bgColor: 'primary'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        size: 'sm',
                                        items: {
                                            now: 50,
                                            _bgColor: 'accent'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        size: 'sm',
                                        items: {
                                            now: 75,
                                            _bgColor: 'warning'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        size: 'sm',
                                        items: {
                                            now: 100,
                                            _bgColor: 'danger'
                                        }
                                    }}/>
                                    <div className="m-separator m-separator--dashed"/>
                                </Section>
                                <Section title="粗尺寸"
                                         describe={<Text>可以通过设置 <Code>size</Code>
                                             属性为<Code>lg</Code>，控制进度条以较粗的样式显示：</Text>}>
                                    <Progress {...{
                                        size: 'lg',
                                        items: {
                                            now: 25,
                                            _bgColor: 'primary'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        size: 'lg',
                                        items: {
                                            now: 50,
                                            _bgColor: 'accent'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        size: 'lg',
                                        items: {
                                            now: 75,
                                            _bgColor: 'warning'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        size: 'lg',
                                        items: {
                                            now: 100,
                                            _bgColor: 'danger'
                                        }
                                    }}/>
                                    <Separator/>
                                </Section>
                                <Section title="自定义高度"
                                         describe={<Text>如果对预设进度条粗细样式不满意，可以通过设置 <Code>style</Code> 属性的
                                             <Code>height</Code> 参数自定义进度条高度。
                                         </Text>}>
                                    <Progress {...{
                                        height: '1px',
                                        items: {
                                            now: 25,
                                            _bgColor: 'primary'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        height: '5px',
                                        items: {
                                            now: 50,
                                            _bgColor: 'accent'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        height: '10px',
                                        items: {
                                            now: 75,
                                            _bgColor: 'warning'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        height: '15px',
                                        items: {
                                            now: 100,
                                            _bgColor: 'danger'
                                        }
                                    }}/>
                                    <Separator/>
                                </Section>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '进度条状态'
                            }} >
                                <Section title="背景颜色"
                                         describe={<Text>通过设置 <Code>items</Code> 属性的 <Code>_bgColor</Code>
                                             参数可以修改进度条状态。</Text>}>
                                    <Progress {...{
                                        items: {
                                            now: 25,
                                            _bgColor: 'success'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 50,
                                            _bgColor: 'info'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 75,
                                            _bgColor: 'warning'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 100,
                                            _bgColor: 'danger'
                                        }
                                    }}/>
                                </Section>
                                <Section title="复合进度条"
                                         describe={<Text>通过设置多个 <Code>items</Code> 对象元素可以创建多个进度条。</Text>}>
                                    <Progress {...{
                                        items: [{
                                            now: 15
                                        }, {
                                            now: 30,
                                            _bgColor: 'success'
                                        }, {
                                            now: 20,
                                            _bgColor: 'info'
                                        }]
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: [{
                                            now: 35
                                        }, {
                                            now: 10,
                                            _bgColor: 'warning'
                                        }, {
                                            now: 40,
                                            _bgColor: 'danger'
                                        }]
                                    }}/>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: '条纹'
                            }} >
                                <Section
                                    describe={<Text>通过设置 <Code>items</Code> 属性的 <Code>pattern</Code> 参数为
                                        <Code>striped</Code>
                                        可以显示条纹样式。</Text>}>
                                    <Progress {...{
                                        items: {
                                            now: 10,
                                            pattern: 'striped'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 25,
                                            _bgColor: 'success',
                                            pattern: 'striped'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 50,
                                            _bgColor: 'info',
                                            pattern: 'striped'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 75,
                                            _bgColor: 'warning',
                                            pattern: 'striped'
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 100,
                                            _bgColor: 'danger',
                                            pattern: 'striped'
                                        }
                                    }}/>
                                </Section>
                                <Section
                                    describe={<Text>条纹样式也可以是动画形式，只需修改 <Code>itemss</Code> 属性中 <Code>pattern</Code>
                                        参数为
                                        <Code>animated</Code> 。</Text>}>
                                    <Progress {...{
                                        items: {
                                            now: 75,
                                            _bgColor: 'success',
                                            pattern: ['animated', 'striped']
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 35,
                                            _bgColor: 'warning',
                                            pattern: ['animated', 'striped']
                                        }
                                    }}/>
                                    <Space size={10}/>
                                    <Progress {...{
                                        items: {
                                            now: 65,
                                            _bgColor: 'danger',
                                            pattern: ['animated', 'striped']
                                        }
                                    }}/>
                                </Section>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}