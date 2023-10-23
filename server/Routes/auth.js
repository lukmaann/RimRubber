import passport from "passport";
import { Router } from "express";

const router = Router();

router.route('/google').get(passport.authenticate('google',{scope:['profile']}))

router.route("/google/callback").get(
  passport.authenticate("google", {
    successRedirect: "https://rimrubber.netlify.app/home",
    failureRedirect:"/" ,
  })
);


export default router;
