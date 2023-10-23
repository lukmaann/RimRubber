// import axios from "axios";
// import { useEffect, useState } from "react";

// axios.defaults.baseURL="http://localhost:3000/api";


// const useFecthMyAds=async()=>{
//     const [getdata,setdata]=useState({
//         isLoading:false,
//         apiData:null,
//         serverError:null,
//         status:null
//     })

//     useEffect(()=>{

//         const fetch=async()=>{
//             try {
//                 setdata((prev)=>({...prev,isLoading:true}));

//                 const {status,data}=await axios.get('/getmyad',{withCredentials:true});

//                 if(status===200){
//                     setdata((prev)=>({...prev,isLoading:false,apiData:data.item}))
//                 }
//                 setdata((prev)=>({...prev,isLoading:false}))
//             } catch (error) {
//                 setdata((prev)=>({...prev,isLoading:false,serverError:error.message}))
//             }
//         }

//         fetch();

//     },[])
//     return [getdata,setdata]

// }

// export default useFecthMyAds


import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://rimrubberbackend.onrender.com/api";

const useFecthMyAds = () => {
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
          setdata((prev) => ({ ...prev, apiData:data }));

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

export default useFecthMyAds;
