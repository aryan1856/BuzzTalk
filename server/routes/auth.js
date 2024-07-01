import express from 'express';
import { register, loginUser, logout} from '../controllers/authController.js';

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", register);
router.post("/logout", logout);

export default router;