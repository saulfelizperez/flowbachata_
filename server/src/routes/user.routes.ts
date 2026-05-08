import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

const router = Router();

// 📦 USERS ROUTES (NO PARENTESIS!!)
router.get("/", getUsers);
router.get("/:uid", getUser);
router.post("/", createUser);
router.put("/:uid", updateUser);
router.delete("/:uid", deleteUser);

export default router;