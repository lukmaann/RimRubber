/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Style from "./reviewad.module.css";
import { myAdsStore } from "../../../store/store";
import { updateAdsStatus } from "../../../helper/adsHelper";
import toast from "react-hot-toast";




const ReviewAds = (props) => {

  const removeAds=myAdsStore((state)=>state.removeAds)
  const { image, seller, price, description, rim, profile, width ,brand,id} = props;




  const Approve=()=>{
    const update=updateAdsStatus({id,type:"active"});

    toast.promise(update,{
      loading:"Wait",
      error:"Error",
      success:"Done"
    })

    update.then(()=>{
    removeAds(id)

    })

    


  }

  
  const reject=()=>{

    const update=updateAdsStatus({id,type:"rejected"});
    toast.promise(update,{
      loading:"Wait",
      error:"Error",
      success:"Done"
    })

    update.then(()=>{
      removeAds(id)
    })

    

  }

  return (
    <div className={Style.main}>
      <img src={image} alt="img" className={Style.img} />

      <div className={Style.content}>
        <h1>Seller : {seller}</h1>
        <h1> ₹ {price}</h1>
      </div>
      <div className={Style.description}>
        <h1>
          <span className="text-gray-400 text-lg">Description:</span>{" "}
          {description}
        </h1>
        <div className="flex justify-between">
          <h1>
            <span className="text-gray-400 text-lg">Rim:</span> {rim}
          </h1>
          <h1>
            <span className="text-gray-400 text-lg">Profile:</span> {profile}
          </h1>
          <h1>
            <span className="text-gray-400 text-lg">width:</span> {width}
          </h1>
        </div>
  
      </div>
      <h1 className="text-left max-sm:w-[90%] px-2"> <span className="text-gray-400">Brand:</span> {brand}</h1>
      <div className={Style.btnbox}>
            <button onClick={Approve}>Approve Ad</button>
            <button onClick={reject}>Reject Ad</button>


        </div>
    </div>
  );
};

export default ReviewAds;
