import React from 'react'

import Form from '../Form.jsx'

class FormUp extends React.Component{
    render(){
        return(
            <div className="formUp">
                <Form isSignUp={true}/>
            </div>
        )
    }
}

export default FormUp