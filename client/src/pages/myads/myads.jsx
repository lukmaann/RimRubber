import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./myads.module.css";
import { Toaster } from "react-hot-toast";
// import { getAds } from "../../helper/helper";
import useFecthMyAds from "../../hooks/usefecthad";
import { sampledata } from "../../../data/sample";
import { myAdsStore } from "../../store/store";
import AdComponent from "../../components/ads/ad-component";

const Myads = () => {
  const [getdata] = useFecthMyAds();
  const myads=myAdsStore((state)=>state.ads);
  // const myads = sampledata;


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
          {myads.map((item, index) => {
            return (
              <AdComponent
                key={index}
                description={item.description}
                brand={item.brand}
                price={item.price}
                image={item.image}
                location={item.location}
                profile={item.profile}
                width={item.width}
                rim={item.rim}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
};

export default Myads;
