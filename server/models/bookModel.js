import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    bname: {
        type: String,
        required: true,
    },
    bauthor: {
        type: String,
        required: true,
    },
    bpublisher: {
        type: String,
        required: true,
    },
    bisbn: {
        type: String,
        required: true,
    },
    bcategory: {
        type: String,
        required: true,
    },
    bcondition: {
        type: String,
        required: true,
    },
    bdescription: {
        type: String,
        required: true,
    },
    bauthordescription: {
        type: String,
        required: true,
    },
    bprice: {
        type: Number,
        required: true,
    },
    blanguage: {
        type: String,
        required: true,
    },
    bpages: {
        type: Number,
        required: true,
    },
    bedition: {
        type: Number,
        required: true,
    },
    bimage: {
        type: String,
        required: true,
    },
});


// Create a new collection

const Book = new mongoose.model('Book', bookSchema);

export default Book;