/**
 *
 * @Component: Nav
 * @User: Longjun.Qu
 * @Date: 2018-06-18
 * @Time: 21:49
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import List from 'components/_element/List';
import {_delivery} from 'plugins/utils/_props';
import {isNotExist, isArray, isString, isObject} from 'plugins/utils/_is';
import Link from "../_element/Link";
import Icon from "./Icon";
import Text from 'components/_element/Text';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        const _props = this.props;
        const {items, type} = _props;
        let _items = [];
        !isNotExist(items) && isArray(items) && (items.map((item) => {
            const {icon, badge, text, type, state, bullet} = item;
            let value = null;
            switch (type) {
                case "section": {
                    value = (
                        <Fragment>
                            <Text {..._delivery(text, ['m-nav__section-text'])}>{text.value}</Text>
                        </Fragment>
                    );
                    _items.push({
                        value,
                        _includeClass: ['m-nav__section']
                    });
                    break;
                }
                case "separator": {
                    _items.push({
                        value: '',
                        _includeClass: ['m-nav__separator', 'm-nav__separator--fit']
                    });
                    break;
                }
                case "other": {
                    _items.push({
                        value: text.value,
                        _includeClass: ['m-nav__item']
                    });
                    break;
                }
                default: {
                    value = (
                        <Fragment>
                            <Link _uniqueClass="m-nav__link" href={(text && text.href) || ''}>
                                {!isNotExist(icon) && icon.show &&
                                <Icon iconName={icon.name} {..._delivery(icon, ['m-nav__link-icon'])}/>}
                                {!isNotExist(bullet) && bullet.show &&
                                <Text {..._delivery(bullet, ['m-nav__link-bullet', 'm-nav__link-bullet--' + bullet.type])}>
                                    <Text>&nbsp;</Text>
                                </Text>}
                                {
                                    !isNotExist(badge) ? (<Text _includeClass="m-nav__link-title">
                                        <Text _includeClass="m-nav__link-wrap">
                                            <Text {..._delivery(text, ['m-nav__link-text'])}>
                                                {text && text.value}
                                            </Text>
                                            <Text _includeClass="m-nav__link-badge">
                                                {badge}
                                            </Text>
                                        </Text>
                                    </Text>) : (
                                        <Text {..._delivery(text, ['m-nav__link-text'])}>
                                            {text && text.value}
                                        </Text>
                                    )
                                }
                            </Link>
                            {type === 'child' ? text.child : ''}
                        </Fragment>
                    );
                    _items.push({
                        value,
                        _includeClass: ['m-nav__item', (!isNotExist(state) && ['active', 'disabled'].includes(state) ? 'm-nav__item--' + state : null)]
                    })
                }
            }
        }));
        return (
            <Fragment>
                {type === 'sub' ? (
                    <List {..._delivery(_props, ['m-nav__sub'])} {...{
                        items: _items
                    }}/>
                ) : (
                    <List {..._delivery(_props, ['m-nav'])} {...{
                        items: _items
                    }}/>
                )}
            </Fragment>
        );
    }
}
export default Nav;