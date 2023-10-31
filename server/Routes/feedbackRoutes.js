import { Router } from "express";
import giveFeedback from "../Controllers/feedbackController.js";

const router = Router();

router.route("/givefeedback").post(giveFeedback);

export default router;
