import React, { useState } from 'react'

import '../SignIn/StyleIn.css'
import CustomInput from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'
import { Link } from 'react-router-dom'

function FormIn(props) {
    const [login,checkLogin] = useState("")
    const [password,checkPassword] = useState("")
    const { history } = props;

    function checkLogUser(event){
        checkLogin(event.target.value)
    }
    function checkPassUser(event){
        checkPassword(event.target.value)
    }
    function checkValueInputIn(){
        if(login || password !== ""){
            const user = JSON.parse(localStorage.user)
            if(user.login === login && user.password === password){
                alert('True')
            }else{
                alert("Такой пользователь не найден")
                history.push("/")
            }
        }else{
            alert("Введите данные")
        }
    }

    return(
        <div className="formUp">
            <span>Вход</span>
            <div className="CustomInputIn">
                <CustomInput place="login" onChange={checkLogUser}/>
                <CustomInput place="password" onChange={checkPassUser}/>
            <Link to="/Films">
                <Button textBtn="singIn" onClick={checkValueInputIn}/>
            </Link>
            </div>
        </div>
    )
}

export default FormIn


// function checkValueInputIn(){
//     const user = JSON.parse(localStorage.user)
//     if(user.login === login && user.password === password){
//         alert('True')
//     }else{
//         history.push("/")
//     }
// }