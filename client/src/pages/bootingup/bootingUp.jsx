import Style from "./booting.module.css";
import Tyre from "../../assets/tyre.png";
import { useEffect, useState } from "react";
import { loadServer } from "../../helper/loginHelper";
import { useNavigate } from "react-router-dom";
const BootingUp = () => {
  const [text, setText] = useState("booting");
  const navigate = useNavigate();

  useEffect(() => {
    const load = loadServer();

    load.then(async () => {
      setText("Redirecting");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    });
    setTimeout(() => {
      setText("Setting Up");
    }, 4000);

    setTimeout(() => {
      setText("Server taking to long to respond please refresh the page");
    }, 10000);
  }, []);

  return (
    <div className={Style.main}>
      <img src={Tyre} alt="" className={Style.tyre} />
      <h1 className={Style.txt}>{text}</h1>
    </div>
  );
};

export default BootingUp;
