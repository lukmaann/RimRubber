import { logoutUser } from "../../helper/helper"
import toast, { Toaster } from "react-hot-toast"
import {useNavigate} from "react-router-dom"

const Home=()=>{


    const navigate= useNavigate()
    const logout=()=>{
        logoutUser().then(()=>{
            navigate('/')
        })
        toast.promise(logoutUser(),{
            loading:"Logging out",
            success:"Logged out",
            error:"cant logout"
        })
    }
    return(
        <div>
        <Toaster position="top-center"></Toaster>
            <h1>home page</h1>

            <button onClick={()=>{logout()}} className="bg-black p-3 m-5 text-white rounded-lg">Logout</button>
        </div>
    )
}


export default Home