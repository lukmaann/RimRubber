import Style from "./dropdown.module.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import SellIcon from "@mui/icons-material/Sell";
import StoreIcon from '@mui/icons-material/Store';
import FeedbackIcon from "@mui/icons-material/Feedback";
import { logoutUser } from "../../helper/loginHelper";



const Dropdown = () => {
  const navigate = useNavigate();
  const logout = () => {
    logoutUser().then(() => {
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
            <SellIcon /> Sell 
          </button>
        </li>

        <li>
          <button onClick={() => navigate("/myads")}>
            {" "}
            <TireRepairIcon /> My Ads
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
