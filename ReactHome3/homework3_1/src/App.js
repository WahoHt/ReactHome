import React from 'react'
import './App.css';
// import Form from './components/Form.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Registr from './components/Registr';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/Registr" component={Registr} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App


