import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    username:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,

    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
   
   
})

userSchema.plugin(passportLocalMongoose);


const User =mongoose.model("user",userSchema);

export default User;
