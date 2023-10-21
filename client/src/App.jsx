import {createBrowserRouter, RouterProvider} from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage";
import Home from "./pages/Home/home";
import { AuthorisedUser } from "./helper/auth";
import SellItem from "./pages/SellItems/sellitem";
import BuyItem from "./pages/BuyItem/buyitem";
import TyreSizeHelp from "./pages/help/tyresizehelp";

const router=createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },{
    path:"/home",
    element:<AuthorisedUser><Home/></AuthorisedUser>
    // element:<Home/>
  },
  {
    path:"/sellitem",
    element:<AuthorisedUser><SellItem/></AuthorisedUser>
  },
  {
    path:"/buyitem",
    element:<BuyItem/>
  },
  {
    path:"identifysize",
    element:<TyreSizeHelp/>
  }
])




const App =()=>{
  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

 export default App;