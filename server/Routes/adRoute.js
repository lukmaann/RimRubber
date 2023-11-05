import { Router } from "express";
import { getMyAd,delad,getAds,  updateadsstatus, getSingleAd, findItemsByWidth } from "../Controllers/adscontroller.js";

const router=Router();


router.route('/getmyad').get(getMyAd)
router.route('/delad/:id').get(delad)
router.route('/getads/:status').get(getAds)
router.route('/adsstatus/:id/:type').get(updateadsstatus)
router.route('/getsinglead/:id').get(getSingleAd)
router.route('/findbywidth').post(findItemsByWidth)

export default router