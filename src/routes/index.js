import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'


import Dashboard from '../demo/pages/_dashboard';
import StateColor from '../demo/pages/base/_stateColors';
import Typography from '../demo/pages/base/_typography';
import Tables from '../demo/pages/base/_tables';
import Modal from '../demo/pages/base/_modals';
import Progress from '../demo/pages/base/_progress';
import Alerts from '../demo/pages/base/_alerts';
import Popover from '../demo/pages/base/_popover';
import Tooltip from '../demo/pages/base/_tooltip';
import Scrollable from '../demo/pages/base/_scrollable';
import DefaultStyle from '../demo/pages/_button/_buttonBase/_defaultStyle';

export default (
    <BrowserRouter>
        <div className="m-grid m-grid--hor m-grid--root m-page">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/StateColor" component={StateColor}/>
            <Route path="/Typography" component={Typography}/>
            <Route path="/Tables" component={Tables}/>
            <Route path="/Modal" component={Modal}/>
            <Route path="/Alerts" component={Alerts}/>
            <Route path="/Progress" component={Progress}/>
            <Route path="/Popover" component={Popover}/>
            <Route path="/buttons/base/default" component={DefaultStyle}/>
            <Route path="/Tooltip" component={Tooltip}/>
            <Route path="/Scrollable" component={Scrollable}/>
        </div>
    </BrowserRouter>
);