// import React, { useState } from 'react'
import './App.css';

import Films from './module/fimls/Films.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './module/About.jsx'
import { PrivateRoute } from './module/PrivateRoute';
import userLogin from './module/UserLogin';

function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={About} />
        <PrivateRoute exact
        path="/login"
        component={userLogin}
        signed={true}
        />
        <Route exact path="/Films" component={Films} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
