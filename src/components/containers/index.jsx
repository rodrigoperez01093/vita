import SideBar from "../global/SideBar"
import { useLocation } from 'react-router-dom';
import Home from "./Home";
import Transactions from "./Transactions";
import { useContext } from "react";
import { VitaContext } from "../../App";

const Dashboard = () => {

  const location = useLocation();
  const context = useContext(VitaContext)
  console.log("CONTEXT", context)

  return (
    <div className="w-full h-full flex">
      <SideBar />
      <div className=" w-[80%] h-full">
        {
          (location.search.includes('inicio') || location.search === '' || !location.search) &&
          <Home />
        }
        {
          location.search.includes('transferir') &&
          <Transactions />
        }
      </div>
    </div>
  )
}

export default Dashboard
