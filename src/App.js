import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
