/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Style from "./otheritemcomponent.module.css";


const OtherItems = (props) => {
    const {image,name,price}=props;
  return (
    <div className={Style.main}>
    <div className={Style.imgbox}>
        <img src={image} alt="" className="w-full h-full" />
    </div>
    <div className={Style.details}>
    <h1>{name}</h1>
        <h1>₹{price}</h1>
    </div>
    <button className={Style.addtocartbtn}> Add to cart</button>

    </div>
  )
}

export default OtherItems