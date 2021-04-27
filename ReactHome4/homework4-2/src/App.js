// import React, { useState } from 'react'
import './App.css';

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
        </Switch>
      </BrowserRouter>
  );
}

export default App;
