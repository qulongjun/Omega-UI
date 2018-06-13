import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'


import Dashboard from '../demo/pages/_dashboard';
import StateColor from '../demo/pages/base/_stateColors';
import Typography from '../demo/pages/base/_typography';
import Tables from '../demo/pages/base/_tables';
import Progress from '../demo/pages/base/_progress';
import Alerts from '../demo/pages/base/_alerts';

export default (
    <BrowserRouter>
        <div className="m-grid m-grid--hor m-grid--root m-page">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/StateColor" component={StateColor}/>
            <Route path="/Typography" component={Typography}/>
            <Route path="/Tables" component={Tables}/>
            <Route path="/Alerts" component={Alerts}/>
            <Route path="/Progress" component={Progress}/>
        </div>
    </BrowserRouter>
);