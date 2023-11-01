import { Router } from "express";
import { getMyAd,delad,getAds } from "../Controllers/adscontroller.js";

const router=Router();


router.route('/getmyad').get(getMyAd)
router.route('/delad/:id').get(delad)
router.route('/getads/:status').get(getAds)
export default router