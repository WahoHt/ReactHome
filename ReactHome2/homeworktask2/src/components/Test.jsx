import React from 'react'

class Test extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 0
          }
      }

    static getDerivedStateFromProps(props,state){
    if (state.value !== props.trigger) {
        return {
          value: props.value
        }
    }
    return null;
}

    render(){
        return(
            <div>
                <input value={this.state.value} readOnly={true}/>
                <button onClick={this.props.handleClick}>Add+1</button>
            </div>
        )
    }
}

export default Test