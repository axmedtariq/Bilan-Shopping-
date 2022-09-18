import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {ReactComponent as Logo} from '../../assets/Crown.svg';
import { auth } from '../../Firebase/Firebase.utils';

import './Header.styles.scss';
const Header = ({ CurrentUser}) => (
    <div className='Header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                CurrentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            

        </div>
    </div>
);
const mapStateToProps = state => ({
    CurrentUser: state.user.CurrentUser
});
export default connect(mapStateToProps)(Header);