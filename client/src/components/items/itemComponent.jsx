/* eslint-disable react/prop-types */
import Style from "./itemcomponent.module.css";
import RoomIcon from "@mui/icons-material/Room";
import { useNavigate } from "react-router-dom";

const ItemComponents = (props) => {
  const navigate = useNavigate();
  const { price, image, location, id, description } = props;
  return (
    <div
      className={Style.main}
      onClick={() => {
        navigate("/singlead", { state: { id } });
      }}
    >
      <div className={Style.img}>
        <img src={image} alt="" />
      </div>
      <div className={Style.details}>
        <h1 className="text-xl font-bold m-2">₹{price}</h1>
        <h1 className="w-full capitalize text-gray-500 m-2 ">
          {description.slice(0, 15)}...
        </h1>
        <h1 className="text-gray-600 p-1 mt-5 capitalize">
          <RoomIcon fontSize="smal" />
          {location}
        </h1>
      </div>
    </div>
  );
};

export default ItemComponents;
