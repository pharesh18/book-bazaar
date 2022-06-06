import React from 'react'
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../actions/userAction';

const AdminHeader = () => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
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
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><img src="../images/logo.png" alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white " aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white " href="/">Add Book</a>
                                </li>
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white " href="/orders">Orders</a>
                                </li>
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white " href="/bookrequests">Book Requests</a>
                                </li>
                                <li class="nav-item m-1">
                                    <a class="nav-link text-white " href="/feedback">Feedback</a>
                                </li>
                                <li class="nav-item m-1 dropdown">
                                    <a class="nav-link text-white  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/adminpurchased">Purchased Books</a></li>
                                        <li><a class="dropdown-item" href="/adminsold">Sold Books</a></li>
                                        {
                                            userInfo ? (
                                                <li><a className="dropdown-item" href="/updateprofile">Edit Profile</a></li>
                                            ) : null
                                        }
                                    </ul>
                                </li>
                                <li class="nav-item m-1">
                                    {userInfo ? (
                                        <a className="nav-link text-white" onClick={logoutHandler} href="/">Logout</a>
                                    ) : (
                                        <a class="nav-link text-white " href="/adminlogin">Login</a>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default AdminHeader