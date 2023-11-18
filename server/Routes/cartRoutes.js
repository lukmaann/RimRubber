import { Router } from "express";
import { addToCart, getMyCart, removeFromCart } from "../Controllers/cartController.js";

const router=Router();

router.route('/addtocart/:userId/:itemId').get(addToCart)
router.route('/removefromcart/:userId/:itemId').get(removeFromCart)
router.route('/getmycart/:userId').get(getMyCart)


export default router;