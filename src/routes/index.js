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
import BlockUI from '../demo/pages/base/_blockUI';
import Spinner from '../demo/pages/base/_spinners';

import DefaultStyle from '../demo/pages/_button/_buttonBase/_defaultStyle';
import Square from '../demo/pages/_button/_buttonBase/_square';
import Pill from '../demo/pages/_button/_buttonBase/_pill';
import Air from '../demo/pages/_button/_buttonBase/_air';

import ButtonGroup from '../demo/pages/_button/_buttonGroup'
import LineawesomeIcon from '../demo/pages/_button/_buttonIcon/_lineawesomeIcon';
import FontawesomeIcon from '../demo/pages/_button/_buttonIcon/_fontAwesomeIcon';
import FlaticonIcon from '../demo/pages/_button/_buttonIcon/_flaticonIcon';
import ButtonDropdown from '../demo/pages/_button/_buttonDropdown';
import BootstrapTabs from '../demo/pages/base/_tabs/_bootstrapTabs';
import LineTabs from '../demo/pages/base/_tabs/_lineTabs';
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
            <Route path="/Tooltip" component={Tooltip}/>
            <Route path="/Scrollable" component={Scrollable}/>
            <Route path="/BlockUI" component={BlockUI}/>
            <Route path='/Spinner' component={Spinner}/>

            <Route path='/base/tabs/BootstrapTabs' component={BootstrapTabs}/>
            <Route path='/base/tabs/LineTabs' component={LineTabs}/>

            <Route path="/buttons/base/default" component={DefaultStyle}/>
            <Route path="/buttons/base/square" component={Square}/>
            <Route path='/buttons/base/pill' component={Pill}/>
            <Route path='/buttons/base/air' component={Air}/>
            <Route path='/buttons/buttonGroup' component={ButtonGroup}/>
            <Route path='/buttons/buttonIcon/LineawesomeIcon' component={LineawesomeIcon}/>
            <Route path='/buttons/buttonIcon/FontawesomeIcon' component={FontawesomeIcon}/>
            <Route path='/buttons/buttonIcon/FlaticonIcon' component={FlaticonIcon}/>
            <Route path='/buttons/buttonDropdown' component={ButtonDropdown}/>
        </div>
    </BrowserRouter>
);