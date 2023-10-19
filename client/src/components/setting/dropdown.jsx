import { logoutUser } from "../../helper/helper"
import Style from "./dropdown.module.css"
import { useNavigate } from "react-router-dom"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Dropdown=()=>{
    const navigate=useNavigate();
    const logout=()=>{
        logoutUser().then(()=>{
            navigate('/')
        })
    }
    return <div className={Style.main}>
        <ul>
            
            <li><button onClick={logout}><ExitToAppIcon/> Logout </button></li>

            
        </ul>
    </div>
}

export default Dropdown