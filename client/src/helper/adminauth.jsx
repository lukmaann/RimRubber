/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import axios from "../helper/axiosConfig"

export const AuthorisedAdmin = ({ children }) => {

  const [data,setdata]=useState({authenticated:false,isLoading:true,isadmin:false})


  useEffect(()=>{
    const fecth=async()=>{
      try {
        setdata((prev)=>({...prev,isLoading:true}))
        const {status,data}=await axios.get('/auth',{withCredentials:true});
        if(status===200){
          setdata((prev)=>({...prev,isLoading:false}));
          setdata((prev)=>({...prev,isadmin:data.user.isamdin}));
          setdata((prev)=>({...prev,authenticated:data.authenticated}))
        }
        setdata((prev)=>({...prev,isLoading:false}))
        
      } catch (error) {
        setdata((prev)=>({...prev,isLoading:false}))
        console.log(error.message);
      }
    }

    fecth()

  },[])



 if(data.isLoading){
  return <div>Loading</div>
 }


  if ( !data.authenticated && !data.isadmin ) {
    return <Navigate to={"/adminlogin"} replace={true}></Navigate>;
 
  } 
  else {
    return children;
  }
};

// 