import { Toaster } from "react-hot-toast";
import PopUp from "../../components/widjets/popUp";


import Style from "./home.module.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/store";
import { useState } from "react";
import UpdateProfile from "../../components/updateProfile/updateProfile";
const Home = () => {
  const {user}=useUserStore((state)=>state)
  const [pop,setPop]=useState(false)
  const navigate=useNavigate()


  const sellitem=()=>{

    if(!user.email){
      setPop(true)
    }else{

      navigate('/sellitem')
    }

  }
  return (
    <div className={Style.main}>
      <Toaster position="top-center"></Toaster>
      <Header />

      <div className={Style.topdiv}>
        <div className={Style.txt}>
          <h1>Looking to make a move? </h1>
          <h2>Want to buy or sell? Choose your path:</h2>
        </div>

        <div className={Style.btndiv}>
          <button className={Style.btn} onClick={()=>{navigate('/buyitem')}}>Buy </button>
          <button className={Style.btn} onClick={sellitem}>Sell </button>
        </div>
      </div>

      <Footer />
      <PopUp openPopUp={pop} setopenPopup={setPop} title={`Hey, ${user.username} 🫡 `}>
        <UpdateProfile id={user._id} setPopup={setPop}/>
      </PopUp>

      {/* <button onClick={()=>{logout()}} className="bg-black p-3 m-5 text-white rounded-lg">Logout</button> */}
    </div>
  );
};

export default Home;
