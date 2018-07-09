import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../pages/App';

export default (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </BrowserRouter>
)