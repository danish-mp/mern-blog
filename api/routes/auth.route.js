import express from "express";
import { getAdmin, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/getadmin/:adminId", getAdmin);

export default router;
