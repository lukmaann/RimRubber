import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./offersPage.module.css";
import { myOffers } from "../../store/store";
import MyOfferComponent from "../../components/myoffers/myOfferComponent";
import { useMyoffer } from "../../hooks/usefecthOffers";
import { useUserStore } from "../../store/store";
import { ColorRing } from "react-loader-spinner";

import { Toaster } from "react-hot-toast";

const OfferPage = () => {
  const { user } = useUserStore((state) => state);
  const { offers } = myOffers((state) => state);
  const [{ isLoading }] = useMyoffer({ buyerId: user._id });

  if (isLoading) {
    <div className="w-[100%] justify-center items-center text-black p-3 flex">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#111827", "#111827", "#111827", "#111827", "#111827"]}
      />
    </div>;
  }
  return (
    <div>
      <Toaster position="top-center" />
      <Header />
      <h1 className={Style.offermade}>offers made</h1>
      <div className={Style.main}>
        <div className={Style.offers}>
          {offers.length == 0 ? (
            <h1 className={Style.nooffer}>No offer has been made</h1>
          ) : (
            offers.map((item) => {
              return (
                <MyOfferComponent
                  key={item._id}
                  brand={item.item.brand}
                  offeredPrice={item.offeredPrice}
                  status={item.status}
                  image={item.item.image}
                  seller={item.item.seller.username}
                  price={item.item.price}
                  location={item.item.location}
                  offerId={item._id}
                  email={item.item.seller.email}
                  postId={item.item._id}
                />
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferPage;
