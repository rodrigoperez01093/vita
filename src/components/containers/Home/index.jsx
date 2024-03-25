import React, { useContext, useEffect, useState } from 'react'
import { VitaContext } from '../../../App'
import Coin from "/coin.svg"
import Balances from './Balances'
import { getUsserInfo } from './functions/getUserInfo'
import History from './History'

const Home = () => {

    const context = useContext(VitaContext)
    const [userInfo, setUserInfo] = useState()
    
    useEffect(() => {
        getUsserInfo(setUserInfo, context)
    }, [])
  
    return (
    <div className='w-full h-full pl-12 pt-20 border overflow-hidden'>
        <div className='w-fit flex items-center'>
            <img src={Coin} alt='coin' />
            <h1 className='text-2xl font-semibold ml-2.5'>¡Hola <span className='text-vita-blue1'>{context?.user}!</span></h1>
        </div>
        {
            userInfo?.balances &&
            <Balances 
                balances={userInfo?.balances} 
            />
        }
        <History />
    </div>
  )
}

export default Home
