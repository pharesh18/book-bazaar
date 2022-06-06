import React from 'react'
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../actions/userAction';

const DashboardSidebar = () => {
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
        <div className="sidebar">
            <div className="dashboard--title">
                <Link to="/"><img src="../images/logo.png" alt="" /></Link>
            </div>
            <div className="sidebar--menu">
                <Link className="single--menu" to="/">
                    <ion-icon name="color-palette"></ion-icon>
                    <span>Dashboard</span>
                </Link>

                <Link className="single--menu" to="/books">
                    <ion-icon name="book"></ion-icon>
                    <span>Books</span>
                </Link>

                <Link className="single--menu" to="/addbook">
                    <ion-icon name="add-circle"></ion-icon>
                    <span>Add Book</span>
                </Link>

                <Link className="single--menu" to="/orders">
                    <ion-icon name="receipt"></ion-icon>
                    <span>Orders</span>
                </Link>

                <Link className="single--menu" to="/bookrequests">
                    <ion-icon name="git-pull-request"></ion-icon>
                    <span>Book Requests</span>
                </Link>

                <Link className="single--menu" to="/feedback">
                    <ion-icon name="chatbox-ellipses"></ion-icon>
                    <span>Feedback</span>
                </Link>

                <Link className="single--menu" to="/adminpurchased">
                    <ion-icon name="basket"></ion-icon>
                    <span>Purchased Books</span>
                </Link>

                <Link className="single--menu" to="/adminsold">
                    <ion-icon name="logo-usd"></ion-icon>
                    <span>Sold Books</span>
                </Link>

                {
                    userInfo ? (
                        <Link className="single--menu" to="/updateadminprofile">
                            <ion-icon name="person"></ion-icon>
                            <span>Edit Profile</span>
                        </Link>
                    ) : null
                }

                <Link className="single--menu" to="/" onClick={logoutHandler}>
                    <ion-icon name="power"></ion-icon>
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    )
}

export default DashboardSidebar