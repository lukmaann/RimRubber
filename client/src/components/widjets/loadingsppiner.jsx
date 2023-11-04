import Header from "../Header/header"
import Footer from "../Footer/footer"
import { ColorRing } from "react-loader-spinner"




const Loadingscreen = () => {
  return (
    <div >
        <Header />

        <div className="h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <div className="w-[100%] justify-center items-center p-3 flex">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#111827','#111827','#111827','#111827','#111827']}
          />
          </div>
        </div>

        
          
        
        <Footer />
      </div>
  )
}

export default Loadingscreen

