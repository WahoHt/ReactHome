import React, { useState } from 'react'

import {InputRange} from './InputRange'
import {InputText} from './InputText'

export function Form(props){
    const [InputValue,setInputValue] = useState(1)
    const addMin = (event) =>{
        setInputValue(event.target.value)
    }
    return(
        <div>
            <InputRange onChange={addMin}/>
            <InputText value={InputValue}/>
        </div>
    )
}