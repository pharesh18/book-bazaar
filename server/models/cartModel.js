import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    Book: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Book'
    },
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

const Cart = new mongoose.model('Cart', cartSchema);

export default Cart;