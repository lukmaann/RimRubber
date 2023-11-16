import mongoose from "mongoose";

const OtherItemsSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    star:{
        type:Number,
        default:0
    },
    stock:{
        type:Number
    },
    image:{
        type:String
    }


})

const OtherItems=mongoose.model("otheritem",OtherItemsSchema);

export default OtherItems;