import React, { useEffect, useState } from 'react'
import amico from "/amico.svg"
import VitaInput from '../../general/Input/VitaInput'
import PrimaryButton from '../../general/Buttons/PrimaryButton'
import axios from "axios"
import { endpoints, headers } from '../../../config/endpoints'
import { useNavigate } from 'react-router-dom';
import { validateLogin } from './functions/validateLogIn'

const  Login = ({setData}) => {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    dev_mode: 'true'
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    validateLogin(userData, setIsFormComplete)
  }, [userData])
  

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const execLogIn = async(e, logData) => {
    e.preventDefault()
    try {
      const data = {...logData};
      const req = await axios.post(endpoints('user_login'), data, headers('user_login'));
      console.log(req)
      if(req.headers['access-token']) {
        console.log("TOKEN", req )
        localStorage.setItem(`logged`, 'true')
        localStorage.setItem(`user`, JSON.stringify(req.data.data));
        const data = {
          token: req.headers['access-token'],
          expiry: req.headers.expiry,
          client: req.headers.client,
          user: req.data.data.attributes.first_name,
          uid: req.headers.uid
        }
        localStorage.setItem(`data`, JSON.stringify(data));
        setData(data)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-full flex flex-row items-center justify-center'>
      <div className='relative w-1/2 h-full flex items-center'>
        <h1 className="absolute top-[80px] 2xl:top-[120px] left-[120px] text-3xl 2xl:text-[48px] font-semibold">Iniciar sesión</h1>
        
        <form onSubmit={(e) => execLogIn(e, userData)} className='w-[300px] 2xl:w-[400px] h-[350px] ml-[120px]'>
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
            disabled={!isFormComplete}
          />
        </form>

      </div>

      <div className='w-1/3 2xl:w-1/2 h-full flex items-center justify-center'>
        <img src={amico} alt='login' />
      </div>
    </div>
  )
}

export default Login