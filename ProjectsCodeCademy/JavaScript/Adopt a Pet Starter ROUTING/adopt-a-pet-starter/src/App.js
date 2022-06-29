import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // wrap your applications contents in a Router so that your components can use React Router’s components and hooks.
    <Router>
      <Navigation />
      <Switch>
        { /* the ? added so HomePage to render even if no type is specified in the URL path.*/}
        <Route path='/pet-details-not-found'>
          <PetDetailsNotFound/>
        </Route>
       <Route path='/search'>
          <SearchPage/>
        </Route>
        <Route path='/:type/:id'>
          <PetDetailsPage/>
        </Route>
        <Route path='/:type?'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
