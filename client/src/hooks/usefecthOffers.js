import { useEffect, useState } from "react";
import axios from "../helper/axiosConfig";
import { myOffers } from "../store/store";

export const useMyoffer = (query) => {
  const { setOffers } = myOffers((state) => state);
  const [data, setData] = useState({
    isLoading: false,
    serverError: null,
  })

  useEffect(() => {
    const { buyerId } = query;
    const fecth = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));

        const { status, data } = await axios.get(`/getmyoffers/${buyerId}`);
        console.log(data);
        if (status === 200) {
          setOffers(data);
          setData((prev) => ({ ...prev, isLoading: false }));
        }
        setData((prev)=>({...prev,isLoading:false}));
        
      } catch (error) {
        setData((prev) => ({ ...prev, serverError: error.message }));
      }
    };

    fecth();
  }, []);

  return [data,setData];
};
