/**
 *
 * @Component: Table
 * @User: Longjun.Qu
 * @Date: 2018-06-12
 * @Time: 15:51
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};
    static propTypes = {
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object
    };

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
        const {responsive, head, data, inverse, size, stripe, bordered, hover, borderColor, styles, classList, attr} = _props;
        const {bgColor, separateColor,hideBorder} = head;
        let className = ['table', 'm-table'];
        inverse && className.push('table-inverse');
        size === 'sm' && className.push('table-sm');
        stripe && className.push('table-striped');
        bordered && className.push('table-bordered');
        hover && className.push('table-hover');
        bgColor && className.push('m-table--head-bg-' + bgColor);
        separateColor && className.push('m-table--head-separator-' + separateColor);
        borderColor && className.push('table-bordered') && className.push('m-table--border-' + borderColor);
        hideBorder && className.push('m-table--head-no-border');
        className = className.concat(classList);
        return (
            <Fragment>
                <div className={responsive ? "table-responsive" : ""}>
                    <table className={className.join(' ')}>
                        {head && <Thead head={head}/>}
                        {data && <Tbody data={data}/>}
                    </table>
                </div>
            </Fragment>
        );
    }
}

class Thead extends Component {
    render() {
        const _props = this.props;
        const {head} = _props;
        const values = Array.isArray(head) ? head : head.value;
        return (
            <Fragment>
                <thead>
                <tr>
                    {values.map((item, index) => {
                        switch (typeof item) {
                            case "object":
                                let {value} = item;
                                return (<th key={index}>{value}</th>)
                                break;
                            default:
                                return (
                                    <th key={index}>{item}</th>
                                )
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
        const {data} = _props;
        return (
            <Fragment>
                <tbody>
                {data.map((item, index) => {
                    if (Array.isArray(item)) {
                        return item && <TRows key={index} data={item}/>
                    } else {
                        let {bgColor} = item;
                        return item && <TRows key={index} data={item.value} bgColor={bgColor}/>;
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
        const {data, bgColor} = _props;
        return (
            <Fragment>
                <tr className={bgColor ? "m-table__row--" + bgColor : ''}>
                    {data.map((item, index) => {
                        if (typeof item === "object") {
                            let {value} = item;
                            return <td key={index}>{value}</td>
                        }
                        else {
                            return <td key={index}>{item}</td>
                        }
                    })}
                </tr>
            </Fragment>
        );
    }
}

export default Table;