import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'; 
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({ loading }) => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
            {/* {
                loading ?            
                <div className='cover-spin'>
                    <Loader />
                </div>
                : null
            } */}
        </div>
    );
};

export default SignInAndSignUpPage;