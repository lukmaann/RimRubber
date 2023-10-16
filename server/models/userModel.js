import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    firstName:{
        type:String,
        required:true
       
    },
    lastName:{
        type:String,
        required:true
       
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
     
        type:String
    },
   
   
})

userSchema.plugin(passportLocalMongoose);


const User =mongoose.model("user",userSchema);

export default User;
