import Style from "./tyresize.module.css";
import { useTyreSizeStore } from "../../store/store";
import { useState } from "react";
import HelpIcon from '@mui/icons-material/Help';
import { Link } from "react-router-dom";

const TyreSize = () => {
  const store = useTyreSizeStore((state) => state);

  const width = [
    145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285,
    295, 305, 315, 325,
  ];

  const rim=[ 13,14,15,16,17,18,19,20]

  const [profile, setprofile] = useState([]);

  const widthchange = (e) => {
    const value = e.target.value;
    store.setwidth(value);
    console.log(value);

    switch (value) {
      case "145":
        setprofile([65, 70]);
        break;
      case "155":
        setprofile([65, 70]);
        break;
      case "165":
        setprofile([50, 65, 70, 75]);
        break;
      case "175":
        setprofile([55, 60, 65, 70]);
        break;
      case "185":
        setprofile([55, 60, 65, 70, 75]);
        break;
      case "195":
        setprofile([45, 50, 55, 60, 65, 70, 75, 80]);
        break;
      case "205":
        setprofile([45, 50, 55, 60, 65, 70, 75]);
        break;
      case "215":
        setprofile([45, 50, 55, 60, 65, 70, 75, 80]);
        break;
      case "225":
        setprofile([35, 40, 45, 50, 55, 60, 65, 70, 75, 90]);
        break;
      case "235":
        setprofile([35, 40, 45, 50, 55, 60, 65, 70, 75, 85]);
        break;
      case "245" || "285":
        setprofile([30, 35, 40, 45, 50, 55, 60, 65, 70, 75]);
        break;
      case "255" || "265" || "275":
        setprofile([30, 35, 40, 45, 50, 55, 60, 65, 70]);
        break;
      case "295":
        setprofile([30, 35, 40, 45]);
        break;
      case "305":
        setprofile([30, 35, 40, 45]);
        break;
      case "315":
        setprofile([30, 35, 40, 75]);
        break;
      case "325":
        setprofile([30, 35]);
        break;

      default:
        break;
    }
  };

  return (
   <div className="w-[100%]">
         <Link className={`${Style.helplink} `} to={"/identifysize"}><HelpIcon fontSize="small" className="text-yellow-400"/> Identify Tyre Size </Link>

     <div className="flex  justify-start gap-3 max-sm:justify-between mt-2 w-[100%] px-1">

      <section className={Style.section}>
        <h1 className="text-center">Width*</h1>
        <select
          name="width"
          id="width"
          onChange={widthchange}
          className={Style.select}
        >
          <option> </option>
          {width.map((width, index) => {
            return (
              <option key={index} value={width}>
                {width}
              </option>
            );
          })}
        </select>
      </section>

      <section className={Style.section}>
        <h1>Profile*</h1>
        <select
          name="profile"
          id="profile"
          onChange={(e) => store.setprofile(e.target.value)}
          className={Style.select}
        >
        <option> </option>
          {profile.map((profile, index) => {
            return (
              <option key={index} value={profile}>
                {profile}
              </option>
            );
          })}
        </select>
      </section>

      <section className={Style.section}>
        <h1>Rim*</h1>

        <select
          name="rim"
          id="rim"
          onChange={(e) => store.setrim(e.target.value)}
          className={Style.select}
        >
          <option> </option>
          {
            rim.map((rim,index)=>{
              return <option value={rim} key={index}>{rim}</option>
            })
          }
        </select>
      </section>
    </div>
   </div>
  );
};

export default TyreSize;
