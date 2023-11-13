import {Router} from "express";
import { WithdrawOffer, getMyOffers, getOffersIgot, makeOffer } from "../Controllers/offersController.js";

const router=Router();

router.route('/makeoffer').post(makeOffer);
router.route('/getmyoffers/:buyer').get(getMyOffers);
router.route('/offerigot/:userId').get(getOffersIgot);
router.route('/withdrawoffer/:offerId/:userId/:postId').get(WithdrawOffer);



export default router