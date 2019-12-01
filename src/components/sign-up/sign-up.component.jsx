import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SIgnUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("PAssword don't match!!!");
            return;
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
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
                    <CustomButton type='submit'>SIGN UP</CustomButton>                       
                </form>                 
            </div>
        );
    }
}

export default SIgnUp;