import React from 'react';
import { withRouter } from 'react-router-dom';

import './not-found.styles.scss';

const NotFoundPage = ({ history }) => {

    function handleBackToHomeClicked() {
        history.replace('/');
        window.location.reload(true);
    }

    return (
        <div className='not-found-container'>
            <div className='not-found-wrapper'>
                <div className='notfound-404'>
                    <h1>
                        4
                        <span></span>
                        4
                    </h1>
                </div>
                <h2>OOPS! PAGE NOT BE FOUND</h2>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                <button onClick={() => handleBackToHomeClicked()}>Go back to home page</button>
            </div>
        </div>
    )
}

export default withRouter(NotFoundPage);

