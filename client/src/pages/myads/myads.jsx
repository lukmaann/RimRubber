import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./myads.module.css";
import { Toaster } from "react-hot-toast";
// import { getAds } from "../../helper/helper";
import useFecthMyAds from "../../hooks/usefecthad";
import { sampledata } from "../../../data/sample";
import { myAdsStore } from "../../store/store";

const Myads = () => {
    const myads=myAdsStore((state)=>state.ads);


    
  const [getdata] = useFecthMyAds();

  if (getdata.isLoading) {
    return (
      <div className={Style.main}>
        <Toaster position="top-center"></Toaster>
        <Header />

        <div className={Style.topdiv}>
          <h1>Loading</h1>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={Style.main}>
        <Toaster position="top-center"></Toaster>
        <Header />

        <div className={Style.topdiv}>
        
        </div>
        <Footer />
      </div>
    );
  }
};

export default Myads;
