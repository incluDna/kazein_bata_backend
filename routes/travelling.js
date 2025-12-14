import express from "express";
import { getTravelling, addTravelling } from "../controllers/travellingController.js";

const router = express.Router();

router.get("/", getTravelling);
router.post("/", addTravelling);

export default router;
