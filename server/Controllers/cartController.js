import User from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.params;
    await User.findByIdAndUpdate(
      { _id: userId },
      {
        $push: { cart: itemId },
      }
    ).then(()=>{
        res.status(200).json({message:"item added to cart"})
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.params;
    await User.findByIdAndUpdate(
      { _id: userId },
      {
        $pull: { cart: itemId },
      }
    ).then(()=>{
        res.status(200).json({message:"Item removed from cart"})
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getMyCart = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findById({ _id: userId })
      .populate("cart")
      .then((user) => {
   
        res.status(200).json(user.cart);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
