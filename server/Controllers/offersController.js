import Offers from "../models/offersModel.js";
import Users from "../models/userModel.js";
import Items from "../models/itemsmodel.js";

export const makeOffer = async (req, res) => {
  try {
    const { buyerId, itemId, offeredPrice } = req.body;

    const offer = new Offers({
      buyer: buyerId,
      item: itemId,
      offeredPrice,
    });

    await offer
      .save()
      .then(async (savedOffer) => {
        await Items.findByIdAndUpdate(itemId, {
          $push: { offers: savedOffer._id },
        });
        await Users.findByIdAndUpdate(buyerId, {
          $push: { offers: savedOffer._id },
        });
        return res.status(200).json({ message: "Offer sent" });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMyOffers = async (req, res) => {
  try {
    const { buyer } = req.params;
    await Offers.find({ buyer })
      .populate("buyer")
      .populate({
        path: "item",
        populate: {
          path: "seller",
          model: "user",
        },
      })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).send({ err: err.message });
      });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

export const getOffersIgot = async (req, res) => {
  try {
    const { userId } = req.params;

    await Items.find({
      $and: [{ seller: userId }, { $expr: { $gt: [{ $size: "$offers" }, 0] } }],
    })
      .populate({
        path: "offers",
        populate: {
          path: "buyer",
          model: "user",
        },
      })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const WithdrawOffer = async (req, res) => {
  try {
    const { offerId, postId, userId } = req.params;
  

    await Offers.findByIdAndDelete(offerId).then(async () => {
      await Users.findByIdAndUpdate(
        { _id: userId },
        { $pull: { offers: offerId } }
      );
      await Items.findByIdAndUpdate(
        { _id: postId },
        { $pull: { offers: offerId } }
      );
      // await Items.findByIdAndUpdate({_id:postId},{status:"active"})
      res.status(200).json({ message: "Offer withdraw successfull" });
    });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

export const updateOfferStatus = async (req, res) => {
  try {
    const { query, offerId, postId, userId } = req.params;

    if(query==='sold'){
      await Items.findByIdAndUpdate({_id:postId},{status:"sold"})
    }
    

    if(query=='rejected' ){
      await Items.findByIdAndUpdate({_id:postId},{status:"active"})
    }
    

    if (query === "accepted") {
      const offers = await Offers.find({ item: postId });

      const offersToDelete = offers.filter((offer) => offer._id != offerId);

      await Offers.deleteMany({
        _id: { $in: offersToDelete.map((offers) => offers._id) },
      }).then((data) => {
        console.log(data);
      });

      await Users.findByIdAndUpdate({_id:userId},{$pull:{offers:{$in:offersToDelete.map((offer)=>offer._id)}}})
      await Items.findByIdAndUpdate({_id:postId},{$pull:{offers:{$in:offersToDelete.map((offer)=>offer._id)}},status:'sold'})


      
    }

    await Offers.findOneAndUpdate({ _id: offerId }, { status: query }).then(
      (offer) => {
        res.status(200).json({ message: offer });
      }
    );
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
