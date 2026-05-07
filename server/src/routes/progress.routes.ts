import express from "express";
import { getProgress, updateProgress } from "../controllers/progress.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/progress", verifyToken, getProgress);
router.put("/progress", verifyToken, updateProgress);

export default router;