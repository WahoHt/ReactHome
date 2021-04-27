import React, { useState } from 'react'

export function InputRange(props){
    return(
        <input type="range"
        onChange={props.onChange}
        min="1"
        max="100"
        />
    )
}