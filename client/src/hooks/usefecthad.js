import axios from "../helper/axiosConfig";

import { useEffect, useState } from "react";
import { myAdsStore } from "../store/store";

export const useFecthMyAds = () => {
  const myads = myAdsStore((state) => state);
  const [getdata, setdata] = useState({
    isLoading: false,
    apiData: null,
    serverError: null,
    status: null,
  });

  const fetchData = async () => {
    try {
      setdata((prev) => ({ ...prev, isLoading: true }));

      const { status, data } = await axios.get("/getmyad", {
        withCredentials: true,
      });

      if (status === 200) {
        setdata((prev) => ({ ...prev, isLoading: false }));
        myads.setAds(data.items);
        setdata((prev) => ({ ...prev, apiData: data.items }));
      }
    } catch (error) {
      setdata((prev) => ({
        ...prev,
        isLoading: false,
        serverError: error.message,
      }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [getdata, setdata];
};

// -------------------------------------fecth ads based on status--------------------

export const useFecthAds = (query) => {
  const myads = myAdsStore((state) => state);

  const [data, setdata] = useState({
    apiData: null,
    isLoading: true,
    serverError: null,
    status: null,
  });

  useEffect(() => {
    const fecth = async () => {
      try {
        const { type } = query;

        setdata((prev) => ({ ...prev, isLoading: true }));
        const { status, data } = await axios.get(`/getads/${type}`);
        if (status === 200) {
          setdata((prev) => ({ ...prev, isLoading: false }));
          setdata((prev) => ({ ...prev, apiData: data }));
          myads.setAds(data.items);
        }
        setdata((prev) => ({ ...prev, isLoading: false }));
      } catch (error) {
        setdata((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error.message,
        }));
      }
    };

    fecth();
  }, []);

  return [data, setdata];
};



export const useSingleAd = (query) => {
  const [getdata, setdata] = useState({
    apidata: null,
    serverError: null,
    isLoading: true,
    status: null,
  });

  useEffect(() => {
    const fecth = async () => {
      const { id } = query;

      try {
        setdata((prev) => ({ ...prev, isLoading: true }));
        const { status, data } = await axios.get(`/getsinglead/${id}`);
        if (status === 200) {
          setdata((prev) => ({ ...prev, isLoading: false }));
          setdata((prev) => ({ ...prev, apidata: data }));
        }
        setdata((prev) => ({ ...prev, isLoading: false }));
      } catch (error) {
        setdata((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error.message,
        }));
      }
    };

    fecth();
  }, []);

  return [getdata, setdata];
};
