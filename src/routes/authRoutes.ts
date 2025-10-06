import express from 'express';
import { getCurrentUserProfile, loginUser, logoutUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', getCurrentUserProfile);

export default router;