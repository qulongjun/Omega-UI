/**
 *
 * @Demo: Typography
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 19:33
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Demo,
    Code,
    Text,
    Title,
    Section,
    Blockquote,
    Badge,
    Space,
    Paragraph,
    Link,
    SubHeader
} from 'omega';
export default class Typography extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <SubHeader {...{
                    header: {
                        show: true,
                        name: '排版',
                        separator: true
                    },
                    breadcrumbs: {
                        items: [
                            {
                                icon: {
                                    show: true,
                                    name: 'la la-home'
                                }
                            }, {
                                text: {
                                    value: '基础组件',
                                    href: 'javascript:;'
                                }
                            }, {
                                text: {
                                    value: '排版',
                                    href: 'javascript:;'
                                }
                            }
                        ],
                        separator: {
                            show: true,
                            text: {
                                value: '-'
                            }
                        }
                    }
                }}/>
                <Content>
                    <Div _includeClass="row">
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '标题'
                            }} >
                                <Section title="默认标题"
                                         describe={<Text>所有HTML的标题,均可以通过 <Code>&lt;Head&gt;</Code> 组件设置，只需指定
                                             <Code>&lt;tag&gt;</Code> 属性。</Text>}>
                                    <Demo>
                                        <Div _includeClass="row">
                                            <Div _includeClass="col-md-6">
                                                <Title level={1}>h1. 标题 1</Title><Space size={10}/>
                                                <Title level={2}>h2. 标题 2</Title><Space size={10}/>
                                                <Title level={3}>h3. 标题 3</Title><Space size={10}/>
                                                <Title level={4}>h4. 标题 4</Title><Space size={10}/>
                                                <Title level={5}>h5. 标题 5</Title><Space size={10}/>
                                                <Title level={6}>h6. 标题 6</Title>
                                            </Div>
                                            <Div _includeClass="col-md-6">
                                                <Title level={1} _fontColor="success">h1. 标题 1</Title><Space
                                                size={10}/>
                                                <Title level={2} _fontColor="info">h2. 标题 2</Title><Space
                                                size={10}/>
                                                <Title level={3} _fontColor="warning">h3. 标题 3</Title><Space
                                                size={10}/>
                                                <Title level={4} _fontColor="danger">h4. 标题 4</Title><Space
                                                size={10}/>
                                                <Title level={5} _fontColor="primary">h5. 标题 5</Title><Space
                                                size={10}/>
                                                <Title level={6} _fontColor="brand">h6. 标题 6</Title>
                                            </Div>
                                        </Div>
                                    </Demo>
                                </Section>
                                <Section title="自定义标题"
                                         describe="使用 Omega 预留的 Class 标签，或自定义样式，可以设计出个性化的标题。">
                                    <Demo>
                                        <Title level={3}>
                                            这是主标题 &nbsp;
                                            <small className="text-muted">
                                                这是副标题
                                            </small>
                                        </Title>
                                    </Demo>
                                </Section>
                                <Section title="展示型标题"
                                         describe="字体更大，更吸引人的标题形式。">
                                    <Demo>
                                        <Title level={3} _includeClass={['display-1']}>
                                            展示 1
                                        </Title>
                                        <Title level={3} _includeClass={['display-2']}>
                                            展示 2
                                        </Title>
                                        <Title level={3} _includeClass={['display-3']}>
                                            展示 3
                                        </Title>
                                    </Demo>
                                </Section>
                                <Section title="导言"
                                         describe={<Text>通过添加 <Code>.lead</Code> 标签，让一个段落凸出成为导言。</Text>}>
                                    <Demo>
                                        <Paragraph _includeClass={['lead']}>
                                            孤独是生命圆满的开始，没有与自己独处的经验，不会懂得和别人相处。
                                        </Paragraph>
                                    </Demo>
                                </Section>
                            </Portlet>
                            <Portlet {...{
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
                                            quote: '斯蒂芬·茨威格',
                                            source: '《断头王后》',
                                            align: 'right'
                                        }}><Paragraph
                                            _includeClass={['mb-0']}>她那时候还太年轻，不知道所有命运赠送的礼物，早已在暗中标好了价格。</Paragraph>
                                        </Blockquote>

                                    </Demo>
                                    <Demo>
                                        <Blockquote {...{
                                            quote: '加缪',
                                            source: '《局外人》'
                                        }}>
                                            <Paragraph classList={['mb-0']}>一个人只要学会了回忆，就再不会孤独，哪怕只在世上生活一日，你也能毫无困难地凭回忆在囚牢中独处百年。</Paragraph>
                                        </Blockquote>

                                    </Demo>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: {
                                    show: true,
                                    title: '徽章'
                                }
                            }} >
                                <Section title="基础徽章" describe="不同状态的基础徽章">
                                    <Demo>
                                        <Badge bgColor="brand">3</Badge>
                                        <Badge bgColor="metal">4</Badge>
                                        <Badge bgColor="primary">7</Badge>
                                        <Badge bgColor="success">8</Badge>
                                        <Badge bgColor="info">11</Badge>
                                        <Badge bgColor="warning">2</Badge>
                                        <Badge bgColor="danger">5</Badge>
                                    </Demo>
                                </Section>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
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
                                            <Text _includeClass={['m--font-bold']}>示例加粗文本</Text>
                                        </Paragraph>
                                        <Paragraph>
                                            <Text _includeClass={['m--font-bolder']}>示例更粗文本</Text>
                                        </Paragraph>
                                        <Paragraph>
                                            <Text _includeClass={['m--font-boldest']}>示例最粗文本</Text>
                                        </Paragraph>
                                        <Paragraph>
                                            <Text _includeClass={['m--font-transform-u']}>示例 uppercase 文本</Text>
                                        </Paragraph>
                                    </Demo>
                                </Section>
                                <Section describe="状态文字">
                                    <Demo>
                                        <Paragraph>
                                            <Text _fontColor='success'>Success 状态文字</Text>
                                        </Paragraph>
                                        <Paragraph>
                                            <Text _fontColor='warning'>Warning 状态文字</Text>
                                        </Paragraph>
                                        <Paragraph>
                                            <Text _fontColor='info'>Info 状态文字</Text>
                                        </Paragraph>
                                        <Paragraph>
                                            <Text _fontColor='danger'>Danger 状态文字</Text>
                                        </Paragraph>
                                        <Paragraph>
                                            <Text _fontColor='primary'>Primary 状态文字</Text>
                                        </Paragraph>
                                    </Demo>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: {
                                    show: true,
                                    title: '链接'
                                }
                            }} >
                                <Section title="基础链接" describe="基础链接示例">
                                    <Demo>
                                        <Paragraph>
                                            <Link href="javascript:;">示例超级链接</Link>
                                        </Paragraph>
                                        <Paragraph>
                                            <Link href="javascript:;" _includeClass={['m--font-bold']}>示例加粗超级链接</Link>
                                        </Paragraph>
                                        <Paragraph>
                                            <Link href="javascript:;"
                                                  _includeClass={['m--font-bolder']}>示例更粗超级链接</Link>
                                        </Paragraph>
                                        <Paragraph>
                                            <Link href="javascript:;"
                                                  _includeClass={['m--font-boldest']}>示例最粗超级链接</Link>
                                        </Paragraph>
                                        <Paragraph>
                                            <Link href="javascript:;" _includeClass={['m--font-transform-u']}>示例
                                                uppercase 超级链接</Link>
                                        </Paragraph>
                                    </Demo>
                                </Section>
                                <Section describe="State colors">
                                    <Demo>
                                        <Paragraph>
                                            <Link _fontColor='success'>Success 状态超级链接</Link>
                                        </Paragraph>
                                        <Paragraph>
                                            <Link _fontColor='warning'>Warning 状态超级链接</Link>
                                        </Paragraph>
                                        <Paragraph>
                                            <Link _fontColor='info'>Info 状态超级链接</Link>
                                        </Paragraph>
                                        <Paragraph>
                                            <Link _fontColor='danger'>Danger 状态超级链接</Link>
                                        </Paragraph>
                                        <Paragraph>
                                            <Link _fontColor='primary'>Primary 状态超级链接</Link>
                                        </Paragraph>
                                    </Demo>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: {
                                    show: true,
                                    title: '徽章'
                                }
                            }} >
                                <Section title="基础徽章" describe="不同状态的基础徽章">
                                    <Demo>
                                        <Badge bgColor="brand">3</Badge>
                                        <Badge bgColor="metal">4</Badge>
                                        <Badge bgColor="primary">7</Badge>
                                        <Badge bgColor="success">8</Badge>
                                        <Badge bgColor="info">11</Badge>
                                        <Badge bgColor="warning">2</Badge>
                                        <Badge bgColor="danger">5</Badge>
                                    </Demo>
                                </Section>
                                <Section title="点型徽章" describe="不同状态的点型徽章">
                                    <Demo badgeStyle={false}>
                                        <Badge bgColor="brand" type="dot"/>&nbsp;
                                        <Badge bgColor="metal" type="dot"/>&nbsp;
                                        <Badge bgColor="primary" type="dot"/>&nbsp;
                                        <Badge bgColor="success" type="dot"/>&nbsp;
                                        <Badge bgColor="info" type="dot"/>&nbsp;
                                        <Badge bgColor="warning" type="dot"/>&nbsp;
                                        <Badge bgColor="danger" type="dot"/>
                                        <Space size={20}/>
                                        Pendding&nbsp;
                                        <Badge bgColor="brand" type="dot"/>&nbsp;
                                        Caption&nbsp;
                                        <Badge bgColor="primary" type="dot"/>&nbsp;
                                        Heading&nbsp;
                                        <Badge bgColor="info" type="dot"/>&nbsp;
                                        State&nbsp;
                                        <Badge bgColor="danger" type="dot"/>&nbsp;
                                        <Space size={20}/>
                                        Pendding&nbsp;
                                        <Badge bgColor="brand" type="dot-small"/>&nbsp;
                                        Caption&nbsp;
                                        <Badge bgColor="primary" type="dot-small"/>&nbsp;
                                        Heading&nbsp;
                                        <Badge bgColor="info" type="dot-small"/>&nbsp;
                                        State&nbsp;
                                        <Badge bgColor="danger" type="dot-small"/>

                                    </Demo>
                                </Section>
                                <Section title="加宽徽章" describe="为较长为本准备的加宽徽章">
                                    <Demo>
                                        <Badge bgColor="brand" type="wide">new</Badge>
                                        <Badge bgColor="metal" type="wide">pending</Badge>
                                        <Badge bgColor="primary" type="wide">203</Badge>
                                        <Badge bgColor="success" type="wide">hot</Badge>
                                        <Badge bgColor="info" type="wide">fixed</Badge>
                                        <Badge bgColor="warning" type="wide">in process</Badge>
                                        <Badge bgColor="danger" type="wide">completed</Badge>
                                    </Demo>
                                </Section>
                                <Section title="圆形徽章" describe="圆形徽章示例">
                                    <Demo>
                                        <Badge bgColor="brand" type={['rounded', 'wide']}>new</Badge>
                                        <Badge bgColor="metal" type={['rounded', 'wide']}>pending</Badge>
                                        <Badge bgColor="primary" type={['rounded', 'wide']}>203</Badge>
                                        <Badge bgColor="success" type={['rounded', 'wide']}>hot</Badge>
                                        <Badge bgColor="info" type={['rounded', 'wide']}>fixed</Badge>
                                        <Badge bgColor="warning" type={['rounded', 'wide']}>in process</Badge>
                                        <Badge bgColor="danger" type={['rounded', 'wide']}>completed</Badge>
                                    </Demo>
                                </Section>
                            </Portlet>
                            <Portlet {...{
                                header: {
                                    show: true,
                                    title: '边框徽章'
                                }
                            }} >
                                <Section title="边框徽章" describe="基础边框徽章示例">
                                    <Demo>
                                        <Badge {...{
                                            inverse: true
                                        }}>3</Badge>
                                        <Badge {...{
                                            bgColor: 'info',
                                            inverse: true
                                        }}>4</Badge>
                                        <Badge {...{
                                            bgColor: 'danger',
                                            inverse: true
                                        }}>7</Badge>
                                        <Badge {...{
                                            bgColor: 'primary',
                                            inverse: true
                                        }}>8</Badge>
                                        <Badge {...{
                                            bgColor: 'warning',
                                            inverse: true
                                        }}>1</Badge>
                                        <Badge {...{
                                            bgColor: 'success',
                                            inverse: true
                                        }}>2</Badge>
                                        <Badge {...{
                                            bgColor: 'brand',
                                            inverse: true
                                        }}>5</Badge>
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