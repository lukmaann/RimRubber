import { Router } from "express";
import { getListedItems, uploadItems } from "../Controllers/otherItemcontroller.js";
import {upload} from "../middlewares/multer.js";


const router=Router();

router.route('/admin/uploaditem').post(upload,uploadItems);
router.route('/admin/getlisteditems').get(getListedItems)

export default router