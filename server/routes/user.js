import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import { joinProject, signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/joinProject", auth, joinProject);
// router.post("/createProject", auth, createProject);

export default router;