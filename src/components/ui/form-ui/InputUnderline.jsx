import React, {  useState } from 'react'

// If(value) -> value don`t change at any moment and '*' dissapear
export const InputUnderline = ({ inputName, type, labelName, placeholder, value, register, errors, noasterix }) => {

    const [inputValue, setInputValue] = useState('');

    const inputChangedHandler = ({ target }) => {
        setInputValue( target.value );
    }

    return (
        <div>

            <div className="flex flex-col">

                <label htmlFor={inputName}>{labelName}<span className="text-red-500">{ noasterix ? '' : '*' }</span> </label>
                <input
                    placeholder={placeholder}  
                    name={inputName} 
                    type={ type ? type : 'text' } 
                    className={ `simple-input-underline focus:border-primary-dark ${value && 'border-green-600'}` }
                    ref={register}
                    value={value && value}
                    onChange={ (e) => inputChangedHandler(e) }
                />

            </div>

        </div>
    )
}