import Cart from "../models/cartModel.js";
import mongoose from "mongoose";

export const addToCart = async (req, res) => {
    try {
        let { User, Book, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, bprice, blanguage, bpages, bedition, bimage } = req.body;
        let data = new Cart({ User, Book, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, bprice, blanguage, bpages, bedition, bimage });
        console.log(data);
        await data.save();
        res.status(202).send(data);
    } catch (error) {
        res.status(409).send(error);
    }
}



export const getCart = async (req, res) => {
    try {
        const cartData = await Cart.find();
        res.status(200).send(cartData);
    } catch (error) {
        res.status(404).send(error);
    }
}

export const removeProduct = async (req, res) => {
    try {
        console.log("in function");
        const _id = req.params.id;
        console.log("in delete");
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No book with this id");
        await Cart.findByIdAndRemove(_id);
        res.send("Removed");
    } catch (error) {
        res.status(409).send(error);
    }
}

// export const getProducts = async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const productData = null;
//         console.log(_id);
//         console.log(await Cart.findById({ User: _id }));
//         //console.log(productData);
//         if (!productData) {
//             return res.status(404).send("Error");
//         } else {
//             res.send(productData);
//         }
//     } catch (error) {
//         res.status(412).send(error);
//     }
// }



