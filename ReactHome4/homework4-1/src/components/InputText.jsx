import React, { useState } from 'react'

export function InputText(props){
    return(
        <div>
             <input type="text" value={props.value} readOnly={true}/>
        </div>
    )
}