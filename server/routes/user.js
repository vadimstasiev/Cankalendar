import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import { createProject, getProjectList, joinProject, signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/joinProject", auth, joinProject);
router.post("/createProject", auth, createProject);
router.post("/getProjectList", auth, getProjectList);

export default router;