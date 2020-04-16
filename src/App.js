import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/reducers';

import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navigation from './components/Navigation/Navigation';
import NotFound from './pages/NotFound/NotFound';

// Create the store
const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
