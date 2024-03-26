import { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../general/Buttons/PrimaryButton"
import SecondaryButton from "../../general/Buttons/SecondaryButton"
import VitaInput from "../../general/Input/VitaInput"
import { useLocation, useNavigate } from 'react-router-dom';
import { VitaContext } from "../../../App";
import { getPrices } from "./functions/getPrices";
import axios from "axios";
import { endpoints, headers } from "../../../config/endpoints";
import Alert from "../../global/Alert";
import { validateForm } from "./functions/validateForm";
import Arrow from "/back-arrow.svg";
import VitaSelect from "../../general/Input/VitaSelect";

const Transactions = ({balances}) => {

  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(VitaContext)
  const [prices, setPrices] = useState()
  const [alertMessage, setAlertNessage] = useState()
  const [showAlert, setShowAlert] = useState(false)
  const [transferData, setTransferData] = useState({
    currency_sent: 'usd',
    currency_received: '',
    amount_sent: '',
    email: '',
    description: ''
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [resumeTransaction, setResumeTransaction] = useState(false);
  
  useEffect(() => {
    getPrices(setPrices, context)
  }, [location.search])
  
  useEffect(() => {
    validateForm(transferData, setIsFormComplete)
  }, [transferData])
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTransferData({
      ...transferData,
      [name]: value
    })
  }
  
  
  const handleContinue = () => {
    setResumeTransaction(true)
  }
  
  const handleBack = () => {
    setResumeTransaction(false)
  }
  
  const handleRedirectHome = () => {
    navigate('/?tab=inicio')
  }
  
  const handleTransaction = async() => {
    try {
      const data = {
        currency_sent: transferData.currency_sent,
        currency_received: transferData.currency_received,
        amount_sent: parseFloat(transferData.amount_sent)
      }
      await axios.post(endpoints('exchange'), data, headers('general', context))
      setShowAlert(true)
      setAlertNessage('Success')
      setTransferData({
        currency_sent: 'usd',
        currency_received: '',
        amount_sent: '',
        email: '',
        description: ''
      })
    } catch (error) {
      console.log(error)
      setShowAlert(true)
      setAlertNessage('Error')
    }
  }


  console.log("LOC", balances)
  console.log("transfer", transferData)
  
  
  return (  
    <div className='w-full pl-40 pt-24'>
      {
        showAlert &&
        <Alert 
          message={alertMessage}
          setShowAlert={setShowAlert}
          handleBack={handleBack}
        />
      }
      <div className='relative max-w-[500px] w-1/2 flex flex-col items-end'>
        {
          !resumeTransaction &&
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
                value={transferData.amount_sent}
                currency={true}
              />
              <div className="w-full mt-5">
                <span className="text-vita-blue2 text-[16px] font-semibold">Saldo disponible: ${balances.usd} USD</span>
              </div>
              <VitaSelect 
                labelText={'Moneda destino'}
                name={'currency_received'}
                onChange={handleInputChange}
                array={Object.keys(balances).filter(currency => currency !== 'usd')}
                currency={true}
                value={transferData.currency_received}
              />

              <h3 className='text-[28px] font-semibold mt-10'>Destinatario</h3>
              <VitaInput 
                labelText={'Correo electrónico'}
                type={'text'}
                name={'email'}
                placeholder={'agustinagomez@gmail.com'}
                styles={'w-[400px] mt-10'}
                onChange={handleInputChange}
                value={transferData.email}
              />
              <VitaInput 
                labelText={'Descripción'}
                type={'text'}
                name={'description'}
                placeholder={'Escribe aqui un mensaje corto'}
                styles={'w-[400px] mt-11'}
                onChange={handleInputChange}
                value={transferData.description}
              />
              <div className="w-full flex items-center justify-between mt-10">
                <SecondaryButton
                  text={'Atrás'}
                  handleClick={handleRedirectHome}
                  styles={'w-1/2 mr-2.5 mt-20'}
                />
                <PrimaryButton
                  handleClick={handleContinue} 
                  text={'Continuar'}
                  styles={'w-1/2 ml-2.5 mt-20'}
                  disabled={!isFormComplete}
                />
              </div>
            </div>
          </>
        }

        {
          resumeTransaction &&
          <div className="flex flex-col w-full items-end pl-10">
            <div className="flex w-full">
              <button onClick={handleBack} className="absolute top-0 left-[-20px]">
                <img src={Arrow} />
              </button>
              <h3 className='text-[28px] font-semibold'>Resumen de transacción</h3>
            </div>
            <div className="border flex flex-col items-center justify-evenly px-5 py-5 w-full h-[200px] mt-20 bg-vita-gray3">
              <div className="w-full flex flex-row justify-between">
                <span className="text-sm">Destinatario</span>
                <span className="text-[16px] font-semibold">{transferData.email}</span>
              </div>
              <div className="w-full flex flex-row justify-between">
                <span className="text-sm">Tú envías</span>
                <span className="text-[16px] text-vita-blue1 font-semibold">$ {parseFloat(transferData.amount_sent).toFixed(2)}</span>
              </div>
              <div className="w-full flex flex-row justify-between">
                <span className="text-sm">Tasa de cambio</span>
                <span className="text-[16px] text-vita-black font-semibold">{`1 ${transferData.currency_sent.toUpperCase()}`} = { `${prices[transferData.currency_sent][transferData.currency_received]} ${transferData.currency_received.toUpperCase()}`}</span>
              </div>
              <div className="w-full flex flex-row justify-between">
                <span className="text-sm">Destinatario recibe</span>
                <span className="text-[16px] text-vita-blue1 font-semibold">$ {`${(parseFloat(transferData.amount_sent)*(prices[transferData.currency_sent][transferData.currency_received]))} ${transferData.currency_received.toUpperCase()}`}</span>
              </div>
              <div className="w-full flex flex-row justify-between">
                <span className="text-sm">Fecha de arribo</span>
                <span className="text-[16px] font-semibold">30 minutos</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-between mt-40">
                <SecondaryButton
                  text={'Atrás'}
                  handleClick={handleRedirectHome}
                  styles={'max-w-[180px] w1/2 mr-2.5 mt-20'}
                />
                <PrimaryButton
                  handleClick={handleTransaction} 
                  text={'Transferir'}
                  styles={'max-w-[180px] w1/2 ml-2.5 mt-20'}
                />
              </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Transactions
