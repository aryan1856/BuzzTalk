import express from 'express';
import { register, loginUser, logout, user} from '../controllers/authController.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.post("/logout", logout);
router.post("/user", user);

export default router;