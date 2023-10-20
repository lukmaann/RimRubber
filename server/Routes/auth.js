import passport from "passport";
import { Router } from "express";

const router = Router();

router.route('/google').get(passport.authenticate('google',{scope:['profile']}))

router.route("/google/callback").get(
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/home",
    failureRedirect:"/" ,
  })
);


export default router;
