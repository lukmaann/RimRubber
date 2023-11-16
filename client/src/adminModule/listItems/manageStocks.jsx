import { useState } from "react";
import AdminHeader from "../adminComponents/admin-header/adminheader";
import UploadItem from "../adminComponents/uploadItem/uploadItem";
import Style from "./manageStocks.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fecthListedItems } from "../../helper/adminItemhelper";
import ListedComponent from "../adminComponents/listedcomponent/listedComponent";

const ManageStockPage = () => {
  const [data,setdata]=useState();
  useEffect(()=>{
    const fetch=fecthListedItems();
    toast.promise(fetch,{
      loading:"Fecthing All Items",
      success:"Items Fecthed",
      error:"Cant Fecth Items Right Now"
    })
    fetch.then((res)=>{
      console.log(res);
      setdata(res)
    })
  },[])
  const [upload, setUpload] = useState(false);
  return (
    <div>
      <Toaster position="top-center" />
      <AdminHeader />
      <div className={Style.main}>
        <div className="w-full flex justify-center items-center  p-2">
          <button
            onClick={() => setUpload(!upload)}
            className={Style.uploadbtn}
          >
            {!upload ? "List New Item" : "Close"}
          </button>
        </div>
        {upload ? <UploadItem /> : ""}
      <div className={Style.listeditems}>
      {
        data?.map((items)=>{
          return <ListedComponent key={items.index} sale={items.sale} name={items.name} price={items.price} description={items.description} stock={items.stock} image={items.image} /> 
        })
      }
      </div>

      </div>
    </div>
  );
};

export default ManageStockPage;
