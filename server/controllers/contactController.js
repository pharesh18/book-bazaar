import Contact from "../models/contactModel.js";
import mongoose from "mongoose";

export const userContact = async (req, res) => {
    try {
        // let fname = req.body.fname;
        // let lname = req.body.lname;
        let { fname, lname, email, query } = req.body;
        let data = new Contact({ fname, lname, email, query });
        await data.save();
        res.status(201).send(data);
        console.log(data);
    } catch (error) {
        res.status(409).send(error);
    }
}

export const getContacts = async (req, res) => {
    try {
        const Contacts = await Contact.find();
        // console.log(Contacts);
        res.status(200).send(Contacts);
    } catch (error) {
        res.status(404).send(err);
    }
}



export const getContact = async (req, res) => {
    try {
        const _id = req.params.id;
        const contactData = await Contact.findById({ _id });

        if (!contactData) {
            return res.status(404).send();
        } else {
            res.send(contactData);
        }
    } catch (error) {
        res.status(412).send(error);
    }
}


export const deleteContact = async (req, res) => {
    try {
        const _id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No contact with this id");
        await Contact.findByIdAndRemove(_id);
        res.send("Deleted");
    } catch (error) {
        res.status(409).send(error);
    }
}