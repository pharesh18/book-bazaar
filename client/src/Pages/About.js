import React from 'react';
import Header from '../Components/Header';
import '../Components/About.css';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <>
            <Header></Header>
            <div className='section'>
                <div className='main-container'>
                    <div className='content-section'>
                        <div className="content">
                            <div className='title'>
                                <h1>About Us</h1>
                            </div>
                            <div className='disc'>
                                <h3>Welcome to Book Baazar !</h3><br />
                                <p>Our main aim is more and more people buy thier books online,we
                                    wanted to create an easy,convenient way for you to get your books and
                                    and get the satisfaction. In our shop all types of the books are
                                    available like Adventure,Historical,Reading books etc,Customer can
                                    easily buy books.With the help of online bookstore, Customers saves time and get
                                    discount through online Bookstore.
                                </p>
                            </div>
                        </div>
                        <div className="image-right">
                            <img src="../images/about-bg.jpg" alt="" />
                        </div>
                    </div><hr />

                    <div className="service-content-section">
                        <div className="image-left">
                            <img src="../images/about-bg2.png" alt="" />
                        </div>
                        <div className="service--content">
                            <h1>Serving <span style={{ color: "rgb(8, 6, 85)", marginBottom: "10px" }}> Amazing Books </span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div><hr />

                    <div className="blogs">
                        <div className="left--blog">
                            <h5>Perfect service</h5>
                            <div className="ratings">
                                <span>⭐⭐⭐⭐</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quas hic, soluta, consequatur praesentium ut facilis omnis veritatis, eum doloribus aspernatur debitis non fugit suscipit?</p>
                        </div>
                        <div className="center--blog">
                            <h5>Competitive prices</h5>
                            <div className="ratings">
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium temporibus, magni porro nulla ipsa! Quae in eum quia tempore.</p>
                        </div>
                        <div className="right--blog">
                            <h5>Great agents</h5>
                            <div className="ratings">
                                <span>⭐⭐⭐</span>
                            </div>
                            <p>Lorem adipisicing elit. Et ducimus natus nostrum fugiat quam tenetur provident veritatis deserunt inventore, dolorem earum, dolore mollitia asperiores a error odio. Enim, ipsa sequi?</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default About