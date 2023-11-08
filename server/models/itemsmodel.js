import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    image: String,
    description: String,
    price: Number,
    brand: String,
    rim:String,
    width:String ,
    profile:String,
    
    location: String,
    status:{
      type:String,
      default:"pending"
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    offers:[{type:mongoose.Schema.Types.ObjectId , ref:"offer"}]
   
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("item", ItemSchema);

export default Item;
