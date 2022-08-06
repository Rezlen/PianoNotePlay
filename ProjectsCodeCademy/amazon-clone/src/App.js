import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      {/*//BEM*/}
      <div className='app'>
        <Routes>
          <Route path='/checkout'>
            <Header />
              <Checkout />
          </Route>
          {/*This default route must always be at the bottom otherwise will never be read.*/}
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
