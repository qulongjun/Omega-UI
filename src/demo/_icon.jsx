import React, {Component} from 'react'

import Icon from 'components/general/icon/_icon'
import './_demo.scss'


const demoConfig = {};

class IconDemo extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        value: 'icon'
    };

    render() {
        Object.assign(demoConfig, this.props);
        return (
            <div className="m-demo-icon">
                <div className="m-demo-icon__preview">
                    <Icon {...demoConfig}/>
                </div>
                <div className="m-demo-icon__class" style={this.props.textStyle}>
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default IconDemo;