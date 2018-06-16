/**
 *
 * @Component: Portlet
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 13:12
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from 'components/_element/Div';
import Title from 'components/_element/Title'
import Scroll from 'components/_base/Scroll';
import {_delivery} from 'plugins/utils/_props';
import {isString, isObject, isNotExist} from 'plugins/utils/_is';

class Portlet extends Component {
    render() {
        const _props = this.props;
        const {header, scroll, children} = _props;

        return (
            <Fragment>
                <Div {..._delivery(_props, ['m-portlet', 'm-portlet--mobile'])}>
                    {header && isObject(header) && <PortletHeader {...header}/>}
                    {header && isString(header) && <PortletHeader {...{title: header}}/>}
                    <Div _includeClass="m-portlet__body">
                        {!isNotExist(scroll) && scroll.show ? <Scroll {...scroll}>
                            {children}
                        </Scroll> : children}

                    </Div>

                </Div>

            </Fragment>
        );
    }
}

class PortletHeader extends Component {
    render() {
        const _props = this.props;
        const {title, describe} = _props;
        return (
            <Fragment>
                <Div _includeClass="m-portlet__head">
                    <Div _includeClass="m-portlet__head-caption">
                        <Div _includeClass="m-portlet__head-title">
                            <Title level={3} _includeClass="m-portlet__head-text">
                                {title}
                                {describe && (<small>{describe}</small>)}
                            </Title>
                        </Div>
                    </Div>
                </Div>
            </Fragment>
        );
    }
}
export default Portlet;