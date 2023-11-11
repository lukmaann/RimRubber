import Item from "../models/itemsmodel.js";
import {sampledata} from "../../client/src/data/sample.js"

export const getMyAd = async (req, res) => {
  try {
    const user = req.user;
    const items = await Item.find({ seller: user._id }).populate({
      path:'offers',
      populate:{
        path:'buyer',
        model:'user'
      }
    }).populate('seller');
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
    const items = await Item.find({ status }).populate("seller").populate({
      path:'offer',
      populate:{
        path:'buyer',
        model:'user'
      },
    });

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
    const item = Item.findById(id).populate("seller").populate('offers');
    item.then((data) => {
      res.status(200).json({ data });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const findItemsByWidth = async (req, res) => {
  try {
    const { width ,profile,rim} = req.body;
    const items = await Item.find({ width: width, status: "active",profile }).populate(
      "seller"
    ).populate('offers');
    if (!items) {
      res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};






export const feeddata=async(req,res)=>{
  await Item.insertMany(sampledata())
  res.send("done")
}