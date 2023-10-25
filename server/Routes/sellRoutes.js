import { Router } from "express";
import * as controller from "../Controllers/sellItemscontrollers.js";
import { authuser } from "../Controllers/appControllers.js";
import {upload} from "../middlewares/multer.js";


const router = Router();

router.route("/sellitem").post( upload, controller.sellItem);

export default router;
