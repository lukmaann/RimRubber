import Style from "./booting.module.css";
import Tyre from "../../assets/tyre.png";
import { useEffect, useState } from "react";
import { loadServer } from "../../helper/loginHelper";
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast"
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
      setText("Setting Up The Servers");
    }, 4000);

    setTimeout(() => {
      setText("Slow network detected");
    }, 9000);

    setTimeout(() => {
      setText("Server taking to long");
      toast((t) => (
        <span className="w-full " >
          
          <button  className="w-full" onClick={() => {
            location.reload()
            toast.dismiss(t.id)}}>
           Reload
          </button>
        </span>
      ),{
        style:{
          width:'90vw',
          border:'1px solid #713200',
          color: '#713200'
        }
      });
    }, 13000);
  }, []);

  return (
    <div className={Style.main}>
    <Toaster position="bottom-right"/>
      <img src={Tyre} alt="" className={Style.tyre} />
      <h1 className={Style.txt}>{text}</h1>
    </div>
  );
};

export default BootingUp;
