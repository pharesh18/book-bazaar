import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../actions/userAction';
import './Header.css';

const Header = () => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    var _id = null;
    if (userInfo) {
        _id = userInfo._id;
    }
    // const { _id } = userInfo;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/');
        toast.success("Logged out Successfully");
    }

    return (
        <>
            <div className='header'>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><img src="../images/logo.png" alt="" /></a>
                        <button style={{ color: "#fff", border: "1px solid #fff" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon" style={{ color: "#fff" }}></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white" aria-current="page" href="/">Home</a>
                                </li>
                                {
                                    userInfo ? (
                                        <li class="nav-item m-1">
                                            <a class="nav-link text-white" href="/sellbook">Sell Book</a>
                                        </li>
                                    ) : null
                                }
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white" href="/about">About Us</a>
                                </li>
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white" href="/contact">Contact Us</a>
                                </li>
                                {
                                    userInfo ? (
                                        <li class="nav-item m-1 dropdown">
                                            <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                More
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                {/* <li><a class="dropdown-item" href="/myactivity">My activities</a></li> */}
                                                <li><a className="dropdown-item" href="/updateprofile">Edit Profile</a></li>
                                            </ul>
                                        </li>
                                    ) : null
                                }

                                {/* <li class="nav-item m-1">
                                    <a class="nav-link text-white" href="/signup">Sign Up</a>
                                </li> */}
                                <li class="nav-item m-1">
                                    {userInfo ? (
                                        <a className="nav-link text-white" onClick={logoutHandler} href="/">Logout</a>
                                    ) : (
                                        <a className="nav-link text-white" href="/login">Login</a>
                                    )}
                                </li>
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white" href={userInfo ? (`/cart/${_id}`) : ("/viewcart")}><i class="fas fa-shopping-cart"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
