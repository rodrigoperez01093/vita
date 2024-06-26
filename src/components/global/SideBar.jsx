import React from 'react'
import TabSelector from './TabSelector'
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/auth/login');
  }

  return (
    <div className="relative w-[20%] h-full pt-20 2xl:pt-32 bg-vita-blue1">
        <TabSelector />
        <div className="absolute bottom-20 w-full h-[50%] bg-[url('/illustrations.svg')] bg-cover"></div>
        <button className={`absolute bottom-5 2xl:bottom-20 w-full h-[65px] pl-[20%] flex items-center cursor-pointer`} onClick={() => handleLogOut()}>
            <span className='text-[16px] 2xl:text-2xl text-vita-white'>Cerrar sesión</span>
        </button>
    </div>
  )
}

export default SideBar
