import react from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
      
        {/*App body*/}
        {/*Feed*/}
        {/*Widgets*/}
      </div>
    </div>
  );
}

export default App;
