// import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'

import { Link } from "react-router-dom";
import CustomInput from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'
import '../SignUps/StyleUp.css'

function FormUp(props){
    const [userLogin, setLogin] = useState("")
    const [userPassword,setPassword] = useState("")
    const [userRepeatPassword,setRepeatPassword] = useState("")
    // const [buttonUp,setButtonUp] = useState("false")

    function stateUserLogin(event){
        setLogin(event.target.value)
    }

    function stateUserPassword(event){
        setPassword(event.target.value)
    }

    function setUserRepeatPassword(event){
        setRepeatPassword(event.target.value)
    }

    function checkDataUser(){
        if(userLogin || userPassword || userRepeatPassword !== ""){
            localStorage.user = JSON.stringify({
                login:userLogin,
                password:userPassword
            })
        }
    }

    return(
        <div className="formIn">
            <span>Регистрация</span>
                <div className="CustomInputUp">
                    <CustomInput value={userLogin || ""} place="Login" onChange={stateUserLogin}/>
                    <CustomInput value={userPassword || ""} place="Password" onChange={stateUserPassword}/>
                    <CustomInput value={userRepeatPassword || ""} place="Repeat password" onChange={setUserRepeatPassword}/>
                </div>
            <Link to="/login">
                <Button textBtn="singUp" onClick={checkDataUser}/>
            </Link>
        </div>
    )
}

export default FormUp