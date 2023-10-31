/* eslint-disable no-unused-vars */
import axios from "./axiosConfig"


// ------------------------------calls sellitem api------------------------

export const SellItemapi = async (values) => {
    try {
      const { brand, price, location, image, description, rim, profile, width } =
        values;
  
      const formdata = new FormData();
      formdata.append("brand", brand);
      formdata.append("location", location);
      formdata.append("image", image);
      formdata.append("price", price);
      formdata.append("description", description);
      formdata.append("rim", rim);
      formdata.append("profile", profile);
      formdata.append("width", width);
  
      const { status, data } = await axios.post("/sellitem", formdata, {
        withCredentials: true,
      });
  
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error.message);
    }
  };

  // -----------------------------------getMyAds--------------------------------
export const getAds = async () => {
    try {
      const { status, data } = await axios.get("/getmyad", {
        withCredentials: true,
      });
  
      return Promise.resolve(data);
    } catch (error) {
      Promise.reject(error.message);
    }
  };

  // ---------------------------------------del ads-------------------------------
export const delAd = async (id) => {
    try {
      const { status } = await axios.get(`/delad/${id}`);
      if (status === 200) {
        return Promise.resolve(status);
      } else {
        return Promise.reject();
      }
    } catch (error) {
      Promise.reject(error.message);
    }
  };