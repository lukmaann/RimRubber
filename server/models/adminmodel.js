import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";



const adminSchema=new mongoose.Schema({
    username:String,
    password:String,
    isadmin:{
        type:Boolean,
        default:true
    }
})



adminSchema.plugin(passportLocalMongoose);

const adminModel=mongoose.model('admin',adminSchema);

export default adminModel