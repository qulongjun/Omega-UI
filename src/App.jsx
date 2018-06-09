import React from 'react'
import {hot} from 'react-hot-loader'

import {Provider} from 'react-redux'
import store from '$redux/store'

const App = () => (
    <div>Hello World</div>
);

const reduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default hot(module)(reduxApp)
