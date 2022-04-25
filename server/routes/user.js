import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import { createProject, joinProject, signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/createProject", auth, createProject);
router.post("/joinProject", auth, joinProject);

export default router;