import express from "express";
import { getPreventions, addPrevention } from "../controllers/preventionController.js";

const router = express.Router();

router.get("/", getPreventions);
router.post("/", addPrevention);

export default router;
