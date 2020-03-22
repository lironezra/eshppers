import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';

import { getAuthenticatedUser } from '../../redux/user/user.actions'

import AccountOverview from '../../components/my-account-overview-components/account-overview.component';
import MyOrders from '../../components/my-account-overview-components/my-orders.component';
import MyDetails from '../../components/my-account-overview-components/my-details.component';

import AppLogo from '../../assets/app-logo.png';
import NortonSecureLogo from '../../assets/norton-by-symantec-logo.png';

import './my-account.styles.scss';

const MyAccountPage = ({ match, user, getCurrentUser }) => {
    const [opacity, setOpacity] = useState(false);
    let style = { opacity: 0 }

    useEffect(() => {
        // change page background color
        document.body.style.backgroundColor = '#eee';
        setOpacity(true);
        getCurrentUser();

        return () => {
            document.body.style.backgroundColor = 'white';
        };
    }, [getCurrentUser]);

    if(opacity) { 
        style = { opacity: 1 }
    }

    return (
        <div className={`my-account-page-container`} style={style}>
            <header className="header">
                <div className="logo">
                    <img 
                        className='app-logo' 
                        src={AppLogo} alt='app-logo' 
                        onClick={() => window.location.assign(`${window.location.origin}/`)}/>
                </div>
                <h2 className='header-text'>MY ACCOUNT</h2>
                <div className="norton-logo">
                    <img className='norton-logo' src={NortonSecureLogo} alt='norton-logo' />
                </div>
            </header>
            <div className='content'>
                <div className='user-options-container'>
                    <div className='user-welcome-card'>
                        <div className='dot'>
                            <p>
                                {user ? user.displayName.match(/\b(\w)/g).join('') : ''}
                            </p>
                        </div>
                        <div className='user-welcome-wrapper'>
                            <p className='hi'>Hi,</p>
                            <p className='name'>{user ? user.displayName : ''}</p>
                        </div>
                    </div>
                    <div className='user-side-menu'>
                        <nav className='main-nav'>
                            <ul className='main-list'>
                                {console.log(match.url)}
                                <NavLink exact to='/user-account' className='main-list-item' activeClassName="selectedLink">Account overview</NavLink>
                                <NavLink to={`${match.url}/orders`} className='main-list-item' activeClassName="selectedLink">My orders</NavLink>
                                <NavLink to={`${match.url}/my-details`} className='main-list-item' activeClassName="selectedLink">My details</NavLink>
                                <NavLink to='/change-password' className='main-list-item' activeClassName="selectedLink">Change password</NavLink>
                                <NavLink to='/addresses' className='main-list-item' activeClassName="selectedLink">Address book</NavLink>
                                <NavLink to='/payment-methods' className='main-list-item' activeClassName="selectedLink">Payment method</NavLink>
                                <NavLink to='/logout' className='main-list-item' activeClassName="selectedLink">Sign out</NavLink>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='selected-user-option'>
                     <Switch>
                        <Route exact path='/user-account'>
                            <AccountOverview />    
                        </Route> 
                        <Route path='/user-account/orders'>
                            <MyOrders />
                        </Route>
                        <Route path='/user-account/my-details'>
                            <MyDetails />
                        </Route>
                     </Switch>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentUser: () => dispatch(getAuthenticatedUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountPage);