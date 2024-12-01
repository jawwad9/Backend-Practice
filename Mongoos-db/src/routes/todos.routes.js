import express from "express";
import { addTodo } from "../controllers/todo.controllers.js";

const router = express.Router();


router.post("/todo", addTodo);

export default router;