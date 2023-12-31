import Style from "./header.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import Dropdown from "../setting/dropdown";
import { useState } from "react";
import { authStore } from "../../store/store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUserStore } from "../../store/store";
import Badge from "@mui/material/Badge";

const Header = () => {
  const { auth } = authStore((state) => state);
  const { user } = useUserStore((state) => state);

  const [dropdown, setdropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className={Style.navbar}>
      <h1 className={Style.logo}>RimRubber </h1>
      <div>
        <ul className="flex">
          {auth && (
            <li className={`${Style.navItem}  `}>
              <button
                onClick={() => {
                  navigate("/mycart");
                }}
              >
                {" "}
                <Badge badgeContent={user.cart.length} color="secondary">
                  <ShoppingCartIcon fontSize="small" />
                </Badge>
              </button>
            </li>
          )}
          <li className={Style.navItem}>
            <button
              onClick={() => {
                navigate("/home");
              }}
            >
              <HomeIcon />
            </button>
          </li>
          {auth ? (
            <li className={Style.navItem}>
              <button
                onClick={() => {
                  setdropdown(!dropdown);
                }}
              >
                <SettingsIcon />
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      {dropdown && <Dropdown />}
    </nav>
  );
};

export default Header;
