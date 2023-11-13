/* eslint-disable no-unused-vars */
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./offersPage.module.css";
import { offersIgot } from "../../store/store";
import { useOffersIGot } from "../../hooks/usefecthOffers";
import OffersGot from "../../components/myoffers/offersGotComponent";
import { useUserStore } from "../../store/store";

const OfferPage = () => {
  const { user } = useUserStore((state) => state);
  const { offers } = offersIgot((state) => state);
  console.log(offers);
  const [{ isLoading }] = useOffersIGot({ sellerId: user._id });

  return (
    <div>
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
                  <OffersGot
                    key={item.index}
                    image={item.image}
                    brand={item.brand}
                    buyer={offer.buyer.username}
                    price={item.price}
                    offeredPrice={offer.offeredPrice}
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
