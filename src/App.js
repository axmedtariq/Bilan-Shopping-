import React from 'react';
import { Routes,  Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage.compnent';
import ShopPage from './pages/Shop/shop.component';
import SignInAndsignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/Header/Header.component';
import { auth, createUserProfileDocument} from './Firebase/Firebase.utils';

class App extends React.Component {

  constructor() {
    super();


    this.state = {
      CurrentUser:null
    }
  }


  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {

          this.setState({

            CurrentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({Currentuser: userAuth});
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {

     return (
    <div> 
      <Header CurrentUser={this.state.CurrentUser} />
      <Routes>

      <Route exact  path='/' element={<Homepage />} />
      <Route  path='/shop' element={<ShopPage/>} />
      <Route path='/signin' element={<SignInAndsignUp />} />
      </Routes>
    </div>
  );

  }
 
}

export default App;
