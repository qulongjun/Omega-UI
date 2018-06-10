import React from 'react'

import ButtonDemo from 'demo/_button';
import IconDemo from 'demo/_icon'
import ButtonGroupDemo from 'demo/_buttonGroup';
import ButtonDropdownDemo from 'demo/_buttonDropdown'
import Badge from 'components/base/badge/_badge';

import ProgressBar from './components/base/progressBar/_progressBar'


const config = {
    start: 0,
    end: 100,
    size: "normal",
    // height: "45px",
    items: [{
        now: "45",
        color: "danger",
        pattern: 'striped'
    }, {
        now: "15",
        color: "info",
        pattern: ''
    }, {
        now: "20",
        color: "primary",
        pattern: 'animated'
    }]
}

const App = () => (
    <div>
        <ProgressBar {...config}/>
    </div>
);

export default App