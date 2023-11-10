import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./offersPage.module.css";
import { offersIgot } from "../../store/store";
import MyOfferComponent from "../../components/myoffers/myOfferComponent";
import { useMyoffer, useOffersIGot } from "../../hooks/usefecthOffers";
import { useUserStore } from "../../store/store";

const OfferPage = () => {
  const {user}=useUserStore((state)=>state)
  const {offers}=offersIgot((state)=>state)
  console.log(offers);
  const [{isLoading}]=useOffersIGot({sellerId:user._id})


  return (
    <div>
      <Header />
      <h1 className="p-2 text-center text-lg  capitalize border border-gray-600 text-gray-600">offers  got</h1>
      <div className={Style.main}>
        {/* <div className={Style.offers}>
        {offers.map((item) => {
          return (
            <div key={item._id}>Under construction </div>
          );
        })}


        </div> */}

        <h1>Under construction</h1>
      </div>
      <Footer />
    </div>
  );

};

export default OfferPage;
