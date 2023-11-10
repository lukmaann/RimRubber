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



const Dropdown = () => {
  const navigate = useNavigate();
  const logout = () => {
    logoutUser().then(() => {
      localStorage.clear()
      navigate("/");
    });
  };
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
          <button onClick={() => navigate("/sellitem")}>
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
            <SwipeLeftAltIcon /> Asks
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/offersgot")}>
            {" "}
          <LocalOfferIcon/> Offers
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
    </div>
  );
};

export default Dropdown;
