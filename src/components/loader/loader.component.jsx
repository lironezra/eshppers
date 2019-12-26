import React from 'react';

import './loader.styles.scss'

const Loader = React.memo(
    () => {
        return (
            <div className="loader"></div>
        );
    }
);

export default Loader;