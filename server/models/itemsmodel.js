import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    image: String,
    description: String,
    price: Number,
    brand: String,
    
    location: String,
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("item", ItemSchema);

export default Item;
