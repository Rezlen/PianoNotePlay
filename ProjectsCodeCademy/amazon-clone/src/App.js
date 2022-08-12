import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';



function App() {

  // Who has signed in? This is how we keep track of them.
  useEffect(() => {
    // will only run once when the app component loads...It is similar to IF STATEMENT. It only runs ONCE when app components loads. 
  
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

    });
  }, [])


  
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
