import React from 'react';
import { Routes,  Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage.compnent';
import ShopPage from './pages/Shop/shop.component';

function App() {
  return (
    <div> 
      <Routes>

      <Route exact  path='/' element={<Homepage />} />
      <Route  path='/shop' element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
