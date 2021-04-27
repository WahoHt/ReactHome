import React from 'react'

import Input from './Input.jsx'
import Button from './Button.jsx'
import './Style.css'

class Form extends React.Component{

    render(){
        return(
            <div className="formIn">
                <p className="pLogin">Login</p>
                <Input
                    type="text"
                    place="Email"
                />
                <Input
                    type="password"
                    place="Password"
                />
                {this.props.isSignUp &&(
                <Input
                    type="text"
                    place="Enter name"
                />
                )}
                <Button
                    textBtn="Sing In"
                />
            </div>
        )
    }
}

export default Form