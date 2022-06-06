import express from 'express';
import { getBooks, addBook, getBook, upload, updateBook, deleteBook } from '../controllers/bookController.js';
const router = express.Router();

router.get('/', getBooks);
router.post('/', upload.single("bimage"), addBook);
router.get('/:id', getBook);
router.put('/update/:id', upload.single("bimage"), updateBook);
router.delete('/:id', deleteBook);

export default router;