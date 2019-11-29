import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, signInWithFacebook, signInWithTwitter } from '../../firebase/firebase.utils';
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I alreadt have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label='email'
                        required />

                    <FormInput 
                        name='password' 
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        label='password'
                        required />

                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
                <div className='social-login'>
                    <h2 className='title'>Login</h2>
                    <p>With your social media</p>
                    <CustomButton onClick={signInWithGoogle} authWith='google'>Google</CustomButton>
                    <CustomButton onClick={signInWithFacebook} authWith='facebook'>Facebook</CustomButton>
                    <CustomButton onClick={signInWithTwitter} authWith='twitter'>Twitter</CustomButton>
                </div>
            </div>
        );
    }
}

export default SignIn;