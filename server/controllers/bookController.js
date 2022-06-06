import Book from "../models/bookModel.js";
import multer from 'multer';
import mongoose from "mongoose";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '_' + file.originalname);
    }
})

export const upload = multer({ storage: storage });

export const getBooks = async (req, res) => {
    try {
        const Books = await Book.find();
        res.status(200).send(Books);
    } catch (error) {
        res.status(404).send(err);
    }
}

export const addBook = async (req, res) => {
    try {
        let { bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, blanguage, bprice, bpages, bedition } = req.body;
        let bimage = (req.file) ? req.file.filename : null;
        let data = new Book({ bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, blanguage, bprice, bpages, bedition, bimage })
        // console.log(data);

        await data.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(409).send(error);
    }
}

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        let { bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, blanguage, bprice, bpages, bedition } = req.body;
        let bimage = (req.file) ? req.file.filename : null;

        console.log(id);
        console.log(req.body);
        // let data = new Book({ bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, blanguage, bprice, bpages, bedition, bimage })
        // console.log(data);

        const result = await Book.updateOne({ _id: id }, {
            $set: { bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, blanguage, bprice, bpages, bedition, bimage }
        });

        // console.log(id, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, blanguage, bprice, bpages, bedition, bimage);

        // await data.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(409).send(error);
    }
}

export const getBook = async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Book.findById({ _id });

        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (error) {
        res.status(412).send(error);
    }
}


export const deleteBook = async (req, res) => {
    try {
        const _id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No book with this id");
        await Book.findByIdAndRemove(_id);
        res.send("Book deleted Successfully");
    } catch (error) {
        res.status(409).send(error);
    }
}