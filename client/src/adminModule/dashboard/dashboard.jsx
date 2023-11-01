import { Toaster } from "react-hot-toast";
import Style from "./dashboard.module.css";
import AdminHeader from "../adminComponents/admin-header/adminheader";
// import { sampledata } from "../../data/sample";
import ReviewAds from "../adminComponents/reviewads/reviewad";
import { useFecthAds } from "../../hooks/usefecthad";
import { myAdsStore } from "../../store/store";
const AdminDashboard = () => {

  
  const {ads}=myAdsStore((state)=>state)
  const [{apiData,isLoading}]=useFecthAds({type:'pending'});

  
if(isLoading){
  return <div>Loading</div>
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
