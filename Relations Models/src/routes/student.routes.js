import express from "express";
import { addStudent } from "../controllers/student.cotrollers.js";

const router = express.Router();

router.post("/student", addStudent);

export default router;