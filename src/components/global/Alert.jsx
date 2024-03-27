import React from 'react'
import Modal from "/modal.svg"
import Cross from "/cross.svg"

const Alert = ({message, setShowAlert, handleBack}) => {
  return (
    <div className='absolute top-0 left-0 z-10 w-screen h-screen bg-vita-gray1 bg-opacity-50'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-1/3 h-[400px] 2xl:h-[700px] flex flex-col items-center 2xl:items-start bg-vita-white'>
                <div className='w-full flex flex-row items-center justify-end pt-5 pr-5'>
                    <button onClick={() => {setShowAlert(false); handleBack()}}>
                        <img src={Cross} className='w-[24px] h-[24px]' />
                    </button>
                </div>
                <div className='w-[50%] 2xl:w-full h-[70%] flex flex-col items-center justify-center pt-5 2xl:pt-10'>
                    <img src={Modal} />
                    <span className='text-xl 2xl:text-3xl text-vita-blue1 font-semibold'>{message === 'Success' ? '¡Envío exitoso!' : 'Ha ocurrido un error'}</span>
                </div>
                <div className='w-full h-[30%] bg-vita-white text-center pt-10 2xl:pt-0'>
                    <span className='text-xs 2xl:text-[16px]'>{message === 'Success' ? 'El destinatario recibirá el dinero en 30 minutos.' : 'Por favor intente más tarde.'}</span>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Alert