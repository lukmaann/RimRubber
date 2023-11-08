import { useState } from "react";
import { useSingleAd } from "../../hooks/usefecthad";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Loadingscreen from "../widjets/loadingsppiner";
import Style from "./singleAd.module.css";
import { useLocation } from "react-router-dom";
import PopUp from "../widjets/popUp";
import MakeOffer from "../setting/makeOffer";
import postAge from "../../helper/postage";
import { useUserStore } from "../../store/store";
import {Toaster} from "react-hot-toast";
// import {sampleMyad} from "../../data/sample"

const SingleAd = () => {
  const {user}=useUserStore((state)=>state)
  const location = useLocation();
  const id = location.state.id;

  const [{ apidata, isLoading }] = useSingleAd({ id });

  // const apidata=sampleMyad
  
  const [modal,setModal]=useState(false)

  if (isLoading) {
    return <Loadingscreen />;
  }

  return (
    <div className={Style.cointainer}>
    <Toaster position="top-center"/>
      <Header />
      <div className={Style.main}>
        <div className={Style.topdiv}>
          <img src={apidata.data.image} alt="" />
        </div>
        <div className={Style.bottomdiv}>
          <div className={Style.price}>
            <h1>₹ {apidata.data.price}</h1>
            <h2>{apidata.data.description}</h2>
            <h2 className=" p-2 text-end">{postAge(apidata.data.createdAt)===0?"Today":postAge(apidata.data.createdAt) +" Days Ago"}</h2>
          </div>
          <div className={Style.details}>
          <h1 className="text-3xl border-b mb-2 w-[100%] p-2">Details</h1>
          <h2><span className={Style.detailsname}>Seller :</span> {apidata.data.seller.username}</h2>
          
          <h2><span className={Style.detailsname}>Brand :</span> {apidata.data.brand}</h2>
          <h2><span className={Style.detailsname}>Rim size :</span> {apidata.data.rim}</h2>
          <h2><span className={Style.detailsname}>profile size :</span> {apidata.data.profile}</h2>
          <h2><span className={Style.detailsname}>width :</span> {apidata.data.width}</h2>
          <div className={Style.buttonbox}>
          {
           apidata.data.seller._id===user._id?<h1 className="w-full text-end">Ad {apidata.data.status}</h1> :<button onClick={()=>setModal(true)}>Make an Offer</button>

          }
          </div>


          </div>
        </div>
        <PopUp openPopUp={modal} setopenPopup={setModal} title={" Select Amount"}>
          <MakeOffer price={apidata.data.price} id={apidata.data._id}/>
        </PopUp>
      </div>

      <Footer />
    </div>
  );
};

export default SingleAd;
