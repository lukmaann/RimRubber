import { logoutUser } from "../../helper/helper"
import Style from "./dropdown.module.css"
import { useNavigate } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import TireRepairIcon from '@mui/icons-material/TireRepair';


const Dropdown=()=>{
    const navigate=useNavigate();
    const logout=()=>{
        logoutUser().then(()=>{
            navigate('/')
        })
    }
    return <div className={Style.main}>
        <ul>
            
            <li><button onClick={()=>navigate('/myads')}> <TireRepairIcon/> My Ads</button></li>
            <li><button onClick={logout}><LogoutIcon/> Logout </button></li>

            
        </ul>
    </div>
}

export default Dropdown