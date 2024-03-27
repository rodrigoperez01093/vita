import React from "react";
import Money from "/money.svg"
import { validateField } from "./functions/validateField";
import downArrow from "/icon-select.svg"
import check from "/check.svg"

const VitaSelect = ({ labelText , widths , value , onChange , array , disabled , multi , boolOptions, styles , currency, name }) => {
    return (
        <div className={`relative flex flex-col ${widths} ${multi ? 'xl:first:ml-0 xl:last:mr-0 mx-2' : 'mx-0' } mt-5`}>
            <label className="text-xs 2xl:text-sm">{labelText}</label>
            <select
                value={boolOptions ? value : (value || 'Seleccione')}
                style={{backgroundImage: `url(${downArrow})`}}
                name={name}
                className={`selectSpecial border-[1px] border-vita-gray1 rounded-[6px] h-[42px] 2xl:h-[54px] px-[32px] text-xs 2xl:text-[16px] outline-none cursor-pointer ${styles}`}
                onChange={(e) => {onChange(e)}}
                disabled={disabled}
            >
                <option value="Seleccione" disabled hidden>Seleccione</option>
                {Array.isArray(array) && array.length > 0 && array.map((item,index) => <option key={index} value={item}>{item.toUpperCase()}</option>)}
            </select>
            {
                currency &&
                <div className={`absolute top-7 2xl:top-9 left-2 w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ${validateField(name, value) ? '' : 'opacity-50'}`}>
                    <img src={Money} alt="check" />
                </div>
            }
            {
                validateField(name, value) &&
                <div className="absolute top-7 2xl:top-9 right-14 w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px]">
                    <img src={check} alt="check" />
                </div> 
            }
        </div>
    )
};

export default VitaSelect;