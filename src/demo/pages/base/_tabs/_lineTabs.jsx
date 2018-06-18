/**
 *
 * @Demo:
 * @User: Longjun.Qu
 * @Date: 2018-06-18
 * @Time: 21:32
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
import Demo from "components/_framework/Demo";

import Portlet from 'components/_portlet/Portlet';


import 'sass/_demo.scss';


class LineTabs extends Component {
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
                    <SubHeader title="行间选项卡"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: ''
                                }} >
                                    <Section>

                                    </Section>

                                </Portlet>
                            </Div>
                            <Div _includeClass="col-xl-6">

                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default LineTabs;