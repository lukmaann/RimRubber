import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Style from "./landingPage.module.css";
import { useEffect, useState } from "react";
import SignupForm from "../../components/login/signupForm";
import LoginForm from "../../components/login/loginForm";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loadServer } from "../../helper/loginHelper";

const LandingPage = () => {
  const navigate = useNavigate();
  const [login, selectLogin] = useState("signUp");

  useEffect(()=>{

    toast.promise(loadServer(),{
      loading:"Booting server",
      success:"server started",
      error:"Network not available"
    })
  },[])


  return (
    <div>
      <Toaster position="top-center"></Toaster>
      <Header />
      <div className="h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <div className={Style.main}>
        <div className={Style.txt}>
          <h1 className="">Welcome To RimRubber </h1>
          <h2>
            RimRubber is a web app for buying and selling second-hand tyres.
            List your tire or buy one by creating an account or logging in.
          </h2>
        </div>``

        <div>
        <div className="flex w-[350px]    py-3 justify-around">
          {" "}
          <button onClick={()=>selectLogin('signUp') } className={login==='signUp'?`${Style.selected}`:`${Style.selector}`}>signUp</button>
          <button onClick={()=>selectLogin('login')} className={login==='login'?`${Style.selected}`:`${Style.selector}`}>Login</button>
        </div>
        <div className="w-[350px] text-black ">
        {
          login==='login'?<LoginForm/>:<SignupForm/>
        }
        <button onClick={()=>navigate('/adminlogin')} className={Style.adminbtn}>Login as Administrator</button>

        </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
