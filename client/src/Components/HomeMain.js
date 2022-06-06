import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './HomeMain.css';
// import $ from 'jquery';

const HomeMain = () => {
    const books = useSelector((state) => state.bookReducer);
    const [catIndex, setCatIndex] = useState();

    const handleBookCategory = () => {
        const book__categories = document.querySelectorAll("#book_category");

        book__categories.forEach((btn, index) => {

            if (index === catIndex) {
                btn.style.backgroundColor = "#172337";
                btn.style.color = "#fff";
                console.log("jello");
            } else {
                btn.addEventListener('click', function (e) {
                    btn.style.backgroundColor = "#fff";
                    btn.style.color = "#172337";
                    setCatIndex(index);
                    console.log("hello");
                })
            }
        })
    }

    return (
        <div className='main--content'>
            <div className="book--category" id='book_category_container'>
                <h5>Book Category</h5>
                <span id='book_category' onClick={handleBookCategory}>Action & Adventure</span>
                <span id='book_category' onClick={handleBookCategory}>Health & Fitness</span>
                <span id='book_category' onClick={handleBookCategory}>Travel</span>
                <span id='book_category' onClick={handleBookCategory}>Drama</span>
                <span id='book_category' onClick={handleBookCategory}>Biography & Autobiography</span>
                <span id='book_category' onClick={handleBookCategory}>Action & Adventure</span>
                <span id='book_category' onClick={handleBookCategory}>Health & Fitness</span>
                <span id='book_category' onClick={handleBookCategory}>Travel</span>
                <span id='book_category' onClick={handleBookCategory}>Drama</span>
                <span id='book_category' onClick={handleBookCategory}>Biography & Autobiography</span>
                <span id='book_category' onClick={handleBookCategory}>Action & Adventure</span>
                <span id='book_category' onClick={handleBookCategory}>Health & Fitness</span>
                <span id='book_category' onClick={handleBookCategory}>Travel</span>
                <span id='book_category' onClick={handleBookCategory}>Drama</span>
                <span id='book_category' onClick={handleBookCategory}>Biography & Autobiography</span>
                <span id='book_category' onClick={handleBookCategory}>Action & Adventure</span>
                <span id='book_category' onClick={handleBookCategory}>Health & Fitness</span>
                <span id='book_category' onClick={handleBookCategory}>Travel</span>
                <span id='book_category' onClick={handleBookCategory}>Drama</span>
                <span id='book_category' onClick={handleBookCategory}>Biography & Autobiography</span>
            </div>

            <div class="book--category--dropdown">
                <button class="btn-book--category dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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

            <div className="main">
                <div className="filter">
                    <div className="filter--search">
                        <form action="">
                            <input type="text" placeholder='Search Book' />
                            <i class="fas fa-search"></i>
                        </form>
                    </div>

                    {/* <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Book Condition
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">All</a></li>
                            <li><a class="dropdown-item" href="#">New</a></li>
                            <li><a class="dropdown-item" href="#">Used</a></li>
                            <li><a class="dropdown-item" href="#">Poor</a></li>
                        </ul>
                    </div> */}
                </div>

                <div className="main--book--container">

                    {books.map((item) => {
                        const imagePath = `http://localhost:8000/public/images/${item.bimage}`;
                        return (
                            <a href={`/product/${item._id}`} className="book--container">
                                <div className="book--image">
                                    <img src={imagePath} alt="" />
                                </div>
                                <div className="book--details">
                                    <span>| {item.bname} | by {item.bauthor} | {item.blanguage} | Paperback | {item.bcondition} | {item.bedition} Edition | ₹{item.bprice}</span><br />
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default HomeMain