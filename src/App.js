import React from 'react';
import {   Route,  Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import './App.css';
import Homepage from './pages/Homepage/Homepage.compnent';
import ShopPage from './pages/Shop/shop.component';
import SignInAndsignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkoutpage from './pages/Checkout/checkout';
import Header from './component/Header/Header.component';
import { auth, createUserProfileDocument} from './Firebase/Firebase.utils';
import { setCurrentUser } from "./Redux/user/user.actions";
import {selectCurrentUser} from "./Redux/user/user.select";

class App extends React.Component {

  

  unsubscribeFromAuth = null;
  componentDidMount() {

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {

          setCurrentUser({

            CurrentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {

     return (
      
    <div> 
      <Header />
      <Switch>

      <Route  exact path='/' component={withRouter(Homepage)} />
      <Route  path='/shop' component={withRouter(ShopPage)} />
      <Route  exact path='/checkout' component={withRouter(Checkoutpage)} />

      <Route exact path='/signin' render={() => this.props.CurrentUser ? (<Redirect to='/' />) : (<SignInAndsignUp />)} />

      </Switch>
    
    </div>
  );

  }
 
}

const mapStateToProps = createStructuredSelector ({

  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))



});

export default connect(mapStateToProps,mapDispatchToProps)(App);
