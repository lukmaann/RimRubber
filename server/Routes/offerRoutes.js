import {Router} from "express";
import { getMyOffers, makeOffer } from "../Controllers/offersController.js";

const router=Router();

router.route('/makeoffer').post(makeOffer);
router.route('/getmyoffers/:buyer').get(getMyOffers);


export default router