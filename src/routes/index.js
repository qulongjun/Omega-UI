import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'


import Dashboard from '../demo/pages/_dashboard';
import StateColor from '../demo/pages/base/_stateColors';
import Typography from '../demo/pages/base/_typography';
import Tables from '../demo/pages/base/_tables';
import Progress from '../demo/pages/base/_progress';
import Alerts from '../demo/pages/base/_alerts';

import Div from "../components/_element/Div";
import Separator from "../components/_element/Separator";
import Text from "../components/_element/Text";
import Link from "../components/_element/Link";
import Code from "../components/_element/Code";
import Blockquote from "../components/_element/Blockquote";
import Title from "../components/_element/Title";
import Demo from "../demo/pages/_demo";

export default (
    <BrowserRouter>
        <div className="m-grid m-grid--hor m-grid--root m-page">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/StateColor" component={StateColor}/>
            <Route path="/Typography" component={Typography}/>
            <Route path="/Tables" component={Tables}/>
            <Route path="/Alerts" component={Alerts}/>
            <Route path="/Progress" component={Progress}/>
            <Demo>
                <Title {...{
                    level: 1
                }}>h1. 标题 1</Title>
            </Demo>
        </div>
    </BrowserRouter>
);