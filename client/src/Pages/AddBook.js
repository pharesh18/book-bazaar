import React, { useState } from 'react';
import '../Components/AddBook.css';
import AdminHeader from '../Components/AdminHeader';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addBook } from '../actions/bookAction';
import DashboardSidebar from '../Components/DashboardSidebar';
import DashboardHeader from '../Components/DashboardHeader';

const AddBook = () => {
    const [book, setBook] = useState({
        bname: "",
        bauthor: "",
        bpublisher: "",
        bisbn: "",
        bcategory: "",
        bcondition: "",
        bprice: "",
        blanguage: "",
        bdescription: "",
        bauthordescription: "",
        bedition: "",
        bpages: "",
        bimage: "",
        countInStock: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    }

    const handleUpload = (e) => {
        setBook({ ...book, bimage: e.target.files[0] });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // console.log(book);

            const formData = new FormData();
            formData.append('bimage', book.bimage, book.bimage.name);
            formData.append('bname', book.bname);
            formData.append('bauthor', book.bauthor);
            formData.append('bpublisher', book.bpublisher);
            formData.append('bisbn', book.bisbn);
            formData.append('bcategory', book.bcategory);
            formData.append('bcondition', book.bcondition);
            formData.append('bprice', book.bprice);
            formData.append('blanguage', book.blanguage);
            formData.append('bdescription', book.bdescription);
            formData.append('bauthordescription', book.bauthordescription);
            formData.append('bpages', book.bpages);
            formData.append('bedition', book.bedition);
            formData.append('countInStock', book.countInStock);

            dispatch(addBook(formData));
            setBook({ bname: "", bauthor: "", bcategory: "", bcondition: "", bprice: "", blanguage: "", bdescription: "", bratings: "", countInStock: "" });
            toast.success("Book added successfully");
            navigate("/books");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="dashboard--container">
                        <div className='addbook'>
                            <h3>Add Book</h3>
                            <div className="addbook--container">
                                <form onSubmit={handleSubmit}>
                                    <div className='inputbox'>
                                        <input type="text" placeholder='Book Name' name='bname' value={book.bname} onChange={handleInput} autoComplete='off' required />
                                        <input type="text" placeholder='Author Name' name='bauthor' value={book.bauthor} onChange={handleInput} autoComplete='off' required />
                                    </div>

                                    <div className='inputbox'>
                                        <input type="text" placeholder='Publisher' name='bpublisher' value={book.bpublisher} onChange={handleInput} autoComplete='off' required />
                                        <input type="text" placeholder='ISBN' name='bisbn' value={book.bisbn} onChange={handleInput} autoComplete='off' required />
                                    </div>

                                    <div className='inputbox'>
                                        <select name='bcategory' value={book.bcategory} onChange={handleInput}>
                                            <option>Select Category</option>
                                            <option value="Action">Action</option>
                                            <option value="Adventure">Adventure</option>
                                            <option value="Romantic">Romantic</option>
                                        </select>

                                        <select name='bcondition' value={book.bcondition} onChange={handleInput}>
                                            <option>Book Condition</option>
                                            <option value="New">New</option>
                                            <option value="Used">Used</option>
                                            <option value="Poor">Poor</option>
                                        </select>
                                    </div>

                                    <div className='inputbox'>
                                        <textarea cols="25" rows="5" placeholder='About Book' name='bdescription' value={book.bdescription} onChange={handleInput} required></textarea>
                                        <textarea cols="25" rows="5" placeholder='About Author' name='bauthordescription' value={book.bauthordescription} onChange={handleInput} required></textarea>
                                    </div>

                                    <div className='inputbox'>
                                        <input type="number" placeholder='Book Pages' name='bpages' value={book.bpages} onChange={handleInput} autoComplete='off' required />
                                        <select name='bedition' value={book.bedition} onChange={handleInput}>
                                            <option>Edition</option>
                                            <option value="2010">2010</option>
                                            <option value="2012">2012</option>
                                            <option value="2015">2015</option>
                                        </select>
                                    </div>

                                    <div className='inputbox'>
                                        <input type="number" placeholder='Price' name='bprice' value={book.bprice} onChange={handleInput} autoComplete='off' required />
                                        <select name='blanguage' value={book.blanguage} onChange={handleInput}>
                                            <option>Book Language</option>
                                            <option value="English">English</option>
                                            <option value="Gujarati">Gujrati</option>
                                            <option value="Hindi">Hindi</option>
                                        </select>
                                    </div>

                                    <div className='inputbox'>
                                        <div className='upload--image'>
                                            <input type="file" id='uploadImage' name="bimage" onChange={handleUpload} />
                                            <label htmlFor="">Choose Book Image</label>
                                        </div>
                                        <input type="number" placeholder='Quantity' name='countInStock' value={book.countInStock} onChange={handleInput} autoComplete='off' required />
                                    </div>

                                    <div className='btn--add'>
                                        <input type="submit" value="Add Book" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <AdminHeader></AdminHeader> */}
        </>
    )
}

export default AddBook