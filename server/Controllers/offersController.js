import Offers from "../models/offersModel.js";
import Users from "../models/userModel.js";
import Items from "../models/itemsmodel.js";

export const makeOffer=async(req,res)=>{
    try {
        const {buyerId,itemId,offeredPrice}=req.body;

        const offer= new Offers({
            buyer:buyerId,
            item:itemId,
            offeredPrice
        })

        await offer.save().then((savedOffer)=>{
            Items.findByIdAndUpdate(itemId,{$push:{offers:savedOffer._id}});
            Users.findByIdAndUpdate(buyerId,{$push:{offers:savedOffer._id}});
            return res.status(200).json({message:"Offer sent"})
        }).catch((err)=>{
            res.status(500).json({error:err.message})
        })

        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
