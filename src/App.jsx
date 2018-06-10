import React from 'react'

import ButtonDemo from 'demo/_button';
import IconDemo from 'demo/_icon'

const App = () => (
    <div>
        <ButtonDemo color="danger"/>
        <IconDemo  iconName="socicon-facebook" textStyle={{fontSize:'50px'}} style={{color:'red'}}/>
    </div>
);

export default App