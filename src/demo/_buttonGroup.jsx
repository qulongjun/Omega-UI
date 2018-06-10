import React, {Component} from 'react'

import ButtonGroup from 'components/general/buttonGroup/_buttonGroup'

import './_demo.scss'

const demoConfig = {
    btns: [
        {color: 'secondary', icon: 'la la-file-text-o'},
        {color: 'secondary', icon: 'la la-bold'},
        {color: 'secondary', icon: 'la la-paperclip'},
        {color: 'success', icon: 'la la-floppy-o'},
        {color: 'info', icon: 'la la-files-o'},
        {color: 'danger', icon: 'la la-header'}
    ],
    onlyIcon: true,
    groupStyle: 'normal',
    size: 'lg',
    vertical: false
};

class ButtonGroupDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        Object.assign(demoConfig, this.props);
        return (
            <ButtonGroup {...demoConfig}/>
        );
    }
}

export default ButtonGroupDemo;