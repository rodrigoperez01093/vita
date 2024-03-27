import SideBar from "../global/SideBar"
import { useLocation } from 'react-router-dom';
import Home from "./Home";
import Transactions from "./Transactions";
import { useContext, useEffect, useState } from "react";
import { VitaContext } from "../../App";
import { getUsserInfo } from "./Home/functions/getUserInfo";
import Loader from "../general/Loader";

const Dashboard = () => {

  const location = useLocation();
  const context = useContext(VitaContext)
  const [userInfo, setUserInfo] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsserInfo(setUserInfo, context, setLoading)
  }, [location.search, context])

  return (
    <div className="relative w-full h-full flex">
      <SideBar />
      <div className=" w-[80%] h-full">
        {
          loading ?
          <Loader />
          :
          <>
            {
              (location.search.includes('inicio') || location.search === '' || !location.search) &&
              <Home 
                user={context.user}
                balances={userInfo.balances}
              />
            }
            {
              location.search.includes('transferir') &&
              <Transactions 
                balances={userInfo.balances}
              />
            }
          </>
        }
      </div>
    </div> 
  )
}

export default Dashboard
