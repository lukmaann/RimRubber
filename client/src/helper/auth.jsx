/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { authenticateUser } from "./helper";
import { Navigate } from "react-router-dom";

export const AuthorisedUser = ({ children }) => {
  const [data, setData] = useState(true);
  
  useEffect(() => {
    authenticateUser().then((info) => {
      setData(true);
    });
  }, []);

  if (!data) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  } else {
    return children;
  }
};