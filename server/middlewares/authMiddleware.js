import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
const JWT_KEY = "abcd123";

export const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, JWT_KEY)
            // console.log(decode);
            req.user = await User.findById(decode.id).select('-password')
            next();
        } catch (error) {
            console.error(error);
            res.status(401)
            throw new Error('Not Authorized, Token Failed');
        }
    if (!token) {
        res.status(401);
        throw new Error("Not Authorized, not token");
    }
});