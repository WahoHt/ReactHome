import React from 'react'
// import './Style.css'

class ButtonSingIn extends React.Component{
    render(){
        return(
            <div className="button">
                <button>{this.props.textBtn}</button>
            </div>
        )
    }
}

export default ButtonSingIn