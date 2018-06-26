/**
 *
 * @Demo: BlockUIPage
 * @User: Longjun.Qu
 * @Date: 2018-06-16
 * @Time: 16:26
 *
 */


import React, {Component, Fragment} from 'react';

import Text from 'components/_element/Text';
import Paragraph from 'components/_element/Paragraph';
import Div from 'components/_element/Div';
import SubHeader from 'components/_framework/SubHeader';
import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';
import Code from 'components/_element/Code';
import BlockUI from 'components/_base/BlockUI';
import Portlet from 'components/_portlet/Portlet';


import 'sass/_demo.scss';

class BlockUIPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const me = this;
        const _props = this.props;
        const {} = _props;

        return (
            <Fragment>
                <Wrapper>
                    <SubHeader title="遮罩层"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '基础示例'
                                }} >
                                    <Section describe={<Text>使用 <Code>BlockUI</Code> 组件可以快速构建一个遮罩层。</Text>}>
                                        <BlockUI {...{
                                            block: true
                                        }}>
                                            <Paragraph _includeStyle={{
                                                padding: "20px",
                                                margin: "10px 0 30px 0",
                                                border: "4px solid #efefef"
                                            }} _includeAttribute={{id: 'm_blockui_1_content'}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos
                                                imperdiet
                                                magna! Sed fusce fames tempus litora venenatis ad: Ac aliquet leo
                                                hendrerit
                                                taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
                                                Suspendisse ultrices morbi in purus lectus dictum porta; Commodo
                                                penatibus
                                                nec.
                                            </Paragraph>
                                        </BlockUI>
                                    </Section>
                                    <Section describe={<Text>设置 <Code>overlayColor</Code> 属性可以修改加载图标颜色。</Text>}>
                                        <BlockUI {...{
                                            block: true,
                                            overlayColor: 'success'
                                        }}>
                                            <Paragraph _includeStyle={{
                                                padding: "20px",
                                                margin: "10px 0 30px 0",
                                                border: "4px solid #efefef"
                                            }} _includeAttribute={{id: 'm_blockui_1_content'}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos
                                                imperdiet
                                                magna! Sed fusce fames tempus litora venenatis ad: Ac aliquet leo
                                                hendrerit
                                                taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
                                                Suspendisse ultrices morbi in purus lectus dictum porta; Commodo
                                                penatibus
                                                nec.
                                            </Paragraph>
                                        </BlockUI>
                                    </Section>
                                    <Section describe={<Text>设置 <Code>message</Code> 属性可以显示加载文本。</Text>}>
                                        <BlockUI {...{
                                            block: true,
                                            overlayColor: 'success',
                                            message: 'Please wait...'
                                        }}>
                                            <Paragraph _includeStyle={{
                                                padding: "20px",
                                                margin: "10px 0 30px 0",
                                                border: "4px solid #efefef"
                                            }} _includeAttribute={{id: 'm_blockui_1_content'}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos
                                                imperdiet
                                                magna! Sed fusce fames tempus litora venenatis ad: Ac aliquet leo
                                                hendrerit
                                                taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
                                                Suspendisse ultrices morbi in purus lectus dictum porta; Commodo
                                                penatibus
                                                nec.
                                            </Paragraph>
                                        </BlockUI>
                                    </Section>
                                    <Section>
                                        <BlockUI {...{
                                            block: true,
                                            overlayColor: 'primary',
                                            message: 'Processing...'
                                        }}>
                                            <Paragraph _includeStyle={{
                                                padding: "20px",
                                                margin: "10px 0 30px 0",
                                                border: "4px solid #efefef"
                                            }} _includeAttribute={{id: 'm_blockui_1_content'}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos
                                                imperdiet
                                                magna! Sed fusce fames tempus litora venenatis ad: Ac aliquet leo
                                                hendrerit
                                                taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
                                                Suspendisse ultrices morbi in purus lectus dictum porta; Commodo
                                                penatibus
                                                nec.
                                            </Paragraph>
                                        </BlockUI>
                                    </Section>
                                </Portlet>
                            </Div>
                            <Div _includeClass="col-xl-6">
                                <BlockUI {...{
                                    block: true,
                                    overlayColor: 'primary',
                                    message: 'Processing...'
                                }}>
                                    <Portlet {...{
                                        header: 'Portlet遮罩'
                                    }} >
                                        <Paragraph _includeStyle={{
                                            padding: "20px",
                                            margin: "10px 0 30px 0",
                                            border: "4px solid #efefef"
                                        }} _includeAttribute={{id: 'm_blockui_1_content'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos
                                            imperdiet
                                            magna! Sed fusce fames tempus litora venenatis ad: Ac aliquet leo
                                            hendrerit
                                            taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
                                            Suspendisse ultrices morbi in purus lectus dictum porta; Commodo
                                            penatibus
                                            nec.
                                        </Paragraph>
                                    </Portlet>
                                </BlockUI>
                                <Portlet {...{
                                    header: '自定义遮罩'
                                }} >
                                    <Section describe={<Text>通过 <Code>el</Code> 属性设置一个 DOM 选择器，可以自定义遮罩。</Text>}>
                                        <Paragraph _includeStyle={{
                                            padding: "20px",
                                            margin: "10px 0 30px 0",
                                            border: "4px solid #efefef"
                                        }} _includeAttribute={{id: 'block_1'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos
                                            imperdiet
                                            magna! Sed fusce fames tempus litora venenatis ad: Ac aliquet leo
                                            hendrerit
                                            taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
                                            Suspendisse ultrices morbi in purus lectus dictum porta; Commodo
                                            penatibus
                                            nec.
                                        </Paragraph>

                                        <BlockUI {...{
                                            block: true,
                                            overlayColor: 'primary',
                                            message: 'Processing...',
                                            el: '#block_1'
                                        }}/>
                                    </Section>
                                </Portlet>
                                <Portlet {...{
                                    header: '页面遮罩'
                                }} >
                                    <Paragraph>通过 <Code>el</Code> 属性设置为 <Code>body</Code>，可以实现页面遮罩。</Paragraph>
                                    <BlockUI {...{
                                        block: false,
                                        overlayColor: 'primary',
                                        message: 'Processing...',
                                        el: 'body'
                                    }}/>
                                </Portlet>
                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default BlockUIPage;