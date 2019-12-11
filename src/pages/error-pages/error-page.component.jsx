import React from 'react';
import './error-page.styles.scss';
 
const ErrorPage = ({ errorCode, errorMsg }) => {

    return (
        <div className='error-container'>
            <p className='error'>SOMETHING WENT WRONG!!!</p>
            <p className='error'>ERROR CODE: {errorCode}</p>
            <p className='error'>{errorMsg}</p>
        </div>
    )
}
 
export default ErrorPage;