import { useState } from "react";
import PrimaryButton from "../../general/Buttons/PrimaryButton"
import SecondaryButton from "../../general/Buttons/SecondaryButton"
import VitaInput from "../../general/Input/VitaInput"
import { useLocation, useNavigate } from 'react-router-dom';

const Transactions = () => {

  const location = useLocation();
  const navigate = useNavigate();
  console.log("LOC", location)
  const [transferData, setTransferData] = useState({
    amount_sent: '',
    email: '',
    description: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTransferData({
      ...transferData,
      [name]: value
    })
  }


  const handleContinue = () => {
    navigate({
      pathname: location.pathname,
      search: new URLSearchParams({
          ...Object.fromEntries(new URLSearchParams(location.search)),
          op: 'exchange-resume'
        }).toString()
    })
  }

  const handleBack = () => {
    navigate({
      pathname: location.pathname,
      search: location.search.split('&')[0]
    })
  }

  return (
    <div className='w-full pl-40 pt-24'>
      <div className='max-w-[400px] flex flex-col items-start'>
        {
          location.search.includes('exchange-resume') &&
          <div className="flex">
            <button onClick={handleBack}>atras</button>
            <h3 className='text-[28px] font-semibold'>Resumen de transacción</h3>
          </div>
        }
        {
          location.search === '?tab=transferir' &&
          <>
            <h3 className='text-[28px] font-semibold'>¿Cuánto deseas enviar?</h3>
            <div className="mt-10">
              <VitaInput 
                labelText={'Tú envias'}
                type={'number'}
                name={'amount_sent'}
                placeholder={''}
                styles={'w-[400px]'}
                onChange={handleInputChange}
                //value={transferData.amount_sent}
              />

              <h3 className='text-[28px] font-semibold mt-20'>Destinatario</h3>
              <VitaInput 
                labelText={'Correo electrónico'}
                type={'text'}
                name={'email'}
                placeholder={'agustinagomez@gmail.com'}
                styles={'w-[400px] mt-10'}
                onChange={handleInputChange}
                //value={transferData.email}
              />
              <VitaInput 
                labelText={'Descripción'}
                type={'text'}
                name={'description'}
                placeholder={'Escribe aqui un mensaje corto'}
                styles={'w-[400px] mt-11'}
                onChange={handleInputChange}
                //value={transferData.description}
              />
              <div className="w-full flex items-center justify-between mt-40">
                <SecondaryButton
                  text={'Atrás'}
                  styles={'w-1/2 mr-2.5 mt-20'}
                />
                <PrimaryButton
                  handleClick={handleContinue} 
                  text={'Continuar'}
                  styles={'w-1/2 ml-2.5 mt-20'}
                />
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Transactions
