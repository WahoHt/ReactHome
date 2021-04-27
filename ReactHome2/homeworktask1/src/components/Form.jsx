import React from 'react'
import InputRange from './InputRange.jsx'
import InputText from './InputText.jsx'


class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 1
        }
    }
    addMin = (event) => {
        this.setState({
            value: event.target.value
        })
      }
    render(){
        console.log()
        return(
            <div>
                <InputRange onChange={this.addMin}/>
                <InputText value={this.state.value}/>
            </div>
        )
    }
}

export default Form;