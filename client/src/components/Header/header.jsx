import Style from "./header.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import Dropdown from "../setting/dropdown";
import { useEffect, useState } from "react";
import { authenticateUser } from "../../helper/helper";
const Header = () => {
  const [authenticated,setauthenticated]=useState(false)
  useEffect(()=>{
    authenticateUser().then((data)=>{
      setauthenticated(data)
    })
  },[])

  const [dropdown,setdropdown]=useState(false)
  const navigate=useNavigate()
  return (
    <nav className={Style.navbar}>
      <h1 className={Style.logo}>RimRubber </h1>
      <div>
        <ul className="flex">
          <li className={Style.navItem}>
            <button onClick={()=>{navigate('/home')}}><HomeIcon /></button>

          </li>
          {authenticated && <li className={Style.navItem}>
            <button onClick={()=>{setdropdown(!dropdown)}}><SettingsIcon/></button>

          </li>}
        </ul>
      </div>
      {
        dropdown && <Dropdown/>
      }
    </nav>
  );
};

export default Header;
