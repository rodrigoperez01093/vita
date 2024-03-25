import React, { useContext, useEffect, useState } from 'react'
import { VitaContext } from '../../../App'
import Coin from "/coin.svg"
import Balances from './Balances'
import { getUsserInfo } from './functions/getUserInfo'

const Home = () => {

    const context = useContext(VitaContext)
    const [userInfo, setUserInfo] = useState()

    console.log("CONTEXT", context)
    
    useEffect(() => {
        getUsserInfo(setUserInfo, context)
    }, [])

    console.log(userInfo)
  
    return (
    <div className='w-full h-full pl-12 pt-20'>
        <div className='w-fit flex items-center'>
            <img src={Coin} alt='coin' />
            <h1 className='text-2xl font-semibold ml-2.5'>¡Hola <span className='text-vita-blue1'>{context?.user}!</span></h1>
        </div>
        <Balances />
    </div>
  )
}

export default Home
