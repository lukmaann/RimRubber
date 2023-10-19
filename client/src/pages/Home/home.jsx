import { Toaster } from "react-hot-toast";

import Style from "./home.module.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()
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
          <button className={Style.btn} onClick={()=>{navigate('/sellitem')}}>Sell </button>
        </div>
      </div>

      <Footer />

      {/* <button onClick={()=>{logout()}} className="bg-black p-3 m-5 text-white rounded-lg">Logout</button> */}
    </div>
  );
};

export default Home;
