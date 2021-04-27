import React from 'react'

class Input extends React.Component{
    render(){
        return(
            <input className="input"
            type={this.props.type}
            placeholder={this.props.place}/>
        )
    }
}

export default Input