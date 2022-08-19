import react from 'react';
//import logo from './logo.svg';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

// The app and the web page has 3 main component, which must be physically also positioned in the right place so they are displayed in the right order. 1- Heading 2- SideBar 3-Feed 4- Iframe on the right
function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/*Widgets*/}
      </div>
    </div>
  );
}

export default App;
