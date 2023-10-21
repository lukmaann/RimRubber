import Item from "../models/itemsmodel.js";
import passport from "passport";



export const sellItem = async (req, res) => {
  try {
    const { seller, description, price, brand, location ,rim,profile,width} = req.body;
    const imagePath = req.file.filename;

    console.log("user from sellitem "+ req.user._id);

    
    

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
