import express from "express";
import { getVolunteer, addVolunteer } from "../controllers/volunteerController.js";

const router = express.Router();

router.get("/", getVolunteer);
router.post("/", addVolunteer);

export default router;
