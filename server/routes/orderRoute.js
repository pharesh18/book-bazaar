import express from 'express';
import { placeOrder, getOrders, deleteOrder, soldBooks, getSoldBooks } from '../controllers/orderController.js';
const router = express.Router();

router.post('/', placeOrder);
router.get('/', getOrders);
router.delete('/:id', deleteOrder);
router.post('/sold', soldBooks);
router.get('/sold', getSoldBooks);

export default router;