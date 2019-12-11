import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { toogleMyAccountHiddn } from '../../redux/my-account/my-account.acions';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import './user-account-icon.styles.scss';

const UserAccountIcon = ({ onToogleMyAccountHiddn }) => {
    return (
        <Link className='option' onClick={onToogleMyAccountHiddn} to='#'>
            <FontAwesomeIcon className='icon' icon={faUser} />
        </Link>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onToogleMyAccountHiddn: () => dispatch(toogleMyAccountHiddn())
    }
}

export default connect(null, mapDispatchToProps)(UserAccountIcon);