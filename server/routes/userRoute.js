import express from 'express';
const router = express.Router();
import { authController, getUsers, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

// user registration
router.route('/').post(registerUser);

router.get('/getUsers', getUsers);
// user login
router.post('/login', authController);

// get user profile Private route
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
export default router;