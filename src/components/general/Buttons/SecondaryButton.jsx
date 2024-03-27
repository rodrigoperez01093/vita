import React from "react";

const SecondaryButton = ({ styles , widths , text , handleClick , disabled , type } ) => {
    
    return (
        <button
            type={type} 
            className={`h-[36px] 2xl:h-[54px] text-xs 2xl:text-[16px] w-full ${widths} flex flex-col items-center justify-center rounded-[6px] text-vita-blue1 border-[1px] border-vita-blue1  ${styles}`} 
            disabled={disabled}
            onClick={() => type !== 'submit' && handleClick() }>
            {text}
        </button>
    )
};

export default SecondaryButton;