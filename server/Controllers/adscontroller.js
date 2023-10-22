import Item from "../models/itemsmodel.js";

export const getMyAd = async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    const item = await Item.findOne({ seller: user._id });
    return res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
