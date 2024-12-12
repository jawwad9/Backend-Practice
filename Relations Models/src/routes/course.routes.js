import express from "express";
import { addCourse } from "../controllers/course.controllers.js";

const router = express.Router();

router.post("/course", addCourse);

export default router;