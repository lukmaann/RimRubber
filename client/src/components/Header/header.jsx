import Style from "./header.module.css";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <nav className={Style.navbar}>
      <h1 className={Style.logo}>RimRubber </h1>
      <div>
        <ul className="flex">
          <li className={Style.navItem}>
            <HomeIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
