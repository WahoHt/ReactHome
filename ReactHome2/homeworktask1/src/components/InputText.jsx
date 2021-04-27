import React from 'react'

class InputText extends React.Component{
    render(){
        return(
            <input type="text" value={this.props.value}/>
        )
    }
}

export default InputText;