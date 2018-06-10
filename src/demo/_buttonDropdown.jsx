import React, {Component} from 'react'

import ButtonDropdown from 'components/general/buttonDropdown/_buttonDropdown'

import './_demo.scss'

const demoConfig = {
    split: true,
    direction: 'down',
    button: {
        color: 'outline-success',
        value: 'Test',
        size: 'lg',
        handle: {
            click: (e) => {
                console.log(e)
            }
        }
    },
    toggle: {
        color: 'outline-success',
        handle: {
            click: (e) => {
                console.log(e)
            }
        }
    },
    items: [
        {
            type: 'item',
            value: 'Action',
            icon: 'la la-cloud-upload',
            handle: {
                click: (e) => {
                    console.log(e)
                }
            }
        },
        {
            type: 'item',
            value: 'Anther action',
            icon: 'la la-bell',
            handle: {
                click: (e) => {
                    console.log(e)
                }
            }
        },
        {
            type: 'divider'
        },
        {
            type: 'item',
            value: 'Something else action',
            icon: 'la la-cloud-upload',
            handle: {
                click: (e) => {
                    console.log(e)
                }
            }
        }
    ]
};

class ButtonDropdownDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        Object.assign(demoConfig, this.props);
        return (
            <div className="m-demo">
                <div className="m-demo__preview">
                    <div className="row">
                        <div className="col">
                            <ButtonDropdown {...demoConfig}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonDropdownDemo;