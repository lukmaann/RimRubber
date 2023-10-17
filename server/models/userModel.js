import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    firstName:{
        type:String,
       
    },
    lastName:{
        type:String,
       
    },
    email:{
        type:String,

    },
    mobile:{
        type:Number,
        
    },
    password:{
     
        type:String
    },
    googleId:String
   
   
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate)


const User =mongoose.model("user",userSchema);

export default User;
