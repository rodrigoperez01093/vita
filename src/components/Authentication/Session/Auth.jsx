import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = () => {
        const logged = localStorage.getItem(`logged`);
        if(!logged || logged === 'false') {
            if(location.pathname === '/'){
                navigate('auth/login')
            }
        }
      }
      fetchData()
    }, [location.pathname])
    

  return (
    <>
        { location.pathname &&
            <div className="h-screen w-full">{children}</div>
        }
    </>
  )
}

export default Auth