/* eslint-disable react/prop-types */
import demoImage from "../../assets/demoimg.png"
import Style from "./ads.module.css"


const AdComponent=(props)=>{

    const {image,brand,price}=props
    
    return (
        <div className={Style.main}>
        
           <div className={Style.topdiv}>
           <img src={demoImage||image} alt="ad image"  className={Style.img}/>
           <h1>{brand}</h1>
           </div>
           <h2>₹{price} </h2>
           <div className="flex flex-col">
            <button>Mark as sold</button>
            <button>Delete Ad</button>
           </div>


        </div>
    )
}

export default AdComponent