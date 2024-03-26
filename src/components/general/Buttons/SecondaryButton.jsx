import React from "react";

const SecondaryButton = ({ styles , widths , text , handleClick , disabled , type } ) => {
    
    return (
        <button
            type={type} 
            className={`h-[54px] w-full ${widths} flex flex-col items-center justify-center rounded-[6px] text-vita-blue1 border-[1px] border-vita-blue1  ${styles}`} 
            disabled={disabled}
            onClick={() => type !== 'submit' && handleClick() }>
            {text}
        </button>
    )
};

export default SecondaryButton;