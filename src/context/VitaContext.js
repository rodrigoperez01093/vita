import React, { createContext, useState } from "react";



export const VitaContext = createContext()

const VitaProvider = ({children}) => {

    const [data, setData] = useState()

    return (
        <VitaContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </VitaContext.Provider>
    )
}

export default VitaProvider;