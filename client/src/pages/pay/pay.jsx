/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { useUserStore } from "../../store/store";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";



const Pay = () => {
  const { user } = useUserStore((state) => state);
  return (
    <div>
      <Header />
      <div className="min-h-screen py-10 flex justify-center text-gray-600 items-center">
        <div className="w-[300px] gap-4 max-sm:w-[80vw]">
          <h1 className="text-xl">Hey {user?.username || "User"},</h1>
          <p>
            Quick heads up about RimRubber! Right now, it's all about helping
            buyers connect with sellers. Cool, right? But here's the thing – our
            cart is like a window shopping tool. You can add stuff, but don't
            hit that buy button because we're not set up for payments just yet.
          </p>
          <br />
          <p>
            No worries, though! Iam working on it. Adding a way to pay is on our
            to-do list, but it might take a bit because Iam juggling other
            projects too.
          </p>
          <br />
          <p>
            Thanks a bunch for hanging in there and being part of RimRubber! If
            you've got questions or thoughts, hit me up anytime.
          </p>
          <br />
          <h1>Cheers, lukmaan nadaf</h1>

          <br />
          <br />

         <div className="flex w-full justify-between">
         <a href="https://www.linkedin.com/in/lukmaan/">
            <LinkedInIcon />
          </a>

          <a href="https://twitter.com/lukmaannadaf">
                <TwitterIcon />
              </a>

              <a href="https://github.com/lukmaann">
                <GitHubIcon />
              </a>

              <a href="https://www.instagram.com/_.lukn">
                <InstagramIcon />
              </a>
          
         </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pay;
