/* eslint-disable no-unused-vars */
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./offersPage.module.css";
import { offersIgot } from "../../store/store";
import { useOffersIGot } from "../../hooks/usefecthOffers";
import OffersGot from "../../components/myoffers/offersGotComponent";
import { useUserStore } from "../../store/store";
import { Toaster } from "react-hot-toast";

const OfferPage = () => {
  const { user } = useUserStore((state) => state);
  const { offers } = offersIgot((state) => state);
  const [{ isLoading }] = useOffersIGot({ sellerId: user._id });

  return (
    <div>
    <Toaster position="top-center"/>
      <Header />
      <h1 className={Style.offermade}>
        offers got
      </h1>
      <div className={Style.main}>
        <div className={Style.offers}>
          {offers.length == 0 ? (
            <h1 className={Style.nooffer}>You have not received any offers</h1>
          ) : (
            offers.map((item, index) => {
              return item.offers.map((offer, index) => {
                return (
                 offer.status!==''&& <OffersGot
                    key={offer._id}
                    image={item.image}
                    brand={item.brand}
                    buyer={offer.buyer.username}
                    price={item.price}
                    offeredPrice={offer.offeredPrice}
                    id={offer._id}
                    postId={item._id}
                    status={offer.status}
                    userId={offer.buyer._id}
                  />
                );
              });
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferPage;
