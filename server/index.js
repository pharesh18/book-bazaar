import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './db/conn.js';
const PORT = process.env.PORT || 8000;
const app = express();

import bookRoutes from './routes/bookRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import userRoute from './routes/userRoute.js';
import orderRoute from './routes/orderRoute.js';
import cartRoute from './routes/cartRoutes.js';

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

app.use('/book', bookRoutes);
app.use('/contact', contactRoutes);
app.use('/user', userRoute);
app.use('/order', orderRoute);
app.use('/cart', cartRoute);

app.listen(PORT, () => {
    console.log(`Server is running at the port no ${PORT}`);
})