import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Progress extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        start: 0,
        end: 100,
        size: "normal",
        items: []
    };

    static propTypes = {
        start: PropTypes.number,
        end: PropTypes.number,
        size: PropTypes.oneOf(['lg', 'sm', 'normal']),
        items: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]),
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object
    };

    render() {
        const _props = this.props;
        const {
            size, height, start, end, item, styles, classList, attr
        } = _props;
        let className = ['progress'];
        ['lg', 'sm'].includes(size) && className.push('m-progress--' + size);
        className = className.concat(classList);
        let style = {height};
        Object.assign(style, styles);
        let single = null;
        if (Array.isArray(item)) {
            single = (item.map((item, index) => (
                <BarItem key={index} {...item} start={start} end={end}/>)));
        } else {
            if (typeof item === "object") {
                single = (<BarItem {...item} start={start} end={end}/>);
            }
        }
        return (
            <div className={className.join(' ')} {...attr} style={style}>
                {single}
            </div>
        );
    }
}

class BarItem extends Component {
    render() {
        const pattern = this.props.pattern === 'striped' ? ' progress-bar-striped' : (this.props.pattern === 'animated' ? ' progress-bar-striped progress-bar-animated' : '');
        return (
            <div className={'progress-bar' + ' m--bg-' + this.props.color + (pattern ? ' progress-bar-' + pattern : '')}
                 style={{width: (this.props.now / (this.props.end - this.props.start) * 100 + '%')}}
                 role="progressbar" {
                     ...{
                         "aria-valuenow": this.props.now,
                         "aria-valuemin": this.props.start,
                         "aria-valuemax": this.props.end
                     }
                 }>
                {this.props.showValue && (this.props.now / (this.props.end - this.props.start) * 100 + '%')}
            </div>
        );
    }
}

export default Progress;