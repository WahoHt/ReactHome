import React from 'react';

function CustomInput({ place, onChange, value}){
    return(
        <>
            <input
                value={value}
                placeholder={place}
                onChange={onChange}
            />
        </>
    )
}

export default CustomInput;