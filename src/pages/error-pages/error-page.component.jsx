import React from 'react';
import './error-page.styles.scss';
 
const ErrorPage = ({ errorCode, errorMsg, location }) => {
    const errorFrom = location.state.from.pathname;
    switch (errorFrom) {
        case '/cart':
            return (
                <div>
                    <p className='error'>PLEASE LOG IN FOR WATCH YOUR CART!!!</p>
                </div>
            );    
        default:
            break;
    }

    return (
        <div className='error-container'>
            {errorFrom}
            {/* <p className='error'>SOMETHING WENT WRONG!!!</p>
            <p className='error'>ERROR CODE: {errorCode}</p>
            <p className='error'>{errorMsg}</p> */}
        </div>
    )
}
 
export default ErrorPage;