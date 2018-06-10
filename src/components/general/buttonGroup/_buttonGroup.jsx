import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '../button/_button';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        btns: [
            {color: 'primary', value: 'button1'},
            {color: 'primary', value: 'button2'},
            {color: 'primary', value: 'button3'}
        ],
        onlyIcon: false,
        groupStyle: 'normal',
        size: 'normal',
        vertical: false
    };
    static propTypes = {
        btns: PropTypes.array,
        onlyIcon: PropTypes.bool,
        groupStyle: PropTypes.string,
        size: PropTypes.string,
        vertical: PropTypes.bool
    };

    render() {
        const size = this.props.size,
            vertical = this.props.vertical,
            btns = this.props.btns,
            onlyIcon = this.props.onlyIcon;
        const groupStyle = (this.props.groupStyle === 'pill' ? ' m-btn-group--pill' : (this.props.groupStyle === 'air' ? ' m-btn-group--pill m-btn-group--air' : ''));
        const className =
            'btn-group '
            + (size === 'lg' || size === 'sm' ? ' btn-group-' + size : '')
            + groupStyle
            + (vertical ? ' btn-group-vertical' : '');

        return (
            <div className={className} role="group">
                {
                    btns.map((btnItem, btnIndex) => {
                        Object.assign(btnItem, {
                            btnStyle: btnItem.btnStyle || (this.props.groupStyle === 'square' ? 'square' : '') || "normal"
                        });
                        if (onlyIcon)
                            Object.assign(btnItem, {
                                isGroup: true,
                                value: "",
                            });
                        return (<Button key={btnIndex} {...btnItem} />);
                    })
                }
            </div>
        );
    }
}
export default ButtonGroup;