import React, { useState } from "react";
import { validateField } from "./functions/validateField";
import check from "/check.svg"
import showHide from "/show-hide.svg"

const VitaInput = ({labelText , widths , type , name , value , onChange , placeholder , disabled , styles}) => {
    
    const [typeInput, setTypeInput] = useState(type)
    
    return (
        <div className={`relative flex flex-col mt-4 ${widths} ${styles}`}>
            <label className="text-sm">{labelText}</label>
            <input 
                type={typeInput}
                name={name} 
                className={`h-[54px] w-full border-[1px] vita-gray1 rounded-[6px] px-[16px] text-sm`}
                value={value} 
                onChange={(e) => {onChange(e)}}
                placeholder={placeholder}
                disabled={disabled}
            />
            {
                validateField(name, value) &&
                <div className="absolute top-10 right-2 w-[24px] h-[24px]">
                    <img src={check} alt="check" />
                </div> 
            }
            {
                type === 'password' &&
                <>
                    <button onClick={(e) => {e.preventDefault(); setTypeInput('text')}} className="absolute top-10 right-2 w-[24px] h-[24px] cursor-pointer">
                        <img src={showHide} alt="show password" />
                    </button>  
                    <span className='absolute right-0 bottom-[-20px] text-[12px] hover:underline cursor-pointer'>¿Olvidaste tu contraseña?</span>
                </>
            }
        </div>
    )
};

export default VitaInput;