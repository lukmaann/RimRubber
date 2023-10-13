import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Style from "./landingPage.module.css";
import tyre from "../../assets/tyre2.jpg";
import { useState } from "react";
import SignupForm from "../../components/login/signupForm";
import LoginForm from "../../components/login/loginForm";
import Arrow from "../../assets/arrow.png"
import tyre2 from "../../assets/tyre.png"



const LandingPage = () => {
  const [login, selectLogin] = useState("signUp");
  return (
    <div className={Style.main}>
      <Header />
      <div className="h-[100vh] ">
        <div className={Style.topdiv}>
        <img src={tyre} alt="Tyre image" className={`${Style.mainimg} `} />
          <div className={`${Style.login} `}>

            <div className="flex bg-yellow-400 justify-between w-[70%] mx-auto p-1 rounded-sm">
              <h1
                className={
                  login == "signUp"
                    ? `${Style.loginSelector} bg-gray-200 border `
                    : `${Style.loginSelector}`
                }
                onClick={() => selectLogin("signUp")}
              >
                Sign up
              </h1>
              <h1
                className={
                  login == "login"
                    ? `${Style.loginSelector} bg-gray-200 border `
                    : `${Style.loginSelector}`
                }
                onClick={() => selectLogin("login")}
              >
                Login{" "}
              </h1>
            </div>

            {login === "signUp" ? <SignupForm /> : <LoginForm />}
          </div>
          <h1 className={Style.tagline}>Get Started</h1>
          <h1 className={Style.txt}>To buy and sell the second hand Tyres</h1>
        </div>
        <img src={Arrow} alt="" className={`${Style.arrow}`}/>
        <img src={tyre2} className={Style.rotatetyre} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
