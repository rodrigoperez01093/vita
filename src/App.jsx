import { Routes, Route } from 'react-router-dom';
import Home from './components/containers';
import Login from './components/Authentication/Session/Login';

function App() {

  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />  
          <Route exact path="/auth/login" element={<Login />} />
        </Routes>  
    </>
  )
}

export default App