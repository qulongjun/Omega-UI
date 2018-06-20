/**
 *
 * @Component: SubHeader
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 10:39
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from 'components/_element/Div';
import Button from 'components/_button/Button';
import Title from 'components/_element/Title';

import {_delivery} from 'plugins/utils/_props';

class SubHeader extends Component {
    render() {
        const _props = this.props;
        const {title} = _props;
        const router = this.context.router;
        return (
            <Fragment>
                <Div {..._delivery(_props, 'm-subheader')}>
                    <Div _includeClass={['d-flex', 'align-items-center']}>
                        <Div _includeClass="mr-auto">
                            <Title level={3} _includeClass={['m-subheader__title', 'm-subheader__title--separator']}>
                                {title}
                            </Title>
                        </Div>
                        <Button {...{
                            value: '返回',
                            btnColor: 'outline-metal',
                            _handle: {
                                onClick: () => {
                                    router.history.push('/');
                                }
                            }
                        }}/>
                    </Div>
                </Div>
            </Fragment>
        );
    }
}
SubHeader.contextTypes = {
    router: PropTypes.object
};

export default SubHeader;