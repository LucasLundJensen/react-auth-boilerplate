import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import { ProtectedRoute } from "./components/Authorized/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";
import { userActions } from './store/actions/'
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authenticationReducer.loading);

  useEffect(() => {
    dispatch(userActions.authorize());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Navigation />
        { loading ? 
        <></> 
        :
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        }
      </Router>
    </div>
  );
}

export default App;