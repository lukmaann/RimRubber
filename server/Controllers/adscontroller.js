import Item from "../models/itemsmodel.js";

export const getMyAd = async (req, res) => {
  try {
    const user = req.user;
    const items = await Item.find({ seller: user._id });
    // console.log(item);
    return res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};



export const delad=async(req,res)=>{
  try {
    const {id}=req.params;
    const del=await Item.findByIdAndDelete({_id:id});
    res.status(200).send("item deleted")


  } catch (error) {
   res.status(500).json({error:error.message})
  }
}

export const getAds=async(req,res)=>{
  try {
    const {status}=req.params;
    const items=await Item.find({status});

    res.status(200).json({items})


    
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}


export const updateadsstatus=async(req,res)=>{
  try {
    const {type,id}=req.params;

    

    const item=await Item.findByIdAndUpdate({_id:id},{status:type})
    res.status(200).json(item)
  } catch (error) {
    res.status(500).send({error:error.message})
  }
}