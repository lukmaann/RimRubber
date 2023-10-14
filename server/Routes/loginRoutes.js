import {Router} from "express";
import * as controller from "../Controllers/appControllers.js"

const router= Router();


router.route('/register').post(controller.registerUser);

export default router;