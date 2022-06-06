import React from 'react';
import Header from '../Components/Header';
import '../Components/SellBook.css';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';

const SellBook = () => {
    const handleSell = () => {
        toast.success("Reqest Sent to sell your book");
    }
    return (
        <>
            <Header></Header>
            <div className='sellbook'>
                <h3>Sell Your Book</h3>
                <div className="sellbook--container">
                    <form>
                        {/* personal info */}
                        <h4>Personal Details</h4>
                        <div className="personal--info">
                            <div className='inputbox'>
                                <input type="text" placeholder='First Name' autoComplete='off' required />
                                <input type="text" placeholder='Last Name' autoComplete='off' required />
                            </div>

                            <div className='inputbox'>
                                <input type="email" placeholder='Username' autoComplete='off' required />
                                <input type="contact" placeholder='Contact No' autoComplete='off' required />
                            </div>

                            <div className='inputbox'>
                                <input type="text" placeholder='City' autoComplete='off' required />
                                <textarea cols="25" rows="5" placeholder='About Book' required></textarea>
                            </div>
                        </div><hr />

                        {/* book details */}
                        <h4>Book Details</h4>
                        <div className="book--info">

                            <div className='inputbox'>
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
                                <input type="number" placeholder='Real Book Price' autoComplete='off' required />
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
                            </div>
                        </div>

                        <div className="delivery">
                            <input type="radio" className="cod" checked /><label htmlFor="">Cash On Delivery</label>
                        </div>

                        <div className="sell--btn">
                            <input onClick={handleSell} type="submit" value="Sell" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SellBook