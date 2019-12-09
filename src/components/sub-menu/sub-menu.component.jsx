import React from 'react';

import './sub-menu.styles.scss'

const SubMenu = (props) => {
    return (
        <div className="dropdown-content">
            {props.children}
      </div>
    );
}

export default SubMenu;