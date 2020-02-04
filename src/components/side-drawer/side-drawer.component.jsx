import React from 'react';

import { NavLink } from 'react-router-dom';

import './side-drawer.styles.scss';


const SideDrawer = props =>{
    let drawerClasses = ['side-drawer'];
    if (props.visible) {
        drawerClasses = ['side-drawer', 'visible'];
    }
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li>
                    <NavLink className='side-drawer-option' to='/shop' onClick={props.closeSideDrawer}>
                        SHOP                    
                    </NavLink>   
                </li>
                <li>
                    <NavLink className='side-drawer-option' to='/women' onClick={props.closeSideDrawer}>
                        WOMEN                   
                    </NavLink>   
                </li>
                <li>
                    <NavLink className='side-drawer-option' to='/men' onClick={props.closeSideDrawer}>
                        MEN                   
                    </NavLink> 
                </li>
            </ul>
        </nav>
    );
} 

export default SideDrawer;