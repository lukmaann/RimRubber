import Style from "./adminLogin.module.css";
import Logo from "../../assets/logo.png"
import { useFormik } from "formik";
import { loginAdmin } from "../../helper/loginHelper";
import {toast,Toaster} from "react-hot-toast";
import { useNavigate } from "react-router-dom";




const AdminLogin=()=>{

    const navigate=useNavigate()

    const formik=useFormik({
        initialValues:{
            username:"",
            password:""
        },
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async(values)=>{
           const login= loginAdmin({username:values.username,password:values.password})

           toast.promise(login,{
            loading:"Checking credentials",
            success:"Welcome admin",
            error:"invalid credentials"
           })

           login.then(()=>navigate('/admindashboard'))
        }
    })
    return <div className={Style.main}>
    <Toaster position="top-center"/>
    <div className="w-[320px] justify-center flex flex-col items-center">

    <img src={Logo} alt="" className={Style.logo}/>
    <h1>RimRubber </h1>
    </div>
    <h2 className="text-start w-[320px] px-2 text-gray-500 capitalize">Login as administrator</h2>
    <div className="text-center animate-pulse p-2  ">
        Id: sysadmin | Password: helloadmin
    </div>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="Admin Id 🪪"  {...formik.getFieldProps('username')}/>
            <input type="password" placeholder="Admin Password 🔑" {...formik.getFieldProps('password')}/>
            <button type="submit" className={Style.submitbtn}>Login</button>
        </form>
    </div>
}


export default AdminLogin