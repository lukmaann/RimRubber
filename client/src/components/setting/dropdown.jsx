import Style from "./dropdown.module.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';
import StoreIcon from '@mui/icons-material/Store';
import FeedbackIcon from "@mui/icons-material/Feedback";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { logoutUser } from "../../helper/loginHelper";
import {useState} from "react"
import UpdateProfile from "../updateProfile/updateProfile";
import PopUp from "../widjets/popUp";
import { useUserStore } from "../../store/store";
import { authStore } from "../../store/store";



const Dropdown = () => {
  const {user}=useUserStore((state)=>state)
  const {setAuth}=authStore((state)=>state)
  const [pop,setPop]=useState(false)

  const navigate = useNavigate();
  const logout = () => {
    logoutUser().then(() => {
      localStorage.clear()
      setAuth(false)
      navigate("/login"); 
    });
  };

  const sellitem=()=>{
    if(!user.email){
      setPop(true)
    }else{

      navigate('/sellitem')
    }
  }
  return (
    <div className={Style.main}>
      <ul>
      <li>
          <button onClick={() => navigate("/buyitem")}>
            {" "}
            <StoreIcon /> Buy 
          </button>
        </li>
        <li>
          <button onClick={sellitem}>
            {" "}
            <StorefrontIcon /> Sell 
          </button>
        </li>

        <li>
          <button onClick={() => navigate("/myads")}>
            {" "}
            <TireRepairIcon /> My Ads
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/myoffers")}>
            {" "}
            <SwipeLeftAltIcon /> Bids
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/offersgot")}>
            {" "}
          <LocalOfferIcon/> Offers Got
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/feedback")}>
            {" "}
            <FeedbackIcon /> FeedBack
          </button>
        </li>
        <li>
          <button onClick={logout}>
            <LogoutIcon /> Logout{" "}
          </button>
        </li>
      </ul>
      <PopUp openPopUp={pop} setopenPopup={setPop} title={`Hey, ${user.username} 🫡 `}>
        <UpdateProfile id={user._id} setPopup={setPop}/>
      </PopUp>
    </div>
  );
};

export default Dropdown;
