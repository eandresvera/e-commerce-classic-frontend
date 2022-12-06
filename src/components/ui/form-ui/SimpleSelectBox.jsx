import React from 'react'

export const SimpleSelectBox = ({ labelName, inputName }) => {
    return (

        <div className="flex flex-col w-full">

            <label htmlFor={inputName}>{labelName}</label>

            <select name={inputName} className="simple-select">
                <option>Selecciona {labelName}</option>
            </select>

        </div>
    )
}
