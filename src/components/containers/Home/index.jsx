import React from 'react'
import Coin from "/coin.svg"
import Balances from './Balances'
import History from './History'

const Home = ({user, balances}) => {
  
    return (
    <div className='w-full h-full pl-12 pt-20 border overflow-hidden'>
        <div className='w-fit flex items-center'>
            <img src={Coin} alt='coin' />
            <h1 className='text-xl 2xl:text-2xl font-semibold ml-2.5'>¡Hola <span className='text-vita-blue1'>{user}!</span></h1>
        </div>
        <Balances 
            balances={balances} 
        />
        <History />
    </div>
  )
}

export default Home
