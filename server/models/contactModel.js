import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true,
    },
});


// Create a new collection

const Contact = new mongoose.model('Contact', contactSchema);

export default Contact;