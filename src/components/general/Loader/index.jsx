import React from 'react'
import { Spinner } from 'flowbite-react'

const Loader = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
         <Spinner
              aria-label="Extra small spinner example"
              size="xl"
              color="info"
          />
    </div>
  )
}

export default Loader