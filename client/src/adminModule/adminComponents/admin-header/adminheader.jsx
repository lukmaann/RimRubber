import Style from "./adminheader.module.css";
import ReviewsIcon from "@mui/icons-material/Reviews";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../helper/loginHelper";
import toast from "react-hot-toast";
import LogoutIcon from '@mui/icons-material/Logout';

const AdminHeader = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  let txt = "";
  if (location === "/admindashboard") {
    txt = "Admin Dashboard";
  } else if (location === "/admin/managestocks") {
    txt = "Manage Stocks";
  }

  const logout=()=>{
    const lo=logoutUser();
    toast.promise(lo,{
        loading:"Logging out",
        error:"error",
        success:"Logged Out"
    })
    lo.then(()=>navigate('/'))
}

  return (
    <div className={Style.main}>
      <h1>{txt}</h1>

      <div >
      {location === "/admindashboard" ? (
        <button onClick={() => navigate("/admin/managestocks")}>
          <ReviewsIcon />
        </button>
      ) : (
        <button onClick={() => navigate("/admindashboard")}>
          <DashboardIcon />
        </button>
      )}

      <button onClick={logout}><LogoutIcon className="ml-5"/></button>

      </div>
      
    </div>
  );
};

export default AdminHeader;
