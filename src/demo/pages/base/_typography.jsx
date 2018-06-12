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
                    <SubHeader title="Typography"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Heading'
                                    }
                                }} >
                                    <Section title="Default headings"
                                             describe={<Text>All HTML headings, <Code>&lt;h1&gt;</Code> through
                                                 <Code>&lt;h6&gt;</Code> , are available.</Text>}>
                                        <Demo>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Head tag="h1">h1. Heading 1</Head><Space size={10}/>
                                                    <Head tag="h2">h2. Heading 2</Head><Space size={10}/>
                                                    <Head tag="h3">h3. Heading 3</Head><Space size={10}/>
                                                    <Head tag="h4">h4. Heading 4</Head><Space size={10}/>
                                                    <Head tag="h5">h5. Heading 5</Head><Space size={10}/>
                                                    <Head tag="h6">h6. Heading 6</Head>
                                                </div>
                                                <div className="col-md-6">
                                                    <Head tag="h1" state="success">h1. Heading 1</Head><Space
                                                    size={10}/>
                                                    <Head tag="h2" state="info">h2. Heading 2</Head><Space size={10}/>
                                                    <Head tag="h3" state="warning">h3. Heading 3</Head><Space
                                                    size={10}/>
                                                    <Head tag="h4" state="danger">h4. Heading 4</Head><Space size={10}/>
                                                    <Head tag="h5" state="primary">h5. Heading 5</Head><Space
                                                    size={10}/>
                                                    <Head tag="h6" state="brand">h6. Heading 6</Head>
                                                </div>
                                            </div>
                                        </Demo>
                                    </Section>
                                    <Section title="Customizing headings"
                                             describe="Use the included utility classes to recreate the small secondary heading text.">
                                        <Demo>
                                            <Head tag="h3">
                                                Fancy display heading &nbsp;
                                                <small className="text-muted">
                                                    With faded secondary text
                                                </small>
                                            </Head>
                                        </Demo>
                                    </Section>
                                    <Section title="Display headings"
                                             describe="Larger, slightly more opinionated heading styles.">
                                        <Demo>
                                            <Head tag="h3" classList={['display-1']}>
                                                Display 1
                                            </Head>
                                            <Head tag="h3" classList={['display-2']}>
                                                Display 2
                                            </Head>
                                            <Head tag="h3" classList={['display-3']}>
                                                Display 3
                                            </Head>
                                        </Demo>
                                    </Section>
                                    <Section title="Lead"
                                             describe={<Text>Make a paragraph stand out by adding <Code>.lead</Code>
                                                 .</Text>}>
                                        <Demo>
                                            <Paragraph classList={['lead']}>
                                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                                Duis mollis, est non commodo luctus.
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'General'
                                    }
                                }} >
                                    <Section title="Inline text elements"
                                             describe="Styling for common inline HTML5 elements.">
                                        <Demo>
                                            <Paragraph>
                                                You can use the mark tag to &nbsp;
                                                <mark>
                                                    highlight
                                                </mark>
                                                &nbsp; text.
                                            </Paragraph>
                                            <Paragraph>
                                                <del>
                                                    This line of text is meant to be treated as deleted text.
                                                </del>
                                            </Paragraph>
                                            <Paragraph>
                                                <s>
                                                    This line of text is meant to be treated as no longer accurate.
                                                </s>
                                            </Paragraph>
                                            <Paragraph>
                                                <ins>
                                                    This line of text is meant to be treated as an addition to the
                                                    document.
                                                </ins>
                                            </Paragraph>
                                            <Paragraph>
                                                <u>
                                                    This line of text will render as underlined
                                                </u>
                                            </Paragraph>
                                            <Paragraph>
                                                <small>
                                                    This line of text is meant to be treated as fine print.
                                                </small>
                                            </Paragraph>
                                            <Paragraph>
                                                <strong>
                                                    This line rendered as bold text.
                                                </strong>
                                            </Paragraph>
                                            <Paragraph>
                                                <em>
                                                    This line rendered as italicized text.
                                                </em>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section title="Abbreviations"
                                             describe={<Text>Stylized implementation of HTML’s <Code>&lt;abbr&gt;</Code>
                                                 element.</Text>}>
                                        <Demo>
                                            <Paragraph>
                                                <abbr title="attribute">
                                                    attr
                                                </abbr>
                                            </Paragraph>
                                            <Paragraph>
                                                <abbr title="HyperText Markup Language" className="initialism">
                                                    HTML
                                                </abbr>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section title="Blockquotes"
                                             describe="Quoting blocks of content.">
                                        <Demo>
                                            <Blockquote {...{
                                                content: <Paragraph classList={['mb-0']}>Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Integer posuere erat a
                                                    ante.</Paragraph>,
                                                quote: <Text>Someone famous in <cite title="Source Title">Source
                                                    Title</cite></Text>
                                            }
                                                        }/>

                                        </Demo>
                                        <Demo>
                                            <Blockquote {...{
                                                content: <Paragraph classList={['mb-0']}>Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Integer posuere erat a
                                                    ante.</Paragraph>,
                                                quote: <Text>Someone famous in <cite title="Source Title">Source
                                                    Title</cite></Text>,
                                                reverse: true
                                            }
                                                        }/>

                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Badges'
                                    }
                                }} >
                                    <Section title="Basic Badges" describe="Basic state color badges">
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
                                        title: 'Text'
                                    }
                                }} >
                                    <Section title="Basic text" describe="Basic text examples">
                                        <Demo>
                                            <Paragraph>
                                                <Text>Example text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-bold']}>Example bold text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-bolder']}>Example bolder text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-boldest']}>Example boldest text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text classList={['m--font-transform-u']}>Example uppercase text</Text>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section describe="State colors">
                                        <Demo>
                                            <Paragraph>
                                                <Text state='success'>Success state text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='warning'>Warning state text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='info'>Info state text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='danger'>Danger state text</Text>
                                            </Paragraph>
                                            <Paragraph>
                                                <Text state='primary'>Primary state text</Text>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Links'
                                    }
                                }} >
                                    <Section title="Basic Links" describe="Basic link examples">
                                        <Demo>
                                            <Paragraph>
                                                <Link>Example text</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link classList={['m--font-bold']}>Example bold text</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link classList={['m--font-bolder']}>Example bolder text</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link classList={['m--font-boldest']}>Example boldest text</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link classList={['m--font-transform-u']}>Example uppercase text</Link>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                    <Section describe="State colors">
                                        <Demo>
                                            <Paragraph>
                                                <Link state='success'>Success state text</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link state='warning'>Warning state text</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link state='info'>Info state text</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link state='danger'>Danger state text</Link>
                                            </Paragraph>
                                            <Paragraph>
                                                <Link state='primary'>Primary state text</Link>
                                            </Paragraph>
                                        </Demo>
                                    </Section>
                                </Portle>
                                <Portle {...{
                                    header: {
                                        show: true,
                                        title: 'Badges'
                                    }
                                }} >
                                    <Section title="Basic Badges" describe="Basic state color badges">
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
                                    <Section title="Dot Badges" describe="State color dot badges">
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
                                    <Section title="Wide Badges" describe="Wide badges for longer text">
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
                                    <Section title="Rounded Badges" describe="Rounded badges examples">
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
                                        title: 'Bordered Badges'
                                    }
                                }} >
                                    <Section title="Basic Badges" describe="Basic state color badges">
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