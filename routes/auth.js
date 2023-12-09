import express from "express";
import { Login, Register } from "../controllers/auth.js";
const router = express.Router();

router.post("/", Register);
router.post("/login", Login);

export { router as AuthRouter };
