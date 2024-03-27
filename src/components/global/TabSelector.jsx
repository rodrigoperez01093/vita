import React from 'react'
import options from "./options.json";
import { useLocation, useNavigate } from 'react-router-dom';

const TabSelector = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const handleSelectTab = (name) => {
        navigate({
            pathname: location.pathname,
            search: new URLSearchParams({
                ...Object.fromEntries(new URLSearchParams(location.search)),
                tab: name
              }).toString()
        })
    }
    
  return (  
    <div className='absolute top-15 w-full z-10'>
      {
        options.map((option, i) => (
            <div key={i} className={`w-2/3 h-[65px] pl-[20%] flex items-center ${location.search.includes(option.value) || (!location.search && option.value === 'inicio') ? 'bg-vita-blue2 rounded-r-[32px]' : ''} cursor-pointer`} onClick={() => handleSelectTab(option.value)}>
                <span className='text-[16px] 2xl:text-2xl text-vita-white'>{option.name}</span>
            </div>
        ))
      }
    </div>
  )
}

export default TabSelector
