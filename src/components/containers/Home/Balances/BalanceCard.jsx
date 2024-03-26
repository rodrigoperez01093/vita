import React from 'react'

const BalanceCard = ({currency, flag, balance}) => {
  return (
    <div className='w-[250px] h-[130px] border-[2px] border-vita-gray2 bg-vita-gray3 rounded-[6px]'>
        <div className='w-full h-1/2 flex items-center justify-between px-5'>
            <span className='text-[16px]'>Saldo {currency}</span>
            <img src={flag} className='w-[32px] h-[24px]' />
        </div>
        <div className='w-full h-1/2 text-left px-5'>
            <span className='text-2xl font-semibold'>${balance}</span>
        </div>
    </div>
  )
}

export default BalanceCard
