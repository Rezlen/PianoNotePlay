import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

// The app and the web page has 3 main component, which must be physically also positioned in the right place so they are displayed in the right order. 1- Heading 2- SideBar 3-Feed 4- Iframe on the right
function App() {
  const user = null;
  return (
    // BEM naming convention
    <div className="app">
      {/**Checks if the user exist/logged in, then shows its children Header, Sidebar,.... */}
      {!user ?  (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
