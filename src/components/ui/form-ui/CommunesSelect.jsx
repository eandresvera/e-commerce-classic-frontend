import React, { useState } from 'react'
import { comunas } from '../../../data';


export const CommunesSelect = ({ register }) => {

    const [regionValue, setRegionValue] = useState(false);

    return (

        <div className="flex flex-col w-full">

            <label htmlFor="region">Región</label>
            <select name="region" className="simple-select" ref={register} onChange={ ({target}) => setRegionValue(target.value)}>
                <option value="">Selecciona región</option>
                {
                    comunas.map( x => 
                        <option key={x.region} value={x.region}>{x.region}</option>)
                }
            </select>

            <label htmlFor="city">Ciudad</label>
            <select name="city" className="simple-select" ref={register}>
            <option value="">Selecciona ciudad</option>
                {
                    regionValue && 
                        comunas.map( x => x.region === regionValue && (
                            x.comunas.map( comuna => (
                                <option key={comuna.name} value={comuna.name}>{comuna.name}</option>
                            ))
                        )) 
                }
            </select>


        </div>
    )
}
