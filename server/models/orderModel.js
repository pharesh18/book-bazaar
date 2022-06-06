import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
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
    cname: {
        type: String,
        required: true,
    },
    ccity: {
        type: String,
        required: true,
    },
    cemail: {
        type: String,
        required: true,
    },
    ccontact: {
        type: String,
        required: true,
    },
    caddress: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: Boolean,
        required: true,
    },
});


// Create a new collection

const Order = new mongoose.model('Order', orderSchema);

export default Order;