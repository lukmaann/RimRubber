/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Style from "./reviewad.module.css";
const ReviewAds = (props) => {
  const { image, seller, price, description, rim, profile, width ,brand} = props;

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
            <button>Approve Ad</button>
            <button>Reject Ad</button>


        </div>
    </div>
  );
};

export default ReviewAds;
