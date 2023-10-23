import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Style from "./myads.module.css"
import {Toaster,toast} from "react-hot-toast"
import { getAds } from "../../helper/helper"
import useFecthMyAds from "../../hooks/usefecthad"
import { sampledata } from "../../../data/sample"


const Myads=()=>{

    const [getdata]=useFecthMyAds()
    console.log(getdata.apiData);

    if(getdata.isLoading){
        return <div className={Style.main}>
            <Toaster position="top-center"></Toaster>
            <Header/>
    
            <div className={Style.topdiv}>
           <h1>Loading</h1>
           
           
         
           
    
         
    
    
            </div>
            <Footer/>
                
            </div>
    }else{
        return (
            <div className={Style.main}>
            <Toaster position="top-center"></Toaster>
            <Header/>
    
            <div className={Style.topdiv}>
            {
             <h1>{sampledata._id}</h1>
            }
           
           
         
           
    
         
    
    
            </div>
            <Footer/>
                
            </div>
      
     
        )
    }
}

export default Myads