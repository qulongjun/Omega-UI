import React from 'react'



import Aside from './demo/pages/_aside';
import StateColors from './demo/pages/base/_stateColors';
import Alerts from './demo/pages/base/_alerts';


const App = () => (
    <div className="m-grid m-grid--hor m-grid--root m-page">
        <Aside />
        <Alerts />
    </div>
);

export default App