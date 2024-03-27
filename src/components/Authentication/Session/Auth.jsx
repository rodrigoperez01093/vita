import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { VitaContext } from '../../../App';

const Auth = ({ children, setData }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const context = useContext(VitaContext);

    useEffect(() => {
      const fetchData = () => {
        const logged = localStorage.getItem(`logged`);
        const dataSession = localStorage.getItem('data')
        if(!context && logged){
          setData(JSON.parse(dataSession))
        }
        if(!logged || logged === 'false') {
            if(location.pathname === '/'){
                navigate('auth/login')
            }
        }
      }
      fetchData()
    }, [])
    

  return (
    <>
        { location.pathname &&
            <div className="h-screen w-full">{children}</div>
        }
    </>
  )
}

export default Auth