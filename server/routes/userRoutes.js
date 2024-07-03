import express, { response } from 'express';
import protectedRoute from '../middleware/protectedRoute.js';
import { getUsersForSideBar } from '../controllers/userController.js';

const router = express.Router();

router.get("/", protectedRoute,getUsersForSideBar);

export default router;