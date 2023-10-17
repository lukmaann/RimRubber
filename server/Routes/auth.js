import passport from "passport";
import { Router } from "express";

const router = Router();


router.route('/login/failed').get((req,res)=>res.status(401).json({error:"unauthorised"}))
router.route('/login/success').get((req,res)=>{
   passport.authenticate("google",["profile","email"])(req,res)
})

router
  .route("/google/callback")
  .get(
    // (req,res)=>res.send("callback")
    passport.authenticate("google", {
      successRedirect: "http://localhost:5173/home",
      failureRedirect: "http://localhost:3000/auth/login/failed",
    })
  );


  router.route('/google').get( passport.authenticate("google",["profile","email"]))

export default router;
