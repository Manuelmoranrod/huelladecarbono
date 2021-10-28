import React from "react";
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Error from '../Error';
import Register from "../Register";
import Profile from "../Profile/Profile";
import Compensate from "../Compensate/Compensate";
import Carousel from "../Carousel/Carousel";
import Track from "../Track/Track";
import FirstLoginGoogle from "../FirstLoginGoogle";
import InitialForm from "../InitialForm";
import Transport from "../Transport";
import Food from "../Food";
import House from "../House";
import Ranking from "../Ranking";
import MyPlan from "../MyPlan/MyPlan";
import Efficient from "../Efficient";
import Thanks from "../Thanks";
import Actions from "../Actions";
import Colaborationtrees from "../Colaborationtrees";
import Zero from "../Zero";
import Colaborationzero from "../Colaborationzero";
import Plantzero from "../Plantzero";
import Payment from "../Payment";
import Thankspay from "../Thankspay";


const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" component={Carousel} exact />
        <Route path="/login" component={Login} />
        <Route path="/myplan" component={MyPlan} />
        <Route path="/register" component={Register} />
        <Route path="/initial-form" component={InitialForm} />
        <Route path="/form-transport" component={Transport} />
        <Route path="/form-food" component={Food} />
        <Route path="/form-home" component={House} />
        <Route path="/profile" component={Profile} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/compensate" component={Compensate} />
        <Route path="/efficient" component={Efficient} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/track" component={Track} />
        <Route path="/actions" component={Actions} />
        <Route path="/colaboration-trees" component={Colaborationtrees} />
        <Route path="/colaboration-zero" component={Colaborationzero} />
        <Route path="/zero" component={Zero} />
        <Route path="/plant-zero" component={Plantzero} />
        <Route path="/firstlogingoogle" component={FirstLoginGoogle} />
        <Route path="/payment" component={Payment} />
        <Route path="/thanks-pay" component={Thankspay} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default Main;
