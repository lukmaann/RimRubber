/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Style from "./listedComponent.module.css";
import EditIcon from "@mui/icons-material/Edit";
const ListedComponent = (props) => {
  const { name, image, description, price, stock,  } = props;
  const sale=Math.floor(Math.random()*100)
  return (
    <div className={Style.main}>
      <div className={Style.imgbox}>
        <img src={image} className="w-full h-full" alt="" />
      </div>
      <div className={Style.details}>
        <div>
          <h1>Product name : </h1>
          <h2>{name}</h2>
        </div>
        <div>
          <h1>Available Stock : </h1>
          <h2>{stock}</h2>
        </div>{" "}
        <div>
          <h1>Price : </h1>
          <h2>{price}</h2>
        </div>
        <div>
          <h1>sales :</h1>
          <h2>{sale} units</h2>
        </div>
        <div>
          <button>
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedComponent;
