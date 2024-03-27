import React, { useState } from "react";
import { validateField } from "./functions/validateField";
import check from "/check.svg"
import showHide from "/show-hide.svg"
import show from "/show.svg"
import Money from "/money.svg"

const VitaInput = ({labelText , widths , type , name , value , onChange , placeholder , disabled , styles, currency}) => {
    
    const [typeInput, setTypeInput] = useState(type)
    
    return (
        <div className={`relative flex flex-col mt-4 ${widths} ${styles}`}>
            <label className="text-xs 2xl:text-sm">{labelText}</label>
            <input 
                type={typeInput}
                name={name} 
                className={`h-[42px] 2xl:h-[54px] w-full border-[1px] border-vita-gray1 rounded-[6px] px-[32px] text-xs 2xl:text-[16px] outline-none no-arrows`}
                value={value} 
                onChange={(e) => {onChange(e)}}
                placeholder={placeholder}
                disabled={disabled}
            />
            {
                currency &&
                <div className={`absolute top-7 2xl:top-9 left-2 w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ${validateField(name, value) ? '' : 'opacity-50'}`}>
                    <img src={Money} alt="check" />
                </div>
            }
            {
                validateField(name, value) &&
                <div className="absolute top-7 2xl:top-9 right-2 w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px]">
                    <img src={check} alt="check" />
                </div> 
            }
            {
                type === 'password' &&
                <>
                    {
                        typeInput === 'password' ?
                        <button onClick={(e) => {e.preventDefault(); setTypeInput('text')}} className="absolute top-7 2xl:top-9 right-2  w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] cursor-pointer">
                            <img src={show} alt="show password" />
                        </button>  
                        :
                        <button onClick={(e) => {e.preventDefault(); setTypeInput('password')}} className="absolute top-7 2xl:top-9 right-2  w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] cursor-pointer">
                            <img src={showHide} alt="show password" />
                        </button> 
                    }
                    <span className='absolute right-0 bottom-[-20px] text-[12px] hover:underline cursor-pointer'>¿Olvidaste tu contraseña?</span>
                </>
            }
        </div>
    )
};

export default VitaInput;