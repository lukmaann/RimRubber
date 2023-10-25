import Item from "../models/itemsmodel.js";
import passport from "passport";
// import cloudinary from "../utilities/cloudinary.js";
// import { uri } from "../middlewares/multer.js";
import path from "path";

import cloudinary from "cloudinary"
import Uri from "../utilities/datauri.js";






export const sellItem = async (req, res) => {
  try {
    const { seller, description, price, brand, location ,rim,profile,width} = req.body;
    

    const file=req.file



    const datauri=Uri(file).content




    

    const mycloud= await cloudinary.v2.uploader.upload(datauri).then((data)=>{
      return imagePath=data.url
    }).catch((error)=>{
      return res.status(500).json({error:error.message})
    })


    


    
    

    const item = new Item({
      seller:req.user._id,
      description,
      price,
      brand,
      location,
      rim,
      profile,
      width,
      image:imagePath
    });

    const newItem =await item.save()
    res.status(200).json({message:"item saved",newItem})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
