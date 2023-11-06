import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./items.module.css";
import { buyItemstore } from "../../store/store";
import ItemComponents from "../../components/items/itemComponent";
import { useState } from "react";

const Items = () => {
  const { ads } = buyItemstore((state) => state);

  const [query,setQuery]=useState('2500')


  

  return (
    <div>
      <Header />
      <div className={Style.main}>
      

      <div className="text-center">
      <h1>Selected Range  ₹{query}</h1>
      <div className={Style.filter}>
      1000
      <input type="range" defaultValue={2500}  min={1000} max={3000} onChange={e=>setQuery(e.target.value)}/>
      3000

      </div>
      </div>
        <div className={Style.txt}>
          <h1>Showing Results</h1>
          <h1>{ads.length} Ads</h1>
        </div>
        <div className={Style.itemcointainer}>
          {ads.filter((ad)=>ad.price<=parseInt(query)).map((item) => {
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
