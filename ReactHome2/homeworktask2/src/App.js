import React from 'react'
import './App.css';
import Test from './components/Test.jsx';

class App extends React.Component{
    constructor(){
      super();
      this.state = {
          value: 0
        }
    }
    handleClick = () =>{
      this.setState({
          value: this.state.value + 1
      })
  }

  render(){
    return (
      <div className="App">
        <Test
        value={this.state.value}
        handleClick={this.handleClick}
        trigger={15}/>
      </div>
    );
  }
}

export default App;
