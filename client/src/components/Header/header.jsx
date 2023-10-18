import Style from "./header.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <nav className={Style.navbar}>
      <h1 className={Style.logo}>RimRubber </h1>
      <div>
        <ul className="flex">
          <li className={Style.navItem}>
            <button onClick={()=>{navigate('/home')}}><HomeIcon /></button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
