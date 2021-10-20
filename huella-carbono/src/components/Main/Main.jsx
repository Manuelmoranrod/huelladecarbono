import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Error from '../Error/Error';
import Register from "../Register";
import Profile from "../Profile";

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default Main;
