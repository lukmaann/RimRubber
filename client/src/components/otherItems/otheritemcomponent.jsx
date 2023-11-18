/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Style from "./otheritemcomponent.module.css";
import { callAddToCart, callRemoveFromCart } from "../../helper/cartHelper";
import { useUserStore } from "../../store/store";
import toast from "react-hot-toast"


const OtherItems = (props) => {
  const {user,removefromcart,addcart}=useUserStore((state)=>state)
    const {image,name,price,itemId}=props;

    const addtocart=()=>{
      const call=callAddToCart({userId:user._id,itemId});
      toast.promise(call,{
        loading:"Adding Item To Cart",
        success:"Item Added To Cart",
        error:"error"
      })
      call.then(()=>{

        addcart({id:itemId})


      })
    }

    const removecart=()=>{
      const call=callRemoveFromCart({userId:user._id,itemId});
      toast.promise(call,{
        loading:"Removing Item",
        success:"Item removed from cart",
        error:"error"
      })
      call.then(()=>{

        removefromcart({id:itemId})


      })
    }
  return (
    <div className={Style.main}>
    <div className={Style.imgbox}>
        <img src={image} alt="" className="w-full h-full" />
    </div>
    <div className={Style.details}>
    <h1>{name}</h1>
        <h1>₹{price}</h1>
    </div>
    {
      user.cart.includes(itemId)? <button className={Style.addtocartbtn} onClick={removecart}> Remove From cart</button>:<button className={Style.addtocartbtn} onClick={addtocart}> Add to cart</button>
     
    }

    </div>
  )
}

export default OtherItems