import Style from "./tyresizehelp.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useState } from "react";
import rim from "../../assets/tyrerim.png";
import profile from "../../assets/tyreprofile.png";
import width from "../../assets/tyrewidth.png";
import widthsize from "../../assets/tyrewidthsize.png";
import profilesize from "../../assets/tyreprofilesize.png";
import rimsize from "../../assets/tyrerimsize.png";

const TyreSizeHelp = () => {
  const [dimension, setDimension] = useState(width);
  const [size, setsize] = useState(widthsize);
  return (
    <div className={Style.main}>
      <Header />
      <h1 className="text-gray-600 text-center p-10 text-2xl">How to check?</h1>
      <div className={Style.topdiv}>
        <img src={dimension} className="w-[250px] " />

        <div className="flex w-[100% ] border p-5  border-white text-white justify-center gap-4">
          <button
            onClick={() => {
              setDimension(width);
              setsize(widthsize);
            }}
            className={dimension === width ? "bg-yellow-300 text-black p-2":""}
          >
            width
          </button>
          <button
            onClick={() => {
              setDimension(profile);
              setsize(profilesize);
            }}
            className={dimension === profile ? "bg-yellow-300 text-black p-2":""}
          >
            Profile
          </button>
          <button
            onClick={() => {
              setDimension(rim);
              setsize(rimsize);
            }}
            className={dimension === rim ? "bg-yellow-300 text-black p-2":""}
          >
            Rim
          </button>
        </div>

        <div className="flex w-[100vw] border-t-2 border-gray-400 items-center mt-4 p-5 max-sm:my-10 justify-around">
          <img src={size} alt="" className="w-[200px] my-10" />
          {size === widthsize ? 
            <h1 className="text-white capitalize">
              Indicates the section width of a tyre in millimetres.
            </h1>:undefined
          }
          {size === profilesize ?
            <h1 className="text-white capitalize">
              The sidewall height measured from the base of the tread to the
              rim.
            </h1>:undefined
          }
          {size === rimsize ? 
            <h1 className="text-white capitalize">
              Indicates the diameter of the wheel rim..
            </h1>:undefined
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TyreSizeHelp;
