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

export const delad = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Item.findByIdAndDelete({ _id: id });
    res.status(200).send("item deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAds = async (req, res) => {
  try {
    const { status } = req.params;
    const items = await Item.find({ status }).populate("seller");

    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateadsstatus = async (req, res) => {
  try {
    const { type, id } = req.params;

    const item = await Item.findByIdAndUpdate({ _id: id }, { status: type });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const getSingleAd = async (req, res) => {
  try {
    const { id } = req.params;
    const item = Item.findById(id).populate("seller");
    item.then((data) => {
      res.status(200).json({ data });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const findItemsByWidth = async (req, res) => {
  try {
    const { width } = req.body;
    const items = await Item.find({ width: width, status: "active" }).populate(
      "seller"
    );
    if (!items) {
      res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
