import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Components/Checkout.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Checkout = () => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    var _id = null;
    if (userInfo) {
        _id = userInfo._id;
    }
    const [book, setBook] = useState({
        cname: "",
        ccity: "",
        cemail: "",
        ccontact: "",
        caddress: "",
    });

    const navigate = useNavigate();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    }

    const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/book/${id}`).then((resp) => setUser({ ...resp.data }));
    }, [id]);

    const imagePath = `http://localhost:8000/public/images/${user.bimage}`;

    const checkChecked = () => {
        const chkbox = document.getElementById("radiobtn");
        if (chkbox.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    const checkCheckedCOD = () => {
        setIsChecked(false);
    }

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            // console.log(user);
            let paymentStatus = false;

            if (isChecked) {
                paymentStatus = true;
            } else {
                paymentStatus = false;
            }

            let User = _id;
            let Book = id;
            let bname = user.bname;
            let bauthor = user.bauthor;
            let bpublisher = user.bpublisher;
            let bisbn = user.bisbn;
            let bcategory = user.bcategory;
            let bcondition = user.bcondition;
            let bdescription = user.bdescription;
            let bauthordescription = user.bauthordescription;
            let bprice = user.bprice;
            let blanguage = user.blanguage;
            let bpages = user.bpages;
            let bedition = user.bedition;
            let bimage = user.bimage;
            let cname = book.cname;
            let ccity = book.ccity;
            let cemail = book.cemail;
            let ccontact = book.ccontact;
            let caddress = book.caddress;

            // console.log(User, Book, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, bprice, blanguage, bpages, bedition, bimage, cname, ccity, cemail, ccontact, caddress, paymentStatus);

            axios.post("http://localhost:8000/order", {
                User, Book, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, bprice, blanguage, bpages, bedition, bimage, cname, ccity, cemail, ccontact, caddress, paymentStatus
            }).then(() => {
                setIsChecked(false);
            }).catch((err) => {
                console.log(`Something went wrong, error occured : ${err}`);
            });
            toast.success("Order Placed Successfully");
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Header></Header>
            <div className="checkout">
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="checkout--book--container">
                        <div className="checkout--book--image">
                            <img src={imagePath} alt="" />
                        </div>
                        <div className="checkout--book--details">
                            <h5>{user.bname}</h5>
                            <p>{user.bdescription}</p>
                            <p> Author : {user.bauthor} | Languange : {user.blanguage} | Condition : {user.bcondition} </p>
                            <h5>₹{user.bprice}</h5>
                        </div>
                    </div>
                </div><hr />

                <div className="delivery--details">
                    <h3>Personal Details</h3>
                    <form action="">
                        <div className="persosnal--info">
                            <input type="text" placeholder='Name' name='cname' value={book.cname} onChange={handleInput} required />
                            <input type="text" placeholder='City' name='ccity' value={book.ccity} onChange={handleInput} required />
                            <input type="email" placeholder='Email' name='cemail' value={book.cemail} onChange={handleInput} required />
                            <input type="number" placeholder='Contact No' name='ccontact' value={book.ccontact} onChange={handleInput} required />
                            <textarea id="" placeholder='Address' name='caddress' value={book.caddresss} onChange={handleInput}></textarea>
                        </div>

                        <h3>Payment Option</h3>
                        <div className="payment--options">
                            <div className="cash--on--delivery">
                                <input type="radio" name="payment" onClick={checkCheckedCOD} id="" />
                                <label htmlFor="">Cash on delivery</label>
                            </div>
                            <div className="online--payment">
                                <input id="radiobtn" type="radio" onClick={checkChecked} name="payment" />
                                <label htmlFor="">Online payment</label>
                            </div>
                        </div>

                        <div className="buy--btn">
                            <a href="#" onClick={handleSubmit} className='btn btn-success'>{isChecked ? 'Payment' : 'Order'}</a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Checkout