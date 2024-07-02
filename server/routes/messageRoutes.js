import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.post("/send/:id",protectedRoute,sendMessage);
router.get("/:id", protectedRoute, getMessage);

export default router;