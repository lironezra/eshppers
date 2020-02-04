import React from 'react';

import './drawer-toggle-button.styles.scss' 

const DrawerToggleButton = props => (
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line' />
        <div className='toggle-button-line' />
        <div className='toggle-button-line' />
    </button>
);

export default DrawerToggleButton;