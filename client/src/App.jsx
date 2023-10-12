import {createBrowserRouter, RouterProvider} from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage";

const router=createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  }
])




const App =()=>{
  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

 export default App;