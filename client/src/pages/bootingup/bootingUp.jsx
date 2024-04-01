import Style from "./booting.module.css";
import Tyre from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { loadServer } from "../../helper/loginHelper";
import { useNavigate } from "react-router-dom";
import  {Toaster} from "react-hot-toast"
const BootingUp = () => {
  const [text, setText] = useState("booting");
  const navigate = useNavigate();
  const [started,setStarted]=useState(false)

  useEffect(() => {
   const load= loadServer();
   load.then(()=>{
    navigate('/login');
   })
   console.log(load);

    setTimeout(() => {
      setText("Setting Up The Servers");
    }, 5000);

    setTimeout(() => {
      setText("Slow network detected");
    }, 10000);

    setTimeout(() => {
      setText("Server taking to long please Wait");
      
    }, 15000);

    setTimeout(()=>{
      setStarted(true)

      setTimeout(()=>{
        navigate('/login')
      },2000)

    },15000)

    
  }, []);

  return (
    <div className={Style.main}>
    <Toaster position="bottom-right"/>
    <div className={started?`${Style.logobox} shadow-xl bg-blend-overlay  w-[6000px]   shadow-gray-600`:Style.logobox}>
    <img src={Tyre} alt="" className={Style.logo} />

    </div>
      <h1 className={Style.txt}>{text}</h1>
    </div>
  );
};

export default BootingUp;
