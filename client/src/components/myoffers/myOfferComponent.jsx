/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { callWithdrawOffer } from "../../helper/offerHelper";
import Style from "./myOfferComponent.module.css"
import PlaceIcon from '@mui/icons-material/Place';
import { myOffers } from "../../store/store";
import { useUserStore } from "../../store/store";



const MyOfferComponent = (props) => {
  const {withdraw}=myOffers((state)=>state);
  const {user}=useUserStore((state)=>state)
    const {brand,offeredPrice,status,image,location,seller,price,postId,offerId}=props;

    const withdrawOffer=()=>{
      const call=callWithdrawOffer({postId,offerId,userId:user._id});
      toast.promise(call,{
        loading:"Processing",
        error:"cant withdraw now try later",
        success:"Withdrawal successfull"
      });
      call.then(()=>{
        withdraw(offerId);

      })
     
    }
  return (
    <div className={Style.main}>
    <div className={Style.img}>
    <img src={image}  />


    </div>
    <h1 className="absolute top-0 left-0 bg-yellow-400 p-1 rounded-br-md capitalize">{status}</h1>
    <h1 className="absolute top-0 right-0 border text-xs bg-gray-100 p-1 rounded-br-md capitalize"><PlaceIcon fontSize="small"/>{location}</h1>

    <div className={Style.details}>
    <h1><span className={Style.detailhead}>Brand : </span>{brand}</h1>
    <h1><span className={Style.detailhead}>Seller : </span>{seller}</h1>
    <h1><span className={Style.detailhead}> Price : </span>{price}</h1>
    <h1><span className={Style.detailhead}>Your offer : </span>{offeredPrice}</h1>

    <button onClick={withdrawOffer}>Withdraw offer</button>









    </div>

   
   

    </div>
  )
}

export default MyOfferComponent