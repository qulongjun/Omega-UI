/**
 *
 * @Component: Table
 * @User: Longjun.Qu
 * @Date: 2018-06-15
 * @Time: 14:22
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Div from 'components/_element/Div';

import {_delivery, _sysBind} from 'plugins/utils/_props';
import {isArray, isObject, isString, isNotExist} from 'plugins/utils/_is';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {};

    render() {
        const _props = this.props;
        const {responsive, inverse, size, stripe, bordered, hover, separateColor, borderColor, head, data, showIndex} = _props;
        let _sysClass = ['table', 'm-table'];
        inverse && _sysClass.push('table-inverse');
        size === 'sm' && _sysClass.push('table-sm');
        stripe && _sysClass.push('table-striped');
        bordered && _sysClass.push('table-bordered');
        hover && _sysClass.push('table-hover');
        separateColor && _sysClass.push('m-table--head-separator-' + separateColor);
        borderColor && _sysClass.push('table-bordered') && _sysClass.push('m-table--border-' + borderColor);
        isObject(head) && head.hideBorder && _sysClass.push('m-table--head-no-border');
        isObject(head) && head.bgColor && _sysClass.push('m-table--head-bg-' + head.bgColor);
        return (
            <Fragment>
                <Div _includeClass={responsive ? "table-responsive" : []}>
                    <table {..._sysBind(_props, _sysClass)}>
                        {!isNotExist(head) && <Thead head={head} showIndex={showIndex}/>}
                        {!isNotExist(data) && <Tbody data={data} showIndex={showIndex}/>}
                    </table>
                </Div>
            </Fragment>
        );
    }
}
class Thead extends Component {
    render() {
        const _props = this.props;
        const {head, showIndex} = _props;
        const {inverse} = head;
        const values = isArray(head) ? head : (isObject(head) ? head.names : null);
        let _sysClass = [];
        inverse && _sysClass.push('thead-inverse');

        return (
            <Fragment>
                <thead {..._sysBind(_props, _sysClass)}>
                <tr {..._sysBind(head)}>
                    {showIndex && <th>#</th>}
                    {!isNotExist(values) && values.map((item, index) => {
                        if (!isNotExist(item) && isString(item)) {
                            return (<th key={index}>{item}</th>);
                        }
                        if (!isNotExist(item) && isObject(item)) {
                            let name = item.name;
                            return (<th key={index} {..._sysBind(item)}>{name}</th>);
                        }
                    })}
                </tr>
                </thead>
            </Fragment>
        );
    }
}
class Tbody extends Component {
    render() {
        const _props = this.props;
        const {data, showIndex} = _props;
        const values = isArray(data) ? data : (isObject(data) ? data.values : null);
        let _domData = isObject(data) && _sysBind(data);
        return (
            <Fragment>
                <tbody {..._domData}>
                {
                    !isNotExist(values) && values.map((item, index) => {
                        if (isArray(item)) {
                            return (<TRows key={index} index={index} data={item} showIndex={showIndex}/>);
                        } else if (isObject(item)) {
                            let tdValues = item.values;
                            if (isArray(tdValues)) {
                                return (
                                    <TRows key={index} index={index} data={tdValues} {...item} showIndex={showIndex}/>)
                            }
                        }
                    })
                }
                </tbody>
            </Fragment>
        );
    }
}

class TRows extends Component {
    render() {
        const _props = this.props;
        const {data, bgColor, showIndex, index} = _props;
        return (
            <Fragment>
                <tr {..._sysBind(_props, bgColor ? ['m-table__row--' + bgColor] : [])}>
                    {showIndex && (<td>{index + 1}</td>)}
                    {
                        !isNotExist(data) && data.map((item, index) => {
                            if (isObject(item)) {
                                return <td key={index} {..._sysBind(item)}>{item.value}</td>
                            } else {
                                return <td key={index}>{item}</td>
                            }
                        })
                    }
                </tr>
            </Fragment>
        );
    }
}

export default Table;