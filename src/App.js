import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyAuth }  from './redux/auth/auth.actions';

import ProtectedRoute from './components/protected-route/protected-route.component';
import Loader from './components/loader/loader.component';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import SavedItems from './pages/saved-items/saved-items.component';


class App extends Component {

  componentDidMount() {
    const { onVerifyAuth } = this.props
    // Checking if there already sgin in user
    onVerifyAuth()
  }

  render() {
    const { isAuthenticated, isVerifying, loading, currentUser } = this.props;
    return (
      <div>
        <Header/>
        {
          loading ?                 
          <div className='cover-spin'>
            <Loader />
          </div> :        
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route 
              exact 
              path='/signin'
              render={() => 
                currentUser ? (
                  <Redirect to='/' /> 
                ) :
                (<SignInAndSignUpPage />)              
              } />

            <ProtectedRoute
              exact
              path="/shop"
              component={ShopPage}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
            />
            <ProtectedRoute
              exact
              path="/like-items"
              component={SavedItems}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
            />
          </Switch>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    loading: state.auth.isSigningup || state.auth.isLoggingIn ||  state.auth.isLoggingOut || state.auth.isVerifying
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onVerifyAuth: () => dispatch(verifyAuth())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

