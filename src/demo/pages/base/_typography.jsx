/**
 *
 * @Demo: Alerts
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 09:18
 *
 */

import React, {Component, Fragment} from 'react';

import SubHeader from '../_subheader';


import Wrapper from 'components/framework/_wrapper';
import Content from 'components/framework/_content';
import Section from 'components/framework/_section';
import Paragraph from "components/framework/_paragraph";
import Text from "components/framework/_text";
import Link from 'components/framework/_link'
import Head from 'components/framework/_head'
import Space from "components/framework/_space";
import Code from "components/framework/_code";
import Blockquote from "components/framework/_blockquote";

import Badge from "components/base/_badge";
import Portle from 'components/general/_portle';

import Demo from '../_demo'

import 'sass/_demo.scss';


class Typography extends Component {
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
                    <SubHeader title="排版"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '标题'
                                    }
                                }} >
                                    <Section title="默认标题"
                                             describe={<Text>所有HTML的标题,均可以通过 <Code>&lt;Head&gt;</Code> 组件设置，只需指定
                                                 <Code>&lt;tag&gt;</Code> 属性。</Text>}>
                                        <Demo>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Head tag="h1">h1. 标题 1</Head><Space size={10}/>
                                                    <Head tag="h2">h2. 标题 2</Head><Space size={10}/>
                                                    <Head tag="h3">h3. 标题 3</Head><Space size={10}/>
                                                    <Head tag="h4">h4. 标题 4</Head><Space size={10}/>
                                                    <Head tag="h5">h5. 标题 5</Head><Space size={10}/>
                                                    <Head tag="h6">h6. 标题 6</Head>
                                                </div>
                                                <div className="col-md-6">
                                                    <Head tag="h1" state="success">h1. 标题 1</Head><Space
                                                    size={10}/>
                                                    <Head tag="h2" state="info">h2. 标题 2</Head><Space size={10}/>
                                                    <Head tag="h3" state="warning">h3. 标题 3</Head><Space
                                                    size={10}/>
                                                    <Head tag="h4" state="danger">h4. 标题 4</Head><Space size={10}/>
                                                    <Head tag="h5" state="primary">h5. 标题 5</Head><Space
                                                    size={10}/>
                                                    <Head tag="h6" state="brand">h6. 标题 6</Head>
                                                </div>
                                            </div>
                                        </Demo>
                                    </Section>
                                    <Section title="自定义标题"
                                             describe="使用 Omega 预留的 Class 标签，或自定义样式，可以设计出个性化的标题。">
                                        <Demo>
                                            <Head tag="h3">
                                                这是主标题 &nbsp;
                                                <small className="text-muted">
                                                    这是副标题
                                                </small>
                                            </Head>
                                        </Demo>
                                    </Section>
                                    <Section title="展示型标题"
                                             describe="字体更大，更吸引人的标题形式。">
                                        <Demo>
                                            <Head tag="h3" classList={['display-1']}>
                                                展示 1
                                            </Head>
                                            <Head tag="h3" classList={['display-2']}>
                                                展示 2
                                            </Head>
                                            <Head tag="h3" classList={['display-3']}>
                                                展示 3
                                            </Head>
                                        </Demo>
                                    </Section>
                                    <Section title="导言"
                                             describe={<Text>通过添加 <Code>.lead</Code> 标签，让一个段落凸出成为导言。</Text>}>
                                        <Demo>
                                            <Paragraph classList={['lead']}>
                                                孤独是生命圆满的开始，没有与自己独处的经验，不会懂得和别人相处。
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '通用'
                                    }
                                }} >
                                    <Section title="行间元素"
                                             describe="以下样式可以通过被使用在行间元素上：">
                                        <Demo>
                                            <Paragraph>
                                                你可以使用 <Code>mark</Code> 标签 来 &nbsp;
                                                <mark>
                                                    高亮
                                                </mark>
                                                &nbsp; 某些文本。
                                            </Paragraph>
                                            <Paragraph>
                                                <del>
                                                    这行文本已经被处理且删除了。
                                                </del>
                                            </Paragraph>
                                            <Paragraph>
                                                <s>
                                                    这行文本的描述不再准确了。
                                                </s>
                                            </Paragraph>
                                            <Paragraph>
                                                <ins>
                                                    这行文本被视为文档的补充。
                                                </ins>
                                            </Paragraph>
                                            <Paragraph>
                                                <u>
                                                    这行文本添加了下划线。
                                                </u>
                                            </Paragraph>
                                            <Paragraph>
                                                <small>
                                                    这行文本是印刷的最佳尺寸。
                                                </small>
                                            </Paragraph>
                                            <Paragraph>
                                                <strong>
                                                    这行文本以粗体显示。
                                                </strong>
                                            </Paragraph>
                                            <Paragraph>
                                                <em>
                                                    这行文本以斜体显示。
                                                </em>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section title="缩略"
                                             describe={<Text>你可以使用 <Code>&lt;abbr&gt;</Code> 标签实现缩略效果。
                                                 </Text>}>
                                        <Demo>
                                            <Paragraph>
                                                <abbr title="attribute">
                                                    地址
                                                </abbr>
                                            </Paragraph>
                                            <Paragraph>
                                                <abbr title="HyperText Markup Language" className="initialism">
                                                    超文本标记
                                                </abbr>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section title="引用"
                                             describe="引用文本内容。">
                                        <Demo>
                                            <Blockquote {...{
                                                content: <Paragraph classList={['mb-0']}>她那时候还太年轻，不知道所有命运赠送的礼物，早已在暗中标好了价格。</Paragraph>,
                                                quote: <Text>斯蒂芬·茨威格 <cite title="Source Title">《断头王后》</cite></Text>
                                            }
                                                        }/>

                                        </Demo>
                                        <Demo>
                                            <Blockquote {...{
                                                content: <Paragraph classList={['mb-0']}>一个人只要学会了回忆，就再不会孤独，哪怕只在世上生活一日，你也能毫无困难地凭回忆在囚牢中独处百年。</Paragraph>,
                                                quote: <Text>加缪 <cite title="Source Title">《局外人》</cite></Text>,
                                                reverse: true
                                            }
                                                        }/>

                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '徽章'
                                    }
                                }} >
                                    <Section title="基础徽章" describe="不同状态的基础徽章">
                                        <Demo>
                                            <Badge color="brand">3</Badge>
                                            <Badge color="metal">4</Badge>
                                            <Badge color="primary">7</Badge>
                                            <Badge color="success">8</Badge>
                                            <Badge color="info">11</Badge>
                                            <Badge color="warning">2</Badge>
                                            <Badge color="danger">5</Badge>
                                        </Demo>
                                    </Section>
                                </Portle>
                            </div>
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '文本'
                                    }
                                }} >
                                    <Section title="基础文本" describe="基础文本示例">
                                        <Demo>
                                            <Paragraph>
                                                <Text>示例文本</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-bold']}>示例加粗文本</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-bolder']}>示例更粗文本</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-boldest']}>示例最粗文本</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-transform-u']}>示例 uppercase 文本</Text>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section describe="状态文字">
                                        <Demo>
                                            <Paragraph>
                                                <Text state='success'>Success 状态文字</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='warning'>Warning 状态文字</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='info'>Info 状态文字</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='danger'>Danger 状态文字</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='primary'>Primary 状态文字</Text>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '链接'
                                    }
                                }} >
                                    <Section title="基础链接" describe="基础链接示例">
                                        <Demo>
                                            <Paragraph>
                                                <Link>示例文本</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link classList={['m--font-bold']}>示例加粗文本</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link classList={['m--font-bolder']}>示例更粗文本</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link classList={['m--font-boldest']}>示例最粗文本</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link classList={['m--font-transform-u']}>示例 uppercase 文本</Link>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section describe="State colors">
                                        <Demo>
                                            <Paragraph>
                                                <Link state='success'>Success 状态文字</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link state='warning'>Warning 状态文字</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link state='info'>Info 状态文字</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link state='danger'>Danger 状态文字</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link state='primary'>Primary 状态文字</Link>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '徽章'
                                    }
                                }} >
                                    <Section title="基础徽章" describe="不同状态的基础徽章">
                                        <Demo>
                                            <Badge color="brand">3</Badge>
                                            <Badge color="metal">4</Badge>
                                            <Badge color="primary">7</Badge>
                                            <Badge color="success">8</Badge>
                                            <Badge color="info">11</Badge>
                                            <Badge color="warning">2</Badge>
                                            <Badge color="danger">5</Badge>
                                        </Demo>
                                    </Section>
                                    <Section title="点型徽章" describe="不同状态的点型徽章">
                                        <Demo badgeStyle={false}>
                                            <Badge color="brand" type="dot"/>&nbsp;
                                            <Badge color="metal" type="dot"/>&nbsp;
                                            <Badge color="primary" type="dot"/>&nbsp;
                                            <Badge color="success" type="dot"/>&nbsp;
                                            <Badge color="info" type="dot"/>&nbsp;
                                            <Badge color="warning" type="dot"/>&nbsp;
                                            <Badge color="danger" type="dot"/>
                                            <Space size={20}/>
                                            Pendding&nbsp;
                                            <Badge color="brand" type="dot"/>&nbsp;
                                            Caption&nbsp;
                                            <Badge color="primary" type="dot"/>&nbsp;
                                            Heading&nbsp;
                                            <Badge color="info" type="dot"/>&nbsp;
                                            State&nbsp;
                                            <Badge color="danger" type="dot"/>&nbsp;
                                            <Space size={20}/>
                                            Pendding&nbsp;
                                            <Badge color="brand" type="dot-small"/>&nbsp;
                                            Caption&nbsp;
                                            <Badge color="primary" type="dot-small"/>&nbsp;
                                            Heading&nbsp;
                                            <Badge color="info" type="dot-small"/>&nbsp;
                                            State&nbsp;
                                            <Badge color="danger" type="dot-small"/>

                                        </Demo>
                                    </Section>
                                    <Section title="加宽徽章" describe="为较长为本准备的加宽徽章">
                                        <Demo>
                                            <Badge color="brand" type="wide">new</Badge>
                                            <Badge color="metal" type="wide">pending</Badge>
                                            <Badge color="primary" type="wide">203</Badge>
                                            <Badge color="success" type="wide">hot</Badge>
                                            <Badge color="info" type="wide">fixed</Badge>
                                            <Badge color="warning" type="wide">in process</Badge>
                                            <Badge color="danger" type="wide">completed</Badge>
                                        </Demo>
                                    </Section>
                                    <Section title="圆形徽章" describe="圆形徽章示例">
                                        <Demo>
                                            <Badge color="brand" type="rounded">new</Badge>
                                            <Badge color="metal" type="rounded">pending</Badge>
                                            <Badge color="primary" type="rounded">203</Badge>
                                            <Badge color="success" type="rounded">hot</Badge>
                                            <Badge color="info" type="rounded">fixed</Badge>
                                            <Badge color="warning" type="rounded">in process</Badge>
                                            <Badge color="danger" type="rounded">completed</Badge>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: '边框徽章'
                                    }
                                }} >
                                    <Section title="边框徽章" describe="基础边框徽章示例">
                                        <Demo>
                                            <Badge {...{
                                                color: 'default',
                                                inverse: true
                                            }}>3</Badge>
                                            <Badge {...{
                                                color: 'info',
                                                inverse: true
                                            }}>4</Badge>
                                            <Badge {...{
                                                color: 'danger',
                                                inverse: true
                                            }}>7</Badge>
                                            <Badge {...{
                                                color: 'primary',
                                                inverse: true
                                            }}>8</Badge>
                                            <Badge {...{
                                                color: 'warning',
                                                inverse: true
                                            }}>1</Badge>
                                            <Badge {...{
                                                color: 'success',
                                                inverse: true
                                            }}>2</Badge>
                                            <Badge {...{
                                                color: 'brand',
                                                inverse: true
                                            }}>5</Badge>
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

export default Typography;