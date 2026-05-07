import { Router } from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/auth.controller";

const router = Router();

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

// CURRENT USER
router.get("/me", getCurrentUser);

export default router;