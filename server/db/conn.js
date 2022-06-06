import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/bookbazaar").then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("No connection");
})