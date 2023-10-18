import { logoutUser } from "../../helper/helper"
import toast, { Toaster } from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import Style from "./home.module.css"
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
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
        <div className={Style.main}>

        
        <Toaster position="top-center"></Toaster>
        <Header/>

        <div className={Style.topdiv}>
        <div className={Style.txt}>
        <h1 >Looking to make a move? </h1>
        <h2 >Want to buy or sell? Choose your path:</h2>
        </div>


        <div>
        <button className={Style.btn}>Buy </button>
        <button className={Style.btn}>Sell </button>
        </div>

     
        

        </div>


        <Footer/>
            

            {/* <button onClick={()=>{logout()}} className="bg-black p-3 m-5 text-white rounded-lg">Logout</button> */}
        </div>
    )
}


export default Home