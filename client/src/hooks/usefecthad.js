
import axios from "../helper/axiosConfig"

import { useEffect, useState } from "react";
import { myAdsStore } from "../store/store";




export const useFecthMyAds = () => {
  const myads=myAdsStore((state)=>state)
  const [getdata, setdata] = useState({
    isLoading: false,
    apiData: null,
    serverError: null,
    status: null,
  });

  const fetchData = async () => {
    try {
      setdata((prev) => ({ ...prev, isLoading: true }));

      const { status, data } = await axios.get('/getmyad', { withCredentials: true });

      if (status === 200) {
         setdata((prev) => ({ ...prev, isLoading: false}));
         myads.setAds(data.items)
          setdata((prev) => ({ ...prev, apiData:data.items }));

      }
    } catch (error) {
      setdata((prev) => ({ ...prev, isLoading: false, serverError: error.message }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [getdata, setdata];
};

export const useFecthAds=(query)=>{

  const [data,setdata]=useState({
    apiData:null,
    isLoading:true,
    serverError:null,
    status:null,
  })

  useEffect(()=>{
    const fecth=async()=>{
      
      try {
        const {type}=query;

        setdata((prev)=>({...prev,isLoading:true}))
        const {status,data}=await axios.get(`/getads/${type}`)
        if(status===200){
          setdata((prev)=>({...prev,isLoading:false}))
          setdata((prev)=>({...prev,apiData:data}))


        }
          setdata((prev)=>({...prev,isLoading:false}))
        
      } catch (error) {
        setdata((prev)=>({...prev,isLoading:false,serverError:error.message}))
      }

    }

    fecth()
  },[])


  return [data,setdata];

}