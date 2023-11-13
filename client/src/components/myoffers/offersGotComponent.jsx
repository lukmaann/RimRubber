/* eslint-disable react/prop-types */

import Style from "./myOfferComponent.module.css";
import PlaceIcon from "@mui/icons-material/Place";

const OffersGot = (props) => {
  const { brand, offeredPrice, status, image, location, buyer, price } = props;
  return (
    <div className="border border-black  m-2 ">
    <div className={`${Style.main} h-min pb-0`}>
      <div className={Style.img}>
        <img src={image} />
      </div>
      <h1 className="absolute top-0 left-0 bg-yellow-400 p-1 rounded-br-md capitalize">
        {status}
      </h1>
      <h1 className="absolute top-0 right-0 border text-xs bg-gray-100 p-1 rounded-br-md capitalize">
        <PlaceIcon fontSize="small" />
        {location}
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
          <button>Accept Offer</button>
          <button>Reject Offer</button>
          <button>Mark as sold</button>

        </div> 
    </div>
  );
};

export default OffersGot;
