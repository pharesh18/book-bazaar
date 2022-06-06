import Order from "../models/orderModel.js";
import Sold from "../models/soldModel.js";
import multer from 'multer';
import mongoose from "mongoose";

export const placeOrder = async (req, res) => {
    try {
        let { User, Book, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, blanguage, bprice, bpages, bedition, cname, ccity, cemail, ccontact, caddress, bimage, paymentStatus } = req.body;
        let data = new Order({ User, Book, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, blanguage, bprice, bpages, bedition, cname, ccity, cemail, ccontact, caddress, bimage, paymentStatus });
        // console.log(data);

        await data.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(409).send(error);
    }
}

export const getOrders = async (req, res) => {
    try {
        const Orders = await Order.find();
        // console.log(Contacts);
        res.status(200).send(Orders);
    } catch (error) {
        res.status(404).send(error);
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const _id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No order with this id");
        await Order.findByIdAndRemove(_id);
        res.send("Order details removed");
    } catch (error) {
        res.status(409).send(error);
    }
}



// Sold

export const soldBooks = async (req, res) => {
    try {
        let { bimage, bname, bauthor, cname, ccity, caddress, ccontact, cemail, bcondition, bcategory, bprice, blanguage } = req.body;
        let data = new Sold({ bimage, bname, bauthor, cname, ccity, caddress, ccontact, cemail, bcondition, bcategory, bprice, blanguage });
        // console.log(data);

        await data.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(409).send(error);
    }
}




export const getSoldBooks = async (req, res) => {
    try {
        const Solds = await Sold.find();
        // console.log(Contacts);
        res.status(200).send(Solds);
    } catch (error) {
        res.status(404).send(error);
    }
}