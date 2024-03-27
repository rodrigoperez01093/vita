import React from 'react'

const BalanceCard = ({currency, flag, balance}) => {
  return (
    <div data-testid='balanceCard' className='w-[180px] h-[100px] 2xl:w-[250px] 2xl:h-[130px] border-[2px] border-vita-gray2 bg-vita-gray3 rounded-[6px]'>
        <div className='w-full h-1/2 flex items-center justify-between px-5'>
            <span className='text-xs 2xl:text-[16px]'>Saldo {currency}</span>
            <img src={flag} className='w-[20px] h-[20px] 2xl:w-[32px] 2xl:h-[24px]' />
        </div>
        <div className='w-full h-1/2 text-left px-5'>
            <span className='text-lg 2xl:text-2xl font-semibold'>${balance}</span>
        </div>
    </div>
  )
}

export default BalanceCard
