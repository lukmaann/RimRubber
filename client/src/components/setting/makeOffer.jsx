/* eslint-disable react/prop-types */

import Style from "./makeOffer.module.css";
import { useFormik } from "formik";

const MakeOffer = (props) => {
  const { price } = props;

  const formik = useFormik({
    initialValues: {
      price: price,
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      alert(value.price);
    },
  });

  const prices = [price, price - 500, price - 800, price - 1000];

  const handleclick = (e) => {
    formik.setFieldValue("price",e.target.value)
  };

  return (
    <div className={Style.main}>
      <div className={Style.btnbox}>
        {prices.map((item, index) => {
          return (
            <button onClick={handleclick} key={index} className={item==formik.values.price?Style.selected:""} value={item}>
            ₹{item}
            </button>
          );
        })}
      </div>
      <form onSubmit={formik.handleSubmit} className={Style.inputFeild}>
      <input type="text" onChange={formik.handleChange} value={formik.values.price} {...formik.getFieldProps('price')} placeholder="Enter your Amount" autoComplete="off"/>
      <button type="submit">Offer</button>

      </form>
    </div>
  );
};

export default MakeOffer;
