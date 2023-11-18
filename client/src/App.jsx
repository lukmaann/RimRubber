import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage";
import Home from "./pages/Home/home";
import { AuthorisedUser } from "./helper/auth";
import SellItem from "./pages/SellItems/sellitem";
import BuyItem from "./pages/BuyItem/buyitem";
import TyreSizeHelp from "./pages/help/tyresizehelp";
import Myads from "./pages/myads/myads";
import FeedBack from "./pages/feedback/feedback";
import AdminLogin from "./adminModule/adminLogin/adminLogin";
import AdminDashboard from "./adminModule/dashboard/dashboard";
// import { AuthorisedAdmin } from "./helper/adminauth";
import UserReviews from "./adminModule/userReviews/userReviews";
// import ConstructionPage from "./pages/construction/constructionPage";
import SingleAd from "./components/ads/singleAd";
import Items from "./pages/Items/items";
import OfferPage from "./pages/Myoffers/offersPage";
import OffersGot from "./pages/Myoffers/offersGotPage";
import BootingUp from "./pages/bootingup/bootingUp";
import ManageStockPage from "./adminModule/listItems/manageStocks";
import MyCart from "./pages/mycart/myCart";

const router = createBrowserRouter([
  {
    path:'/',
    element:<BootingUp/>
  },
  {
    path: "/login",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: (
      <AuthorisedUser>
        <Home />
      </AuthorisedUser>
    ),
    // element:<Home/>
  },
  {
    path: "/sellitem",
    element: (
      <AuthorisedUser>
        <SellItem />
      </AuthorisedUser>
    ),
  },
  {
    path: "/buyitem",
    element: (
      // <AuthorisedUser>
        <BuyItem />
      // {/* </AuthorisedUser> */}
    ),
  },
  {
    path: "/identifysize",
    element: <TyreSizeHelp />,
  },
  {
    path: "/myads",
    element: (
      <AuthorisedUser>
        <Myads />
      </AuthorisedUser>
    ),
  },
  {
    path: "/feedback",
    element: <FeedBack />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/admindashboard",
    // element:<AuthorisedAdmin><AdminDashboard/></AuthorisedAdmin>
    element: <AdminDashboard />,
  },
  {
    path: "/reviewfeedback",
    element: <UserReviews />,
  },

  {
    path: "/singlead",
    element: (
      <AuthorisedUser>
        <SingleAd />
      </AuthorisedUser>
    ),
  },
  {
    path: "/resultitems",
    element: (
      <AuthorisedUser>
        <Items />
      </AuthorisedUser>
    ),
  },
  {
    path: "/myoffers",
    element: (
      <AuthorisedUser>
        <OfferPage />
      </AuthorisedUser>
    ),
  },
  {
    path:'/offersgot',
    element:<AuthorisedUser>
      <OffersGot/>
    </AuthorisedUser>
  },
  {
    path:"/admin/managestocks",
    element:<ManageStockPage/>
  },{
    path:"/mycart",
    element:<MyCart/>
  },{
    path:"/pay",
    element:<h1>pay</h1>
  }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
