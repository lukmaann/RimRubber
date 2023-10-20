import Style from "./sellItem.module.css"
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import {useFormik } from "formik"
import { useState } from "react"
import Avtar from "../../assets/uploadimg.png"
import convertToBase64 from "../../helper/convert"


const SellItem=()=>{
  const [file,setfile]=useState();
  const [image,setimage]=useState();
  const formik=useFormik({
    initialValues:{
      price:'',
      brand:'',
      location:'',
      description:'',

    },
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async(value)=>{
      value=await Object.assign(value,{image:image});
      console.log(value);
    }

  })

  const uploadimg=async(e)=>{
    console.log(e.target.files[0]);

    const base64=await convertToBase64(e.target.files[0]);
    console.log(base64);

    setfile(base64);
    setimage(e.target.files[0])

   

   
  }
  return(
    <div className={Style.main}>
    <Header/>
    <div className={Style.topdiv}>
    <form>
    <label htmlFor="img">
      <img src={file||Avtar} alt="" />
    </label>
    <input type="file" id="img" className="hidden" onChange={uploadimg}/>
      
    </form>

    </div>
    <Footer/>
    

    </div>
  )
}

export default SellItem