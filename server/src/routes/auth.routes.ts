import { Router } from "express";
import { getCurrentUser } from "../controllers/auth.controller";

const router = Router();

// comprobar usuario logueado
router.get("/me", getCurrentUser);

export default router;