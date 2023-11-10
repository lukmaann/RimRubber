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

        await offer.save().then(async(savedOffer)=>{
            await Items.findByIdAndUpdate(itemId,{$push:{offers:savedOffer._id}});
            await Users.findByIdAndUpdate(buyerId,{$push:{offers:savedOffer._id}});
            return res.status(200).json({message:"Offer sent"})
        }).catch((err)=>{
            res.status(500).json({error:err.message})
        })

        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


export const getMyOffers=async(req,res)=>{
    try {
        const {buyer}=req.params;
        await Offers.find({buyer}).populate('buyer').populate({
            path:'item',
            populate:{
                path:'seller',
                model:'user'

            }
        }).then((data)=>{
            res.status(200).json(data);
        }).catch((err)=>{
            res.status(404).send({err:err.message})
        });
        
    } catch (error) {
        res.status(500).json({err:error.message})
    }
}