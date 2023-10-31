import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Style from "./feedback.module.css";
import { useUserStore } from "../../store/store";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import SuggestionForm from "../../components/forms/FeedbackForm";

const FeedBack = () => {
  const { user } = useUserStore((state) => state);
  return (
    <div>
      <Header />
      <div className={Style.main}>
        <div className={Style.txt}>
          <h1 className="">
            Welcome {user !== null ? user.username : "User"}! <LoyaltyIcon />{" "}
          </h1>
          <h2>
            As you explore My website, I encourage you to provide any
            suggestions or feedback you might have.Your feedback is essential.
            Please share any thoughts or bugs youve encountered on RimRubber.
            Your input helps me to improve your browsing experience. Thank you
            for being a part of the RimRubber community.
          </h2>
        </div>
        <div>
          <SuggestionForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedBack;
