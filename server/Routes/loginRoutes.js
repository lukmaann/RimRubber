import {Router} from "express";
import * as controller from "../Controllers/appControllers.js"
import { adminAuth, adminlogin } from "../Controllers/admincontroller.js";
import { feeddata } from "../Controllers/adscontroller.js";

const router= Router();


router.route('/register').post(controller.registerUser);
router.route('/login').post(controller.loginuser);
router.route('/auth').get(controller.auth)
router.route('/userexist').post(controller.userVerify);
router.route('/logout').get(controller.logoutUser)
router.route('/adminlogin').post(adminlogin)
router.route('/feeddata').get(feeddata)
router.route('/updatemyprofile').post(controller.updateProfile)

router.route('/adminauth').get(adminAuth)

export default router;