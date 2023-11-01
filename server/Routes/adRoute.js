import { Router } from "express";
import { getMyAd,delad,getAds,  updateadsstatus } from "../Controllers/adscontroller.js";

const router=Router();


router.route('/getmyad').get(getMyAd)
router.route('/delad/:id').get(delad)
router.route('/getads/:status').get(getAds)
router.route('/adsstatus/:id/:type').get(updateadsstatus)
export default router