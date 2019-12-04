import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyAuth }  from './redux/auth/auth.actions';
import ProtectedRoute from './components/protected-route/protected-route.component';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    // Checking if there already sgin in user\
    this.props.onVerifyAuth()
  }

  render() {
    const { isAuthenticated, isVerifying } = this.props;

    return (
      <div>
        <Header/>

        <Switch>
          <Route exact path='/' component={HomePage}/>
          {/* <Route path='/shop' component={ShopPage}/> */}
          <Route path='/signin' component={SignInAndSignUpPage}/>
          <ProtectedRoute
            exact
            path="/shop"
            component={ShopPage}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onVerifyAuth: () => dispatch(verifyAuth())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

