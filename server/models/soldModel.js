import mongoose from 'mongoose';

const soldSchema = new mongoose.Schema({
    bname: {
        type: String,
        required: true,
    },
    bauthor: {
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
    bprice: {
        type: Number,
        required: true,
    },
    blanguage: {
        type: String,
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
});


// Create a new collection

const Sold = new mongoose.model('Sold', soldSchema);

export default Sold;