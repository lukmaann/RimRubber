import Style from "./uploadItem.module.css";
import Avtar from "../../../assets/uploadimg.png";
import { useFormik } from "formik";
import convertToBase64 from "../../../helper/convert";
import { useState } from "react";
import { ListItem } from "../../../helper/adminItemhelper";
import toast from "react-hot-toast";

const UploadItem = () => {
  const [file, setfile] = useState();
  const [image, setimage] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      stock: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (value) => {
      value = await Object.assign(value, { image : image });
      console.log(value.image)
      const list=ListItem(value);

      toast.promise(list,{
        loading:"Listing Item",
        success:"Item Listed",
        error:"Error occured"
      })

      list.then((data)=>{
        console.log(data);
      })




    
    },
  });

  const handleChange = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    console.log(e.target.files[0]);

    setfile(base64);
    setimage(e.target.files[0]);
  };

  return (
    <div className={Style.main}>
      <form className={Style.form} onSubmit={formik.handleSubmit}>
        <div className={Style.inputfeilds}>
          <input
            type="text"
            className={Style.inputs}
            placeholder="Name of Product"
            {...formik.getFieldProps("name")}
          />
          <input
            type="text"
            {...formik.getFieldProps("price")}
            className={Style.inputs}
            placeholder="Price"
          />
          <input
            type="text"
            {...formik.getFieldProps("stock")}
            className={Style.inputs}
            placeholder="Stock"
          />
          <input
            type="text"
            className={Style.inputs}
            {...formik.getFieldProps("description")}
            placeholder="Description"
          />
        </div>
        <div className={Style.img}>
          <label htmlFor="img" className="w-full h-full">
            <img
              src={file || Avtar}
              alt=""
              className="w-full h-full object-cover"
            />
          </label>
          <input
            type="file"
            className="hidden"
            id="img"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className=" absolute bottom-2  w-[80%] rounded-md p-2 m-1"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadItem;
