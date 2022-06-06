import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SlickSlider from '../Components/SlickSlider';
import '../Components/Product.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Product = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    var _id = null;
    if (userInfo) {
        _id = userInfo._id;
    }
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/book/${id}`).then((resp) => setUser({ ...resp.data }));
    }, [id]);

    const addToCartHandler = () => {
        if (!_id) {
            navigate('/login');
        } else {
            try {
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
                // console.log(User, Book, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, bprice, blanguage, bpages, bedition, bimage, cname, ccity, cemail, ccontact, caddress, paymentStatus);

                axios.post("http://localhost:8000/cart/addtocart", {
                    User, Book, bname, bauthor, bpublisher, bisbn, bcategory, bcondition, bdescription, bauthordescription, bprice, blanguage, bpages, bedition, bimage
                });
                navigate(`/cart/${_id}`);
            } catch (err) {
                console.log(err);
            }
        }
    }

    const imagePath = `http://localhost:8000/public/images/${user.bimage}`;
    return (
        <>
            <Header></Header>
            <div className='product'>
                <div className="show--product">
                    <div className="product--container">
                        <div className="image">
                            <img src={imagePath} alt="Book Image" />
                        </div>
                        <div className="btns">
                            <a href="#" onClick={addToCartHandler} className='add-to-cart'>ADD TO CART</a>
                            <a href={_id ? `/checkout/${id}` : '/login'} className='buy-now'>BUY NOW</a>
                        </div>
                    </div>
                </div>
                <div className="show--product--details">
                    <h5>{user.bname} ({user.blanguage}, Paperback, by {user.bauthor})</h5>
                    <h4 style={{ color: "gray", fontSize: "18px", margin: "15px 0 5px 0" }}>About book</h4>
                    <p>{user.bdescription} </p>
                    <div className="about-book-desc" style={{ display: "flex" }} >
                        <div className="highlights" style={{ marginRight: "200px" }}>
                            <strong style={{ fontSize: "16px", color: "gray", display: "block", marginBottom: "10px" }}>Highlights </strong>
                            <span style={{ marginBottom: "8px", display: "block" }}>Language: {user.blanguage}</span>
                            <span style={{ marginBottom: "8px", display: "block" }}>Binding: Paperback</span>
                            <span style={{ marginBottom: "8px", display: "block" }}>Publisher: {user.bpublisher}</span>
                            <span style={{ marginBottom: "8px", display: "block" }}>Genre: {user.bcategory}</span>
                            <span style={{ marginBottom: "8px", display: "block" }}>ISBN: {user.bisbn}</span>
                            <span style={{ marginBottom: "8px", display: "block" }}>Edition: {user.bedition}</span>
                            <span style={{ marginBottom: "8px", display: "block" }}>Pages : {user.bpages}</span>
                            <strong>Price ₹{user.bprice}/-</strong>
                        </div>

                        <div className="services">
                            <strong style={{ fontSize: "16px", color: "gray", display: "block", marginBottom: "10px" }}>Services </strong>
                            <p>Cash on Delivery available</p>
                            <p>Online payment available</p>
                        </div>
                    </div>

                    <h4 style={{ color: "gray", fontSize: "18px", margin: "20px 0 5px 0" }}>About author</h4>
                    <p>{user.bauthordescription}</p>

                </div>
            </div>
            {/* <hr /> */}
            {/* 
            <div className='product--related--books'>
                <h2>Related books</h2>
                <SlickSlider></SlickSlider>
            </div> */}
            <Footer></Footer>
        </>
    );
};

export default Product;
