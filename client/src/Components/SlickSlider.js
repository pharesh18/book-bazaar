import React from 'react';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import './SlickSlider.css';


const SlickSlider = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "block", background: "rgb(150, 150, 150)", borderRadius: "5px", width: "30px", height: "40px", paddingTop: "10px", paddingLeft: "5px", position: "absolute", top: "50%", right: "-30px" }}
                style={{ ...style, display: "block", background: "rgb(150, 150, 150)", borderRadius: "5px", width: "30px", height: "40px", paddingTop: "10px", paddingLeft: "5px", top: "50%", right: "-30px" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "block", background: "rgb(150, 150, 150)", borderRadius: "5px", width: "30px", height: "40px", paddingTop: "10px", paddingLeft: "5px", position: "absolute", top: "50%", left: "-30px" }}
                style={{ ...style, display: "block", background: "rgb(150, 150, 150)", borderRadius: "5px", width: "30px", height: "40px", paddingTop: "10px", paddingLeft: "5px", position: "absolute", top: "50%", left: "-30px" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='slider--book--row'>
            <Slider {...settings}>
                <div>
                    <div className="book--container">
                        <div className="book--image">
                            <img src="../images/books/Bhagvad Geeta.jpg" alt="" />
                        </div>
                        <div className="book--details">
                            <span>Bhagvad Geeta </span>
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="book--container">
                        <div className="book--image">
                            <img src="../images/books/Bhagvad Geeta.jpg" alt="" />
                        </div>
                        <div className="book--details">
                            <span>Bhagvad Geeta </span>
                            <span>⭐⭐⭐⭐<i class="fas fa-star-half-alt"></i></span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="book--container">
                        <div className="book--image">
                            <img src="../images/books/Bhagvad Geeta.jpg" alt="" />
                        </div>
                        <div className="book--details">
                            <span>Laziness does not exists </span>
                            <span>⭐⭐⭐⭐<i class="fas fa-star-half-alt"></i></span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="book--container">
                        <div className="book--image">
                            <img src="../images/books/Bhagvad Geeta.jpg" alt="" />
                        </div>
                        <div className="book--details">
                            <span>Bhagvad Geeta </span>
                            <span>⭐⭐⭐⭐<i class="fas fa-star-half-alt"></i></span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="book--container">
                        <div className="book--image">
                            <img src="../images/books/Bhagvad Geeta.jpg" alt="" />
                        </div>
                        <div className="book--details">
                            <span>Laziness Does not exists </span>
                            <span>⭐⭐⭐⭐<i class="fas fa-star-half-alt"></i></span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="book--container">
                        <div className="book--image">
                            <img src="../images/books/Bhagvad Geeta.jpg" alt="" />
                        </div>
                        <div className="book--details">
                            <span>Bhagvad Geeta </span>
                            <span>⭐⭐⭐⭐<i class="fas fa-star-half-alt"></i></span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="book--container">
                        <div className="book--image">
                            <img src="../images/books/Bhagvad Geeta.jpg" alt="" />
                        </div>
                        <div className="book--details">
                            <span>Laziness was Does not exists </span>
                            <span>⭐⭐⭐⭐<i class="fas fa-star-half-alt"></i></span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SlickSlider;
