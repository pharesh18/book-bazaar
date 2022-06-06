import express from 'express';
import { addToCart, getCart, removeProduct } from '../controllers/cartController.js';
const router = express.Router();

router.post('/addtocart', addToCart);
router.get('/getcart', getCart);
router.delete('remove/:id', removeProduct);

export default router;