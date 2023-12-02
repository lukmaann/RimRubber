import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Style from "./myCart.module.css";
import { useState, useEffect } from "react";
import { callgetMyCart } from "../../helper/cartHelper";
import { useUserStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";
import CartComponent from "../../components/cartcomponents/cartComponent";
// import { sampleCart } from "../../data/sample";
import PaymentsIcon from '@mui/icons-material/Payments';
import { useNavigate } from "react-router-dom";

const MyCart = () => {
    const navigate=useNavigate()
    
  let total = 0;
 

  const {user}=useUserStore((state)=>state)

  const [data,setdata]=useState();
  data?.map((item) => {
    total += item.price;
  });

  useEffect(()=>{
      const get=callgetMyCart({userId:user._id});


      get.then((response)=>{
          toast.dismiss()
          setdata(response)
      })

  },[data])
  return (
    <div>
      <Toaster position="top-center" />
      <Header />
      <div className={Style.main}>
        <div className={Style.cartItems}>
          {total==0?<div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl text-gray-700 text-center">Your cart is empty</h1>
            <button className="p-2 m-5 bg-yellow-400 rounded-md mx-auto" onClick={()=>navigate('/buyitem')}>Start buying</button>
          </div>:data?.map((item, index) => {
            return (
              <CartComponent
                key={index}
                image={item.image}
                name={item.name}
                itemId={item._id}
                price={item.price}
              />
            );
          })}
        </div>
        <div className={Style.cartTotal}>
          <div className={Style.cartTotalDetails}>
          {
            data?.map((item,index)=>{
                return <div key={index} className="flex p-2 w-full justify-between border h-10">
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>


                </div>
            })
          }


          </div>
          <div className={Style.proceed}>
          Total amt ₹{total}
          {
            total!==0? 
          <button onClick={()=>navigate('/pay')}>Pay Now <PaymentsIcon/></button>:""
          }


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
