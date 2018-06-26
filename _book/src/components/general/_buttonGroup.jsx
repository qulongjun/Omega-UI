import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from 'components/general/_button';

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
        vertical: PropTypes.bool,
        styles: PropTypes.object,
        classList: PropTypes.array,
        attr: PropTypes.object
    };

    render() {
        const _props = this.props;
        const {size, vertical, btns, onlyIcon, groupStyle, styles, classList, attr} = _props;
        let className = ['btn-group'];
        ['sm', 'lg'].includes(size) && className.push('btn-group-' + size);
        vertical && className.push('btn-group-vertical');
        groupStyle === 'air' ? className = className.concat(['m-btn-group--pill', 'm-btn-group--air']) : className.push('m-btn-group--' + groupStyle);
        return (
            <div className={className.join(' ')} style={styles} {...attr} role="group">
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