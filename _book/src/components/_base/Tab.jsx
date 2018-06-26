/**
 *
 * @Component: Tabs
 * @User: Longjun.Qu
 * @Date: 2018-06-18
 * @Time: 13:49
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from 'components/_element/Div';
import List from 'components/_element/List';
import {isNotExist, isArray, isObject, isString} from 'plugins/utils/_is';
import Link from "../_element/Link";
import 'plugins/config'
import ButtonDropdown from "../_button/ButtonDropdown";

import {_delivery} from 'plugins/utils/_props'
import {uuid} from 'plugins/utils/_random';
import Icon from "./Icon";

/**
 * {
 *
 *     items:{
 *      tab:'xxx',
 *      content:'xx'
 *     }
 *
 *
 *     items:{
 *      groupTabs:[
 *          ..
 *      ]
 *     }
 *
 *
 *    items:[
 *      {
 *          tab:'xxx',
 *          content:  xxx
 *      },{
 *          groupTabs:[
 *              {
 *                  tab:'xxx',
 *                  content:  xxx
 *              },
 *              ...
 *          ]
 *      }
 *    ]
 * }
 *
 *
 *
 */
class Tab extends Component {
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
        const {items, adjusted, pill} = _props;
        let _items = [];
        let _contents = [];
        if (!isNotExist(items)) {
            if (isArray(items)) {
                items.map((item, index) => {
                    if (isObject(item)) {
                        if (!isNotExist(item.groupTabs)) {
                            // 这是Dropdown
                            if (isArray(item.groupTabs)) {
                                let btnItems = [];
                                item.groupTabs.map((item, groupIndex) => {
                                    let {tab, state} = item;
                                    let _random = uuid(4, 16);
                                    btnItems.push({
                                        value: tab,
                                        label: 'a',
                                        href: '#m_tab_' + index + "_" + groupIndex + "_" + _random,
                                        _includeAttribute: {
                                            "data-toggle": "tab"
                                        }
                                    });
                                    _contents.push(<Div key={index + '-' + groupIndex + '-' + _random}
                                                        _includeAttribute={{
                                                            role: "tabpanel",
                                                            id: 'm_tab_' + index + "_" + groupIndex + "_" + _random
                                                        }}
                                                        _includeClass={['tab-pane', (!isNotExist(state) && ['active', 'disabled'].includes(state) ? state : null)]}>{item.content}</Div>)
                                });
                                let button = {
                                    label: 'a',
                                    _uniqueClass: ['nav-link', 'dropdown-toggle']
                                };
                                Object.assign(button, item.button);
                                let _temp = (
                                    <ButtonDropdown {...{
                                        button: button,
                                        _type: 'tab',
                                        items: btnItems
                                    }}/>
                                );
                                _items.push(Object.assign(_delivery(item, ['nav-item', 'dropdown'], null,), {value: _temp}));
                            }
                        } else {
                            let {tab, state, icon} = item;
                            let _random = uuid(4, 16);
                            let _temp = (
                                <Link {...{
                                    _uniqueClass: ['nav-link', (!isNotExist(state) && ['active', 'disabled'].includes(state) ? state : null)],
                                    _includeAttribute: {
                                        'data-toggle': 'tab'
                                    },
                                    href: '#m_tab_' + index + "_" + _random
                                }}>
                                    {icon && icon.show && (<Icon iconName={icon.name} {..._delivery(icon)}/>)}
                                    {tab}
                                </Link>
                            );
                            _items.push(Object.assign(_delivery(item, ['nav-item'], null,), {value: _temp}));

                            _contents.push(<Div key={index + "-" + _random} _includeAttribute={{
                                role: "tabpanel",
                                id: 'm_tab_' + index + "_" + _random
                            }}
                                                _includeClass={['tab-pane', (!isNotExist(state) && ['active', 'disabled'].includes(state) ? state : null)]}>{item.content}</Div>)
                        }
                    }
                });
            } else {
                if (isObject(items)) {
                    //只有一个tab和一个content或是一个Group
                    _items.push(items);
                }
            }
        }
        return (
            <Fragment>
                <List {..._delivery(_props, ['nav', 'nav-tabs', (adjusted ? 'nav-fill' : null), (pill && pill.show ? 'nav-pills' : null), (pill && pill.show && pill.color ? 'nav-pills--' + pill.color : null)], null, {
                    role: 'tablist'
                })} {...{
                    items: _items
                }}/>
                <Div _includeClass="tab-content">
                    {
                        _contents.map(item => {
                            return item;
                        })
                    }
                </Div>
            </Fragment>
        );
    }
}
export default Tab;