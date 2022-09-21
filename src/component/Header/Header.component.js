import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {ReactComponent as Logo} from '../../assets/Crown.svg';
import { auth } from '../../Firebase/Firebase.utils';
import CartIcon from '../Cart-Icon/cart-icon';
import CartDropdown from '../Cart-dropdown/cart-dropdown';
import {selectCartHidden} from "../../Redux/Cart/cart.reselect";
import {selectCurrentUser} from "../../Redux/user/user.select";


import './Header.styles.scss';
const Header = ({ CurrentUser, hidden }) => (
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
            <CartIcon />
            

        </div>
        {   
            hidden ? null :
            <CartDropdown />

        }
        
    </div>
);
const mapStateToProps = createStructuredSelector ({
    CurrentUser: selectCurrentUser,
    hidden: selectCartHidden

});
export default connect(mapStateToProps)(Header);