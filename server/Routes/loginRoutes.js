import {Router} from "express";
import * as controller from "../Controllers/appControllers.js"
import { adminAuth, adminlogin } from "../Controllers/admincontroller.js";

const router= Router();


router.route('/register').post(controller.registerUser);
router.route('/login').post(controller.loginuser);
router.route('/auth').get(controller.auth)
router.route('/userexist').post(controller.userVerify);
router.route('/logout').get(controller.logoutUser)
router.route('/adminlogin').post(adminlogin)

router.route('/adminauth').get(adminAuth)

export default router;