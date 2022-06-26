import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";

/*Once you have added react-router-dom to your project, you can import one of its router components to add routing to your project. 
React Router provides several router components however the most common one is the BrowserRouter. 

For the sake of simplicity and readability, it is common to alias BrowserRouter as Router when importing, like so:
import { BrowserRouter as Router} from ‘react-router-dom’*/
import { BrowserRouter as Router} from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* Add Routes here! */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
