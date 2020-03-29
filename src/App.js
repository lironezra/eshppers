import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { verifyAuth }  from './redux/auth/auth.actions';

import ProtectedRoute from './components/protected-route/protected-route.component';
import WithSpinner from './components/hoc/with-spinner/with-spinner.component';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import MyAccountPage from './pages/my-account/my-account.component';
import NotFoundPage from './pages/not-found/not-found.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SavedItems from './pages/saved-items/saved-items.component';
import BagPage from './pages/bag/bag.component';
import ProductCard from './components/product-card/product-card.component';
import SideDrawer from './components/side-drawer/side-drawer.component';
import Backdrop from './components/Shared/backdrop/backdrop.component';

const routeApplicationPaths  = ['/', '/signin', '/shop', "/like-items", "/cart", "/women", "/men"];

const SignInSignUpaPageWithSpinner = WithSpinner(SignInAndSignUpPage);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
      redirectMyAccountPage: false,
      redirectTo404Page: false
    }
  }

  componentDidMount() {
    // Checking for routes that not part of the application routes
    
    if (!this.isValidRoute()) {
      this.setState( { redirectTo404Page: true })
    }

    if (this.props.location.pathname === '/user-account') {
      this.setState({ redirectMyAccountPage: true });
    } else {
      this.setState({ redirectMyAccountPage: false });
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

  isValidRoute = () => {
    return routeApplicationPaths.includes(this.props.location.pathname) ||
    /product-item\/[a-zA-Z ]*\/\d+$/.test(this.props.location.pathname)
  }

  render() {
    console.log('App render')
    let backDrop;
    const { isAuthenticated, isVerifying, loading, userUid } = this.props;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler}/>
    }

    let layout = (
      <div>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />    
        <SideDrawer visible={this.state.sideDrawerOpen} closeSideDrawer={this.backDropClickHandler}/>
        {backDrop}
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route 
              exact 
              path='/signin'
              render={() => 
                userUid ? (
                  <Redirect to='/' /> 
                ) :
                (<SignInSignUpaPageWithSpinner isLoading={loading}/>)                        
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
              component={SavedItems}
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

    if (this.state.redirectTo404Page) { 
      layout = <Route path='*' component={NotFoundPage} />;
    }

    if (this.state.redirectMyAccountPage) { 
      layout = <Route path='/user-account' component={MyAccountPage} />;
    }

    return (
        <div className='main'>  
          { layout }          
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userUid: state.auth.userUid,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

