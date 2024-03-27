import React, { useContext, useEffect, useState } from 'react'
import { VitaContext } from '../../../../App'
import { getListTransactions } from './functions/getListTransactions'
import Loader from '../../../general/Loader'

const History = () => {
    const context = useContext(VitaContext)
    const [transactions, setTransactions] = useState()
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      getListTransactions(setTransactions, context, setLoading)
    }, [])
  
    return (
      <div className='w-full h-full mt-5 2xl:mt-10'>
        <h1 className='text-lg 2xl:text-2xl'>Historial</h1>
        <div className='w-[80%] h-[40%] 2xl:w-[70%] 2xl:h-[50%] overflow-y-auto pr-2 scroll-bar'>
          {
            loading ?
            <Loader />
            :
            transactions && transactions.length > 0 &&
            transactions.map((t,i) => (
              <div key={i} className='w-full h-[48px] 2xl:h-[62px] flex items-center justify-between border-b-[1px] border-vita-gray2 text-xs 2xl:text-[16px]'>
                <span className='font-normal'>
                    {`Intercambio ${t.currency.toUpperCase()}`}
                </span>
                <span className={`font-semibold ${t.transactionType === null ? 'text-vita-blue2' : 'text-vita-red'}`}>
                    {`${t.transactionType === null ? '+' : '-'} $${parseFloat(t.amount).toFixed(2)} ${t.currency.toUpperCase()}`}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

export default History
