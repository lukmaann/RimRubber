import {Router} from "express";
import * as controller from "../Controllers/sellItemscontrollers.js"
import { authuser } from "../Controllers/appControllers.js";
import multer from "multer";

const router=Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const imagePath = path.resolve(__dirname, "../client/src/images");
    cb(null, imagePath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage:storage });




router.route('/sellitem').post(authuser,upload.single("image"),controller.sellItem)

export default router