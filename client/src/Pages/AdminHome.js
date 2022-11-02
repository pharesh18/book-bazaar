import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminHeader from '../Components/AdminHeader';
import '../Components/AdminHome.css';
import { deleteBook } from '../actions/bookAction';
import DashboardSidebar from '../Components/DashboardSidebar';
import DashboardHeader from '../Components/DashboardHeader';

const AdminHome = () => {
    const dispatch = useDispatch();
    var books = useSelector((state) => state.bookReducer);
    console.log(books);
    // console.log(books);

    const [search, setSearch] = useState();
    const handleDelete = (_id) => {
        if (window.confirm("Are you sure you want to delete this book??")) {
            dispatch(deleteBook(_id));
        }
    }

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearch(search => val);
        // console.log(val);
    }

    const searchBook = () => {
        console.log(books);
        books.map((item, i) => {
            console.log(item, i);
            if (item.bname.toUpperCase() == search.toUpperCase()) {
                console.log("Matched");
                // console.log(search.toUpperCase());
                console.log(books);
            } else {
                books.splice(i, 1);
                console.log(books);
            }
            return books;
        })
    }

    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="dashboard--container">
                        <div className='admin--main--content'>
                            <div className="admin--main">
                                <div className="admin--filter">
                                    <div className="admin--filter--search">
                                        <form action="">
                                            <input type="text" name='search' value={search} onChange={handleSearch} placeholder='Search Book' />
                                            <i onClick={searchBook} class="fas fa-search"></i>
                                        </form>
                                    </div>

                                    <div class="admin--dropdown" style={{ width: "200px" }}>
                                        <button class="btn btn-secondary dropdown-toggle" style={{ width: "200px" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Book Category
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action & Adventure</a></li>
                                            <li><a class="dropdown-item" href="#">Health & Fitness</a></li>
                                            <li><a class="dropdown-item" href="#">Travel</a></li>
                                            <li><a class="dropdown-item" href="#">Drama</a></li>
                                            <li><a class="dropdown-item" href="#">Biography & Autobiography</a></li>
                                            <li><a class="dropdown-item" href="#">Action & Adventure</a></li>
                                            <li><a class="dropdown-item" href="#">Health & Fitness</a></li>
                                            <li><a class="dropdown-item" href="#">Travel</a></li>
                                            <li><a class="dropdown-item" href="#">Drama</a></li>
                                            <li><a class="dropdown-item" href="#">Biography & Autobiography</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="admin-main-container">
                                    <h4>Action & Adventure</h4>
                                    <div className="admin--book--container">
                                        {books.map((item) => {
                                            const imagePath = `http://localhost:8000/public/images/${item.bimage}`;
                                            return (

                                                <div className="admin--book--row">
                                                    <div className="admin--book--image">
                                                        <img src={imagePath} alt="" />
                                                    </div>
                                                    <div className="admin--book--details">
                                                        <h5>{item.bname} (by {item.bauthor})</h5>
                                                        <p>{item.bdescription}</p>
                                                        <span>{item.blanguage} | {item.bcondition} | {item.bpages} pages</span>
                                                        <p style={{ marginTop: "10px", fontWeight: "600", fontSize: "18px" }}>₹{item.bprice}</p>
                                                    </div>
                                                    <div className="admin--book--btns">
                                                        <a href={`/view/${item._id}`}><button className='view'>View</button></a>
                                                        <a href={`/update/${item._id}`}><button className='update'>Update</button></a>
                                                        <a><button className='delete' onClick={() => handleDelete(item._id)}>Delete</button></a>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AdminHome;
