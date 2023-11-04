import { Toaster } from "react-hot-toast";
import Style from "./dashboard.module.css";
import AdminHeader from "../adminComponents/admin-header/adminheader";
// import { sampledata } from "../../data/sample";
import ReviewAds from "../adminComponents/reviewads/reviewad";
import { useFecthAds } from "../../hooks/usefecthad";
import { myAdsStore } from "../../store/store";
import { ColorRing } from "react-loader-spinner";
const AdminDashboard = () => {

  
  const {ads}=myAdsStore((state)=>state)
  const [{isLoading}]=useFecthAds({type:'pending'});

  
if(isLoading){
  return <div className={Style.main}>
      <div className="w-[100%] h-[200px] justify-center items-center flex">
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
}else{




  return (
    <div>
      <Toaster position="top-center" />
      <div className={Style.main}>
        <AdminHeader />

        <div>
          {ads.map((item, index) => {
            return (
              <ReviewAds
                image={item.image}
                key={index}
                seller={item.seller}
                price={item.price}
                description={item.description}
                rim={item.rim}
                profile={item.profile}
                width={item.width}
                id={item._id}
                brand={item.brand}

              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
};

export default AdminDashboard;
