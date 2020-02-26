import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { verifyAuth }  from './redux/auth/auth.actions';

import ProtectedRoute from './components/protected-route/protected-route.component';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SavedItems from './pages/saved-items/saved-items.component';
import BagPage from './pages/bag/bag.component';
import ProductCard from './components/product-card/product-card.component';
import SideDrawer from './components/side-drawer/side-drawer.component';
import Backdrop from './components/Shared/backdrop/backdrop.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {
    const { isAuthenticated, isVerifying, loading, currentUser } = this.props;
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler}/>
    }
    return (
        <div className='main'>
          <Header drawerClickHandler={this.drawerToggleClickHandler} />    
          <SideDrawer visible={this.state.sideDrawerOpen} closeSideDrawer={this.backDropClickHandler}/>
          {backDrop}
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route 
                exact 
                path='/signin'
                render={() => 
                  currentUser ? (
                    <Redirect to='/' /> 
                  ) :
                  (<SignInAndSignUpPage loading={loading}/>)              
                } />
              <ProtectedRoute
                // exact
                path="/shop"
                component={ShopPage}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
              />
              <ProtectedRoute
                exact
                path="/like-items"
                component={SavedItems}//MyItemPage
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
              />
              <ProtectedRoute
                exact
                path="/cart"
                component={BagPage}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
              />
              <ProtectedRoute
                exact
                path="/product-item/:productName/:productId"
                component={ProductCard}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
              />
            </Switch>                  
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    loading: state.auth.isSigningup || state.auth.isLoggingIn ||  state.auth.isLoggingOut || state.auth.isVerifying,
    error: state.auth.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onVerifyAuth: () => dispatch(verifyAuth())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

