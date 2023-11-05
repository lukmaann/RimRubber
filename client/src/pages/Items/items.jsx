import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./items.module.css";
import { buyItemstore } from "../../store/store";
import ItemComponents from "../../components/items/itemComponent";

const Items = () => {
  const { ads } = buyItemstore((state) => state);
  return (
    <div>
      <Header />
      <div className={Style.main}>
        <div className={Style.txt}>
          <h1>Showing Results</h1>
          <h1>{ads.length} Ads</h1>
        </div>
        <div className={Style.itemcointainer}>
          {ads.map((item) => {
            return (
              <ItemComponents
                key={item._id}
                image={item.image}
                price={item.price}
                location={item.location}
                id={item._id}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Items;
