/* eslint-disable react/prop-types */
import demoImage from "../../assets/demoimg.png"
import { delAd } from "../../helper/helper"
import Style from "./ads.module.css"
import { myAdsStore } from "../../store/store"
import { toast } from "react-hot-toast"

const AdComponent=(props)=>{
    const removeAds=myAdsStore((state)=>state.removeAds)

    const {image,brand,price,id}=props
    const delItem=()=>{
        removeAds(id)
        toast.promise(delAd(id),{
            loading:"Deleting ad",
            success:"AD deleted",
            error:"error"
        })

    }
    return (
        <div className={Style.main}>
        
           <div className={Style.topdiv}>
           <img src={image||demoImage} alt="ad image"  className={Style.img}/>
           <h1>{brand}</h1>
           </div>
           <h2>₹{price} </h2>
           <div className="flex flex-col">
            <button>Mark as sold</button>
            <button onClick={delItem}> Delete Ad</button>
           </div>


        </div>
    )
}

export default AdComponent