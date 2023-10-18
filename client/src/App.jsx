import {createBrowserRouter, RouterProvider} from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage";
import Home from "./pages/Home/home";
import { AuthorisedUser } from "./helper/auth";

const router=createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },{
    path:"/home",
    // element:<AuthorisedUser><Home/></AuthorisedUser>
    element:<Home/>
  }
])




const App =()=>{
  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

 export default App;