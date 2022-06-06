import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateBook } from '../actions/bookAction';
import '../Components/AddBook.css';
import AdminHeader from '../Components/AdminHeader';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardSidebar from '../Components/DashboardSidebar';

const Update = () => {
    const [book, setBook] = useState({});
    // const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/book/${id}`).then((resp) => setBook({ ...resp.data }));
    }, [id]);

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

            // console.log(book._id);
            dispatch(updateBook(id, formData));
            // axios.put(`http://localhost:8000/book/update/${id}`, formData);
            // setBook({ bname: "", bauthor: "", bcategory: "", bcondition: "", bprice: "", blanguage: "", bdescription: "", bratings: "" });
            toast.success("Book updated successfully");
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
                    {/* <AdminHeader></AdminHeader> */}
                    <div className='addbook'>
                        <h3>Update Book</h3>
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
                                    <input type="text" disabled style={{ backgroundColor: "transparent", border: "none", outline: "none" }} />
                                </div>














                                {/* <div className='inputbox'>
                            <input type="text" placeholder='Book Name' autoComplete='off' required />
                            <input type="text" placeholder='Author Name' autoComplete='off' required />
                        </div>

                        <div className='inputbox'>
                            <select>
                                <option>Select Category</option>
                                <option>Action</option>
                                <option>Adventure</option>
                                <option>Romantic</option>
                            </select>

                            <select>
                                <option>Book Condition</option>
                                <option>Good</option>
                                <option>medium</option>
                                <option>Poor</option>
                            </select>
                        </div>

                        <div className='inputbox'>
                            <input type="number" placeholder='Price' autoComplete='off' required />
                            <select>
                                <option>Book Language</option>
                                <option>English</option>
                                <option>Gujrati</option>
                                <option>Hindi</option>
                            </select>
                        </div>

                        <div className='inputbox'>
                            <textarea cols="25" rows="5" placeholder='About Book' required></textarea>
                            <div className='upload--image'>
                                <input type="file" id='uploadImage' name="" required />
                                <label htmlFor="">Choose Book Image</label>
                            </div>
                        </div> */}

                                <div className='btn--add'>
                                    <input type="submit" value="Update Book" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Update