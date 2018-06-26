import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../_pages/_app';
export default (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </BrowserRouter>
)