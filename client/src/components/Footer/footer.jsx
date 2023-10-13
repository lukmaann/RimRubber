/* eslint-disable react/no-unescaped-entities */
import Style from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const D = new Date();
let year = D.getFullYear();

const Footer = () => {
  return (
    <footer className=  {Style.footer}>
      <div className="">
        <h1 className="text-white text-xl text-center">
          "Your Trusted Source for Quality Tyres at Unbeatable Prices"
        </h1>

        <div className={Style.emailbox}>
          <form action="">
            <input type="email" placeholder="xyz@gmail.com" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className={Style.socialbox}>
          <ul>
            <li>
              <a href="https://github.com/lukmaann">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/lukmaannadaf">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lukmaan/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_.lukn">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className={Style.copyrightbox}>
          <h1>RimRubber</h1>
          <h5>©{year} Lukn Developments || All rights reserved</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
