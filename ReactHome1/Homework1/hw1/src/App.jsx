import React from 'react';
import Circle from './circle/Circle';
import Form from './form/Form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Circle />
        <Form />
      </div>
    )
  }
}

export default App;
