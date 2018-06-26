import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from 'components/general/_button';
import Icon from 'components/general/_icon';

import 'plugins/config'

class ButtonDropdown extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        split: true,
        direction: 'down',
        button: {
            color: 'primary',
            value: 'Test',
            size: 'lg'
        },
        toggle: {
            color: 'primary',
        },
        items: [
            {
                type: 'Button 1',
                value: 'Action',
                icon: 'la la-cloud-upload'
            },
            {
                type: 'Button 2',
                value: 'Anther action',
                icon: 'la la-bell'
            },
            {
                type: 'divider'
            },
            {
                type: 'Button 3',
                value: 'Something else action',
                icon: 'la la-cloud-upload'
            }
        ]
    };

    static propTypes = {
        split: PropTypes.bool,
        direction: PropTypes.oneOf(['top', 'down', 'left', 'right']),
        button: PropTypes.object,
        toggle: PropTypes.object,
        items: PropTypes.array
    };

    render() {
        const items = this.props.items,
            split = this.props.split,
            direction = this.props.direction;
        return (
            <div className={'btn-group ' + ' drop' + direction}>
                <Button _class={!split ? ["dropdown-toggle"] : []} {...this.props.button} _attr={!split ? {
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                    } : null} element={'button'}/>

                {split && <Button _class={["dropdown-toggle", "dropdown-toggle-split"]} _attr={{
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                }} element={'button'} value='' {...this.props.toggle} size={this.props.button.size || 'normal'}/>}

                <div className="dropdown-menu" {...{"aria-labelledby": "dropdownMenuButton"}}>
                    {items.map((item, index) => (
                        <Item key={index} {...item}/>
                    ))}
                </div>
            </div>
        );
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(event) {
        this.props.handle.click && this.props.handle.click(event);
        event.preventDefault();
    }

    render() {
        if (this.props.type === 'divider') {
            return (
                <div className="dropdown-divider"></div>
            );
        } else {
            return (
                <a href="javascript:;" className="dropdown-item" onClick={this.handleEvent}>
                    {this.props.icon && <Icon iconName={this.props.icon}/>}
                    {this.props.value}
                </a>
            );
        }
    }
}


export default ButtonDropdown;