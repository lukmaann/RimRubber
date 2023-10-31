/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/store";
import axios from "../helper/axiosConfig"

export const AuthorisedUser = ({ children }) => {

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
        setData((prev)=>({...prev,authenticated:data.authenticated}))
        setData((prev)=>({...prev,isadmin:data.user.isadmin}))

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
    return <div>Loading</div>
  }

  if (!data.authenticated || data.isadmin ) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  } else {
    return children;
  }
};

