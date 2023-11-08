import mongoose from "mongoose";


const offerSchema=new mongoose.Schema({
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'item'
    },
    offeredPrice:{
        type:Number
    },
    status:{
        type:String,
        default:'pending',
    }

})

const Offers=mongoose.model('offer',offerSchema);

export default Offers