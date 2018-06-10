import React from 'react'

import ButtonDemo from 'demo/_button';
import IconDemo from 'demo/_icon'
import ButtonGroupDemo from 'demo/_buttonGroup';
const App = () => (
    <div>
        <ButtonDemo color="danger"/>
        <IconDemo iconName="socicon-facebook" textStyle={{fontSize: '50px'}} style={{color: 'red'}}/>
        <ButtonGroupDemo/>
    </div>
);

export default App