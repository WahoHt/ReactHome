import React from 'react';
import FormIn from './SignIn/FormIn.jsx'

function userLogin(props){
    return (
        <>
            <FormIn history={props.history}/>
        </>
    )
}


export default userLogin;