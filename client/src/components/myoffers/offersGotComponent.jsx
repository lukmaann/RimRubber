/* eslint-disable react/prop-types */

import Style from "./myOfferComponent.module.css";
import { callUpdateOffer } from "../../helper/offerHelper";
import toast from "react-hot-toast"
import { useState } from "react";
import { offersIgot } from "../../store/store";

const OffersGot = (props) => {
  const {filterOffers}=offersIgot((state)=>state)
  const { brand, offeredPrice, status, image,  buyer, price,id,postId } = props;
  let statusbg = '';
  if (status === 'accepted') {
      statusbg = 'bg-green-400'
  } else if (status === 'pending') {
      statusbg = 'bg-pink-500'

  } else if (status === 'rejected') {
      statusbg = 'bg-red-400'

  } else if (status === 'sold') {
      statusbg = 'bg-purple-500'

  }

  
  
  
  
  const Accept=()=>{

    const update=callUpdateOffer({query:'accepted',offerId:id,postId});

    toast.promise(update,{
      loading:"Accepting Offer",
      error:"Can't Accept",
      success:"Offer Accepted"
    })

    update.then(()=>{
      filterOffers({id})
      // updateStatus({id,statusType:'accepted',postId})
      // updateStatus({id,status:'accepted'})
    })



  }

  const Reject=()=>{
    const update=callUpdateOffer({query:'rejected',offerId:id,postId});

    toast.promise(update,{
      loading:"Rejecting Offer",
      error:"Can't Accept",
      success:"Offer Rejected"
    })

    update.then(()=>{
      // updateStatus({id,statusType:'rejected',postId})
    })




  }

  const Sold=()=>{
    const update=callUpdateOffer({query:'sold',offerId:id,postId});

    toast.promise(update,{
      loading:"Updating Item",
      error:"Can't Accept",
      success:"Done"
    })
    update.then(()=>{
      // updateStatus({id,statusType:'sold',postId})
      
    })

  }
  return (
    <div className="border border-black  rounded-md m-2 ">
    <div className={`${Style.main} h-min pb-0`}>
      <div className={Style.img}>
        <img src={image} />
      </div>
      <h1 className={`absolute top-0 left-0  p-1 text-white rounded-br-md capitalize ${statusbg} `}>
        {status}
      </h1>
      

      <div className={Style.details}>
        <h1>
          <span className={Style.detailhead}>Brand : </span>
          {brand}
        </h1>
        <h1>
          <span className={Style.detailhead}>Buyer : </span>
          {buyer}
        </h1>
        <h1>
          <span className={Style.detailhead}> Price : </span>
          {price}
        </h1>
        <h1>
          <span className={Style.detailhead}> Offered Price : </span>
          {offeredPrice}
        </h1>

        
      </div>
    </div>
    <div className={Style.btnbox}>
          <button onClick={Accept}>Accept Offer</button>
          <button onClick={Reject}>Reject Offer</button>
          <button onClick={Sold}>Mark as sold</button>

        </div> 
    </div>
  );
};

export default OffersGot;
