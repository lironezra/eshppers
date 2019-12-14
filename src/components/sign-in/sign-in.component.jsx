import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {loginUser}  from '../../redux/auth/auth.actions.js'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, signInWithFacebook, signInWithTwitter } from '../../firebase/firebase.utils';

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
        this.props.onLogin(this.state.email, this.state.password);
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { errorAPI } = this.props;

        return (
            <div className='sign-in'>
                <h2 className='title'>ALREADY HAVE AN ACCOUNT</h2>
                <span>SIGN IN WITH EMAIL</span>
                <form onSubmit={this.handleSubmit}>
                    {errorAPI ? <p className='error-description'>{errorAPI.message}</p> : null}
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

                    <CustomButton btnType='regular' type='submit'>SIGN IN</CustomButton>
                </form>
                <div className='social-login'>
                    <hr className='hr-with-text' />
                    <h2 className='qa-or'>OR</h2>
                    <h2 className='title'>SIGN IN WITH...</h2>
                    <CustomButton onClick={signInWithGoogle} btnType='google-loggin'>Google</CustomButton>
                    <CustomButton onClick={signInWithFacebook} btnType='facebook-login'>Facebook</CustomButton>
                    <CustomButton onClick={signInWithTwitter} btnType='twitter-login'>Twitter</CustomButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorAPI: state.auth.loginError
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(loginUser(email, password))
    };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));