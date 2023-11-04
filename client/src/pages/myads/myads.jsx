import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./myads.module.css";
import { Toaster } from "react-hot-toast";
import { useFecthMyAds } from "../../hooks/usefecthad";
// import { sampledata } from "../../data/sample";
import { myAdsStore } from "../../store/store";
import AdComponent from "../../components/ads/ad-component";
import { useNavigate } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner'

const Myads = () => {
  const [getdata] = useFecthMyAds();
  const navigate = useNavigate()
  const myads = myAdsStore((state) => state.ads);
  // const myads = sampledata;


  if (getdata.isLoading) {
    return (
      <div className={Style.main}>
        <Toaster position="top-center"></Toaster>
        <Header />

        <div className={Style.topdiv}>
          <div className="w-[100%] justify-center items-center flex">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#111827','#111827','#111827','#111827','#111827']}
          />
          </div>
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
          {myads.length === 0 ? <div className="flex w-[100%] h-[100%] text-xl capitalize justify-center items-center">


            <div>

              <h1> You havent posted Anything yet</h1>
              <button onClick={() => navigate('/sellitem')} className=" border  rounded-sm p-2 capitalize text-white my-5 ">Start selling now</button>
            </div>


          </div> : myads.map((item, index) => {
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
                id={item._id}
                status={item.status}
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
