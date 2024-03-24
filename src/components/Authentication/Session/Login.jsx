import React, { useState } from 'react'
import amico from "/amico.svg"
import VitaInput from '../../general/Input/VitaInput'
import PrimaryButton from '../../general/Buttons/PrimaryButton'
import axios from "axios"
import { endpoints, headersSigIn } from '../../../config/endpoints'
import { useNavigate } from 'react-router-dom';

const  Login = () => {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    dev_mode: 'true'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }
  console.log("FORM", userData)

  const execLogIn = async(e, logData) => {
    console.log("exec")
    e.preventDefault()
    try {
      const data = {...logData};
      const req = await axios.post(endpoints('user_login'), data, headersSigIn());
      console.log(req)
      if(req.headers['access-token']) {
        console.log("TOKEN", req.headers['access-token'] )
        localStorage.setItem(`logged`, 'true')
        localStorage.setItem(`user`, JSON.stringify(req.data.data));
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-full flex flex-row items-center justify-center'>
      <div className='relative w-1/2 h-full flex items-center'>
        <h1 className="absolute top-[120px] left-[120px] text-[48px] font-semibold">Iniciar sesión</h1>
        
        <form onSubmit={(e) => execLogIn(e, userData)} className='w-[400px] h-[350px] ml-[120px]'>
          <VitaInput 
            labelText={'Correo electrónico'}
            type={'text'}
            name={'email'}
            placeholder={'juan@gmail.com'}
            onChange={handleInputChange}
            value={userData.email}
          />

          <VitaInput 
            labelText={'Contraseña'}
            type={'password'}
            name={'password'}
            placeholder={'Escribe tu contaseña'}
            styles={'mt-10'}
            onChange={handleInputChange}
          />
         
          <PrimaryButton
            type={'submit'} 
            text={'Iniciar sesión'}
            styles={'mt-20'}
          />
        </form>

      </div>

      <div className='w-1/2 h-full flex items-center justify-center'>
        <img src={amico} alt='login' />
      </div>
    </div>
  )
}

export default Login