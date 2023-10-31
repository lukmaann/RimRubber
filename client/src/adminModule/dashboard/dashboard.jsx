import { useNavigate } from "react-router-dom"
import { logoutUser } from "../../helper/loginHelper"
import toast, { Toaster } from "react-hot-toast"


const AdminDashboard=()=>{

    const navigate=useNavigate()


    const logout=()=>{
        const lo=logoutUser();
        toast.promise(lo,{
            loading:"logging out",
            error:"error",
            success:"Loged out"
        })
        lo.then(()=>navigate('/adminlogin'))
    }
    

    return <div>
    <Toaster position="top-center"/>


    <button onClick={logout} className="p-3 border m-10 border-black">Logout</button>

    </div>

}

export default AdminDashboard