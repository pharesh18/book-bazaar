import User from "../models/userModel.js";
import asyncHandler from 'express-async-handler';
import { generateToken } from "../utils/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, number } = req.body;
    const userExits = await User.findOne({ email });
    if (userExits) {
        res.status(400)
        throw new Error('User Already Exists!')
    }

    const user = await User.create({ name, email, password, number });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            number: user.number,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(404)
        throw new Error('User Not Found');
    }
});


export const authController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password');
    }
});


export const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            number: user.number,
            // password: user.password,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404)
        throw new Error("User Not Found");
    }
});


export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.number = req.body.number || user.number;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updateUser = await user.save();
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            // password: updateUser.password,
            number: updateUser.number,
            isAdmin: updateUser.isAdmin,
            token: generateToken(updateUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User Not Found!');
    }
});

export const getUsers = async (req, res) => {
    try {
        const Users = await User.find();
        res.status(200).send(Users);
    } catch (error) {
        res.status(404).send(err);
    }
}