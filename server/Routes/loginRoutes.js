import {Router} from "express";


const router= Router();


router.route('/register').get((req,res)=>res.send("register"));

export default router;