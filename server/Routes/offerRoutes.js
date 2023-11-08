import {Router} from "express";
import { makeOffer } from "../Controllers/offersController.js";

const router=Router();

router.route('/makeoffer').post(makeOffer)

export default router