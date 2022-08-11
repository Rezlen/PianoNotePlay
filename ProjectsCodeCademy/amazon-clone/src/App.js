import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";



function App() {
  return (
    <Router>
      {/*BEM*/}
      <div className='app'>
      <Routes>
         <Route path='/login' element={<Login />} />
         <Route path='/checkout' element={[<Header />, <Checkout />]} />
         <Route path='/payment' element={[<Header />]} />
         <Route path='/' element={[<Header />, <Home/>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
