import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './_progressBar.scss'

class ProgressBar extends Component {
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
        items: PropTypes.array
    };

    render() {
        const size = ['lg', 'sm'].includes(this.props.size) ? this.props.size : '',
            items = this.props.items;
        const className = 'progress ' + (size ? ' m-progress--' + size : '');
        return (
            <div className={className} style={{height: this.props.height}}>
                {items.map((item, index) => (
                    <BarItem key={index} {...item} start={this.props.start} end={this.props.end}/>))}
            </div>
        );
    }
}

class BarItem extends Component {
    render() {
        const pattern = this.props.pattern === 'striped' ? ' progress-bar-striped' : (this.props.pattern === 'animated' ? ' progress-bar-striped progress-bar-animated' : '');
        return (
            <div className={'progress-bar' + ' bg-' + this.props.color + (pattern ? ' progress-bar-' + pattern : '')}
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
export default ProgressBar;