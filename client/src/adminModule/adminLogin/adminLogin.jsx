import Style from "./adminLogin.module.css";
import Logo from "../../assets/logo.png"

const AdminLogin=()=>{
    return <div className={Style.main}>
    <div className="w-[320px] justify-center flex flex-col items-center">
    <img src={Logo} alt="" className={Style.logo}/>
    <h1>RimRubber </h1>
    </div>
    <h2 className="text-start w-[320px] px-2 text-gray-500 capitalize">Login as administrator</h2>
        <form action="">
            <input type="text" placeholder="Admin Id 🪪" />
            <input type="text" placeholder="Admin Password 🔑" />
            <button type="submit" className={Style.submitbtn}>Login</button>
        </form>
    </div>
}


export default AdminLogin