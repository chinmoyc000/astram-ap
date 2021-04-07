import React from 'react';
import {BrowserRouter,  Route, Redirect, Switch} from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Forget_password from '././components/Forget_password/Forget_password';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/forget-password" component={Forget_password}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;