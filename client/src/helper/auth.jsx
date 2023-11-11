/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/store";
import { ColorRing } from "react-loader-spinner";
import axios from "../helper/axiosConfig";
import { authStore } from "../store/store";

export const AuthorisedUser = ({ children }) => {

  const {setAuth}=authStore((state)=>state)

  const {setUser} =useUserStore((state)=>state)
  const [data, setData] = useState({
    isLoading:true,authenticated:false,isadmin:false
  });
  
  
  useEffect(() => {
    const fecth=async()=>{

      try {
        setData((prev)=>({...prev,isLoading:true}))
        const {status,data}=await axios.get('/auth',{withCredentials:true});
        if(status===200){
        setData((prev)=>({...prev,isLoading:false}))
        await setData((prev)=>({...prev,authenticated:data.authenticated}))
        setData((prev)=>({...prev,isadmin:data.user.isadmin}))

        if(data.authenticated){
          setAuth(true);
        }
        
        
        

        setUser(data.user)

        }
        setData((prev)=>({...prev,isLoading:false}))


        

        
      } catch (error) {
        setData((prev)=>({...prev,isLoading:false}))
        console.log(error.message)
      }
     

    }

    fecth()

      
    
  }, []);

  if(data.isLoading){
    return <div className="w-[100vw] h-screen bg-gradient-to-b from-black via-gray-950 p-20 to-gray-900">
    <div className="w-[100%] justify-center items-center flex ">
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#111827','#111827','#111827','#111827','#111827']}
    />
    </div>
  </div>
  }

  if (!data.authenticated || data.isadmin ) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  } else {
    return children;
  }
};

