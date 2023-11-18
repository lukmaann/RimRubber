import Style from "./buyitem.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import TyreSize from "../../components/tyresize/tyresize";
import { useFormik } from "formik";
import { useTyreSizeStore } from "../../store/store";
import { findAdsByWidth } from "../../helper/adsHelper";
import toast, { Toaster } from "react-hot-toast";
import { buyItemstore } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fecthListedItems } from "../../helper/adminItemhelper";
import OtherItems from "../../components/otherItems/otheritemcomponent";

const BuyItem = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    const fetch = fecthListedItems();
    toast.promise(fetch, {
      loading: "Fecthing All Items",
      success: "Items Fecthed",
      error: "Cant Fecth Items Right Now",
    });
    fetch.then((res) => {
      setdata(res);
    });
  }, []);
  const navigate = useNavigate();
  const { setAds } = buyItemstore((state) => state);
  const { width, profile } = useTyreSizeStore((state) => state);
  const formik = useFormik({
    initialValues: {},
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      console.log(value);
      value = Object.assign(value, { width });
      value = Object.assign(value, { profile });

      const find = findAdsByWidth({
        width: value.width,
        profile: value.profile,
      });
      toast.promise(find, {
        loading: "Finding Items",
        error: "Cant find Item",
      });

      find.then((data) => {
        setAds(data);
        navigate("/resultitems", { state: { width } });
      });
    },
  });
  return (
    <div>
      <Toaster position="top-center" />
      <Header />
      <div className={Style.main}>
        <div className={Style.topdiv}>
          <h1 className={Style.heading}>Find tyre by size </h1>
          <div>
            <TyreSize />
            <form action="" onSubmit={formik.handleSubmit}>
              <button type="submit" className={Style.findbtn}>
                Find{" "}
              </button>
            </form>
          </div>
        </div>
        <div className={Style.otheritems}>
          <div className="">
            <h1>items you may also like</h1>
          </div>
          <div className={Style.otheritemsbox}>
            {data?.map((item) => {
              return (
                <OtherItems
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  itemId={item._id}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BuyItem;
