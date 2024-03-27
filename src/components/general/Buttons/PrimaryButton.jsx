import React from "react";

const PrimaryButton = ({ styles , widths , text , handleClick , disabled , type } ) => {
    
    return (
        <button
            type={type} 
            className={`h-[36px] 2xl:h-[54px] text-xs 2xl:text-[16px] w-full ${widths} flex flex-col items-center justify-center rounded-[6px] text-vita-white ${disabled ? 'bg-vita-gray1' : `bg-gradient-to-tl transition-all duration-150`} ${styles}`} 
            disabled={disabled}
            onClick={() => type !== 'submit' && handleClick() }>
            {text}
        </button>
    )
};

export default PrimaryButton;
