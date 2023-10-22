import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Style from "./myads.module.css"
import {Toaster,toast} from "react-hot-toast"
import { getAds } from "../../helper/helper"
import useFecthMyAds from "../../hooks/usefecthad"


const Myads=()=>{

    const [getdata,setdata]=useFecthMyAds()

  
    return(
        <div className={Style.main}>
        <Toaster position="top-center"></Toaster>
        <Header/>

        <div className={Style.topdiv}>
        {
           getdata.isloading?<div>loading</div>:<div>done</div>
        }

     


        </div>
        <Footer/>
            
        </div>
    )
}

export default Myads