import Style from "./tyresizehelp.module.css"
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import { useState } from "react"
import rim from "../../assets/tyrerim.png"
import profile from "../../assets/tyreprofile.png"
import width from "../../assets/tyrewidth.png"


const TyreSizeHelp=()=>{

    const [dimension,setDimension]=useState(width);
    return (

        <div className={Style.main}>
        <Header/>
        <div className={Style.topdiv}>

        <img src={dimension} className="w-[200px]"/>

        <div className="flex w-[100% ]  text-white justify-center gap-4">
        <button onClick={()=>setDimension(width)}>width</button>
        <button onClick={()=>setDimension(profile)}>Profile</button>
        <button onClick={()=>setDimension(rim)}>Rim</button>


        </div>

        </div>
        <Footer/>
            
        </div>
    )
}

export default TyreSizeHelp