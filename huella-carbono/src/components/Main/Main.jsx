import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Error from '../Error';
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Compensate from "../Compensate/Compensate";
import Track from "../Track/Track";
import FirstLoginGoogle from "../FirstLoginGoogle";
import InitialForm from "../InitialForm";
import Transport from "../Transport";
import Food from "../Food";
import House from "../House";
import Ranking from "../Ranking";


const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/initial-form" component={InitialForm} />
        <Route path="/form-transport" component={Transport} />
        <Route path="/form-food" component={Food} />
        <Route path="/form-home" component={House} />
        <Route path="/profile" component={Profile} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/compensate" component={Compensate} />
        <Route path="/track" component={Track} />
        <Route path="/firstlogingoogle" component={FirstLoginGoogle} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default Main;
