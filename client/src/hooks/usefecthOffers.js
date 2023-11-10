import { useEffect, useState } from "react";
import axios from "../helper/axiosConfig";
import { myOffers, offersIgot } from "../store/store";

export const useMyoffer = (query) => {
  const { setOffers } = myOffers((state) => state);
  const [data, setData] = useState({
    isLoading: true,
    serverError: null,
  })

  useEffect(() => {
    const { buyerId } = query;
    const fecth = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));

        const { status, data } = await axios.get(`/getmyoffers/${buyerId}`);
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


export const useOffersIGot = (query) => {
  const { setOffers } = offersIgot((state) => state);
  const [data, setData] = useState({
    isLoading: true,
    serverError: null,
  })

  useEffect(() => {
    const { sellerId } = query;
    const fecth = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));

        const { status, data } = await axios.get(`/offerigot/${sellerId}`);
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


