/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { authenticateUser } from "./helper";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/store";

export const AuthorisedUser = ({ children }) => {

  const {setUser} =useUserStore((state)=>state)
  const [data, setData] = useState(true);
  
  
  useEffect(() => {
    authenticateUser().then((info) => {
      setData(info.authenticated);
      setUser(info.user)
      
    });
  }, []);

  if (!data) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  } else {
    return children;
  }
};