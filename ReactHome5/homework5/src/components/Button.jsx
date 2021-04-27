import React from 'react'

function Button(props) {
    return(
        <div className="button">
            <button onClick={props.onClick}>{props.textBtn}</button>
        </div>
    )
}

export default Button