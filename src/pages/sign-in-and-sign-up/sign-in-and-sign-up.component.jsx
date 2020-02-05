import React, { useEffect }from 'react';

import Tabs from '../../components/tabs/tabs.component';

import SignIn from '../../components/sign-in/sign-in.component'; 
import SignUp from '../../components/sign-up/sign-up.component';
import Loader from '../../components/loader/loader.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({ loading }) => {

    useEffect(() => {
        document.body.style.backgroundColor = '#eee';

        return () => {
            document.body.style.backgroundColor = 'white';
        };
    }, []);

    return (
        <div className='sign-in-and-sign-up'>
            <div className='tabs-container'>
                <Tabs>
                    <div label="NEW TO ESHOPPERS?">
                        <SignUp />
                    </div>
                    <div label="ALREADY REGISTERED?">
                        <SignIn />
                    </div>
                </Tabs>
            </div>
            {
                loading ?            
                <div className='cover-spin'>
                    <Loader />
                </div>
                : null
            }
        </div>
    );
};

export default SignInAndSignUpPage;