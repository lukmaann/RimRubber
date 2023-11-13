import Style from "./sellItem.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useFormik } from "formik";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Avtar from "../../assets/uploadimg.png";
import convertToBase64 from "../../helper/convert";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import TyreSize from "../../components/tyresize/tyresize";
import { useTyreSizeStore } from "../../store/store";
import { SellItemapi } from "../../helper/adsHelper";
import { useNavigate } from "react-router-dom";

const SellItem = () => {
  const navigate = useNavigate();

  const tyresize = useTyreSizeStore((state) => state);
  const [file, setfile] = useState();
  const [image, setimage] = useState();
  const formik = useFormik({
    initialValues: {
      price: "",
      brand: "",
      location: "",
      description: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value, { resetForm }) => {
      value = await Object.assign(value, { image: image });
      value = await Object.assign(value, { width: tyresize.width });
      value = await Object.assign(value, { profile: tyresize.profile });
      value = await Object.assign(value, { rim: tyresize.rim });

      const sell = SellItemapi(value);
      toast.promise(sell, {
        loading: "Posting Your Ad",
        success: "Ad posted",
        error: "Cant post now , please try later",
      });
      sell.then(() => {
        resetForm();
        navigate("/myads");
      });
    },
  });

  const uploadimg = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);

    setfile(base64);
    setimage(e.target.files[0]);
  };
  return (
    <div className={Style.main}>
      <Toaster position="top-center"></Toaster>
      <Header />
      <div className={Style.topdiv}>
        <h1 className="text-gray-400 font-bold text-center text-2xl capitalize">
          Enter you tyre details
        </h1>

        <form
          className="w-[90vw] mx-auto h-[80vh] flex flex-col items-center justify-center "
          onSubmit={formik.handleSubmit}
        >
          <div className={Style.form}>
            <label htmlFor="img">
              <img src={file || Avtar} alt="" className={Style.uploadimg} />
            </label>
            <input
              type="file"
              id="img"
              className="hidden"
              onChange={uploadimg}
            />

            <div className={Style.details}>
              <TyreSize />
              <input
                type="text"
                placeholder="Brand"
                {...formik.getFieldProps("brand")}
                className={Style.input}
              />
              <input
                type="text"
                placeholder="Price"
                {...formik.getFieldProps("price")}
                className={Style.input}
              />
              <input
                type="text"
                placeholder="Location"
                {...formik.getFieldProps("location")}
                className={Style.input}
              />

              <textarea
                name=""
                {...formik.getFieldProps("description")}
                id=""
                cols="20"
                rows="10"
                placeholder="Description"
                className={`${Style.input} h-20 min-w-[300px] w-[50%]`}
              ></textarea>
            </div>
          </div>
          <div className="w-[100%]  text-center">
            <button
              type="submit"
              className="bg-yellow-400 px-4 text-xl py-2 m-2 mx-auto rounded-lg  w-[300px] text-black"
            >
              Upload Ad <FileUploadIcon />
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SellItem;
