/* eslint-disable react/prop-types */
import { callRemoveFromCart } from "../../helper/cartHelper";
import Style from "./cartComponent.module.css";
import { useUserStore } from "../../store/store";
import toast from "react-hot-toast";

const CartComponent = (props) => {
    const {user,removefromcart}=useUserStore((state)=>state)
  const { image, name, price ,itemId} = props;

  const remove=()=>{
    const call=callRemoveFromCart({userId:user._id,itemId})
    toast.promise(call,{
        loading:"Removing Item",
        success:"Item removed from cart",
        error:"cant remove Item",
        
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
      <div className={Style.detail}>
        <h1>{name}</h1>
        <h1>₹{price}</h1>

        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

export default CartComponent;
