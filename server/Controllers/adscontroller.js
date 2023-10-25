import Item from "../models/itemsmodel.js";

export const getMyAd = async (req, res) => {
  try {
    const user = req.user;
    const items = await Item.find({ seller: user._id });
    // console.log(item);
    return res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
