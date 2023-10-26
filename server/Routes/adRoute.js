import { Router } from "express";
import { getMyAd,delad } from "../Controllers/adscontroller.js";

const router=Router();


router.route('/getmyad').get(getMyAd)
router.route('/delad/:id').get(delad)

export default router