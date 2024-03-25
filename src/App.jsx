import React, { createContext, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/containers';
import Login from './components/Authentication/Session/Login';
import Auth from './components/Authentication/Session/Auth';

export const VitaContext = createContext()

const App = () => {

  const [data, setData] = useState()

  return (
    <>
      <VitaContext.Provider value={data}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />  
              <Route exact path="/auth/login" element={<Login setData={setData} />} />
            </Routes>  
          </Auth>
        </BrowserRouter>
      </VitaContext.Provider>
    </>
  )
}

export default App