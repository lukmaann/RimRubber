/* eslint-disable react/prop-types */

import { callMakeOffer } from "../../helper/offerHelper";
import Style from "./makeOffer.module.css";
import { useFormik } from "formik";
import { useUserStore } from "../../store/store";
import toast from "react-hot-toast";

const MakeOffer = (props) => {
  const { user } = useUserStore((state) => state);
  const { price, id,modal } = props;

  const formik = useFormik({
    initialValues: {
      price: price,
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      const offer = callMakeOffer({
        buyerId: user._id,
        itemId: id,
        offeredPrice: value.price,
      });

      toast.promise(offer, {
        loading: "Making offer",
        success: "Offer sent to seller",
        error: "Network error",
      });

      offer.then(()=>{
        modal(false)
      })
    },
  });

  const prices = [price, price - 500, price - 800, price - 1000];

  const handleclick = (e) => {
    formik.setFieldValue("price", e.target.value);
  };

  return (
    <div className={Style.main}>
      <div className={Style.btnbox}>
        {prices.map((item, index) => {
          return (
            <button
              onClick={handleclick}
              key={index}
              className={item == formik.values.price ? Style.selected : ""}
              value={item}
            >
              ₹{item}
            </button>
          );
        })}
      </div>
      <form onSubmit={formik.handleSubmit} className={Style.inputFeild}>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
          {...formik.getFieldProps("price")}
          placeholder="Enter your Amount"
          autoComplete="off"
        />
        <button type="submit">Offer</button>
      </form>
    </div>
  );
};

export default MakeOffer;
