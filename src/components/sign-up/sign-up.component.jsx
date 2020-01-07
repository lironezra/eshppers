import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import  { signupUser } from '../../redux/auth/auth.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ErrorBox from '../error-box/error-box.component';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: null
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const newUser = {
            displayName, 
            email, 
            password, 
            confirmPassword
        };

        if(newUser.password !== newUser.confirmPassword) {
            this.setState({error: 'Password do not match!'});
            return;
        }

        this.props.onSignup(newUser);
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword, error} = this.state;
        const { errorAPI } = this.props;
        return (
            <div className='sign-up'>
                <h2 className='title'>DO NOT HAVE AN ACCOUNT</h2>
                <span>SIGN UP WITH YOUR EMAIL</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    { error ? <ErrorBox>{error}</ErrorBox> : null }
                    { errorAPI ? <ErrorBox>{errorAPI.message}</ErrorBox> : null }
                    <FormInput 
                        type='text'
                        name='displayName' 
                        value={displayName} 
                        handleChange={this.handleChange}
                        label='Display Name'
                        required />                    
                    <FormInput 
                        type='email'
                        name='email' 
                        value={email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required />                        
                    <FormInput 
                        type='password'
                        name='password' 
                        value={password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required />
                    <FormInput 
                        type='password'
                        name='confirmPassword' 
                        value={confirmPassword} 
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required />                    
                    <CustomButton btnType='regular' type='submit'>SIGN UP</CustomButton>                       
                </form>                 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorAPI: state.auth.signupError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (newUser) => dispatch(signupUser(newUser))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));