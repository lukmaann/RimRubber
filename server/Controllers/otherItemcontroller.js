import OtherItems from "../models/otherItemsmodel.js";
import cloudinary from "cloudinary";
import Uri from "../utilities/datauri.js";

export const uploadItems = async (req, res) => {
  try {

    const {description,price,name,stock}=req.body;
    const file = req.file;
    let imagePath = "";

    const datauri = Uri(file).content;

    const mycloud = await cloudinary.v2.uploader
      .upload(datauri)
      .then((data) => {
        imagePath = data.url;
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });

      const item=new OtherItems({
        description,
        price,
        name,
        stock,
        image:imagePath
      })

      await item.save().then((data)=>{
        res.status(201).json(data)
      })
  } catch (error) {
    res.status(500).json(error.message);
  }
};



export const getListedItems=async(req,res)=>{
  try {
    const items=OtherItems.find();
    items.then((data)=>{
      res.status(200).json(data)
    }).catch((err)=>{
      res.status(500).json(err.message)

    })
  } catch (error) {
    res.status(500).json(error.message)
  }
}