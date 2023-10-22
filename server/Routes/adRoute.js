import { Router } from "express";
import { getMyAd } from "../Controllers/adscontroller.js";

const router=Router();


router.route('/getmyad').get(getMyAd)

export default router