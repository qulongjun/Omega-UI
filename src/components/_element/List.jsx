/**
 *
 * @Component: List
 * @User: Longjun.Qu
 * @Date: 2018-06-18
 * @Time: 14:28
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_delivery, _sysBind} from 'plugins/utils/_props';
import {isNotExist, isArray, isObject, isString} from 'plugins/utils/_is';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        items: [],
        label: 'ul'
    };
    static propTypes = {
        items: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ]),
        label: PropTypes.oneOf(['ul', 'ol'])
    }

    render() {
        const _props = this.props;
        const {label, items} = _props;
        return (
            <Fragment>
                {label === 'ul' ? (
                    <ul {..._sysBind(_props)}>
                        {
                            !isNotExist(items) && (isArray(items) ? (items.map((item, index) => {
                                if (isObject(item)) {
                                    return (<li key={index} {..._sysBind(item)}>{item.value}</li>)
                                } else {
                                    return (<li key={index}>{item}</li>);
                                }
                            })) : isObject(items) ? (<li {..._sysBind(items)}>{items.value}</li>) : (<li>{items}</li>))
                        }
                    </ul>
                ) : (
                    <ol {..._sysBind(_props)}>
                        {
                            !isNotExist(items) && (isArray(items) ? (items.map((item, index) => {
                                if (isObject(item)) {
                                    return (<li key={index} {..._sysBind(item)}>{item.value}</li>)
                                } else {
                                    return (<li key={index}>{item}</li>);
                                }
                            })) : isObject(items) ? (<li {..._sysBind(items)}>{items.value}</li>) : (<li>{items}</li>))
                        }
                    </ol>
                )}
            </Fragment>
        );
    }
}

export default List;