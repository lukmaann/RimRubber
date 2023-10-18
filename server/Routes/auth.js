import passport from "passport";
import { Router } from "express";

const router = Router();

router
  .route("/login/failed")
  .get((req, res) => res.status(401).json({ error: "unauthorised" }));

router.route("/google/callback").get(
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/home",
    failureRedirect: "http://localhost:3000/auth/login/failed",
  })
);


export default router;
