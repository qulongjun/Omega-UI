/**
 *
 * @Component: Content
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 10:31
 *
 */

import React, {Component, Fragment} from 'react';

import Title from "components/_element/Title";
import Div from 'components/_element/Div';
import Text from 'components/_element/Text';

import {_delivery} from 'plugins/utils/_props';

class Section extends Component {
    render() {
        const _props = this.props;
        const {title, describe, children} = _props;
        return (
            <Fragment>
                <Div {..._delivery(_props, 'm-section')}>
                    <Title level={3} _includeClass='m-section__heading'>
                        {title}
                    </Title>
                    <Text _includeClass='m-section__sub'>
                        {describe}
                    </Text>
                    <Div _includeClass='m-section__content'>
                        {children}
                    </Div>
                </Div>
            </Fragment>
        );
    }
}

export default Section;