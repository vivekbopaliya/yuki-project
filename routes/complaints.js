import express from "express";
import { AllComplaints, CreateComplaints } from "../controllers/complaints.js";
const router = express.Router();

router.post("/", CreateComplaints);
router.get("/getComplaints", AllComplaints);

export { router as ComplainRouter };
