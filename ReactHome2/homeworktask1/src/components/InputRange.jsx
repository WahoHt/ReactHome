import React from 'react'

class InputRange extends React.Component{
    constructor(){
        super();
        this.state = {
            value:1
        }
    }
    render(){
        return(
            <input type="range"
            onChange={this.props.onChange}
            min="1"
            max="100"
            />
            )
        }
}

export default InputRange;