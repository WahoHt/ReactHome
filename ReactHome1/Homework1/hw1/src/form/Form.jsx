import React from 'react';
import './Form.css'

class Form extends React.Component {
    render() {
        return (
            <div className="task_2">
                <h2>task 2</h2>
                <form className="holder__form">
                <div className="form__inner">
                    <h3>Login</h3>
                    <input type="text" placeholder='Name'></input>
                    <input type="password" placeholder='Password'></input>
                    <input type="email" placeholder='Email'></input>
                    <button className="btn">Sign In</button>
                </div>
                </form>
            </div>
        )
    }
}

export default Form;