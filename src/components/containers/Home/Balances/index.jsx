import React, { useState } from 'react'
import UsdcFlag from "/usdc.svg";
import UsFlag from "/Flags-us.svg";
import UsdtFlag from "/Flags-tether.svg";
import BTCFlag from "/btc.svg";
import BalanceCard from './BalanceCard';

const Balances = ({balances}) => {

  const [balancesUser, setBalancesUser] = useState([
    {
      usd: balances.usd,
      currency: 'USD',
      flag: UsFlag
    },
    {
      usdt: balances.usdt,
      currency: 'USDT',
      flag: UsdtFlag
    },
    {
      usdc: balances.usdc,
      currency: 'USDC',
      flag: UsdcFlag
    },
    {
      btc: balances.btc,
      currency: 'BTC',
      flag: BTCFlag
    }
  ])

  return (
    <div className='mt-5 2xl:mt-16'>
      <h2 className='text-lg 2xl:text-2xl'>Mis saldos</h2>
      <div className='w-[80%] 2xl:w-[70%] flex justify-between mt-2.5 2xl:mt-5'>
        {
          balancesUser.map((balance,i) => (
            <BalanceCard 
              key={i}
              currency={balance.currency}
              flag={balance.flag}
              balance={balance[balance.currency.toLowerCase()].toFixed(2)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Balances
