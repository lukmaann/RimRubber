/* eslint-disable react/prop-types */
import demoImage from "../../assets/demoimg.png"
import { delAd } from "../../helper/adsHelper"
import Style from "./ads.module.css"
import { myAdsStore } from "../../store/store"
import { toast } from "react-hot-toast"

const AdComponent=(props)=>{
    const removeAds=myAdsStore((state)=>state.removeAds)

    const {image,brand,price,id,status}=props
    const delItem=()=>{
        toast.promise(delAd(id),{
            loading:"Deleting ad",
            success:"Ad deleted",
            error:"error"
        })
        removeAds(id)

    }

   let statusbg='';
   if(status==='active'){
    statusbg='bg-green-500'
   }else if(status==='pending'){
    statusbg='bg-pink-500'
   }else if(status==='rejected'){
    statusbg='bg-red-500'
   }else if(status==='sold'){
    statusbg='bg-purple-500'
   }
    
    return (
        <div className={Style.main}>
        
           <div className={Style.topdiv}>
           <img src={image||demoImage} alt="ad image"  className={Style.img}/>
           <h1>{brand}</h1>
           </div>
           <div className={Style.middiv}>
           <h2>₹{price} </h2>
           <h1 className={statusbg} >{status}</h1>
           </div>
           <div className="flex flex-col">
            <button>Mark as sold</button>
            <button onClick={delItem}> Delete Ad</button>
           </div>


        </div>
    )
}

export default AdComponent