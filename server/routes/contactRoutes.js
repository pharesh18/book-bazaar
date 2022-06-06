import express from 'express';
import { deleteContact, getContact, getContacts, userContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', userContact);
router.get('/', getContacts);
router.get('/:id', getContact);
router.delete('/:id', deleteContact);

export default router;