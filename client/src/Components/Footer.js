import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer--row">
                <div className="about">
                    <h4>About</h4>
                    <Link to="/about" style={{ color: "#fff", fontSize: "18px" }}><span>About Us</span></Link>
                    <Link to="/contact" style={{ color: "#fff", fontSize: "18px" }}><span>Contact Us</span></Link>
                </div>

                <div className="help">
                    <h4>Help</h4>
                    <span>Payment</span>
                    <span>Shipping</span>
                </div>

                <div className="social">
                    <h4>Social</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                </div>

                <div className="mail">
                    <h4>Mail Us</h4>
                    <a href="#">bookbazaar@gmail.com</a>
                </div>
            </div>

            <div className="copyright">
                <span>© 20016-2022 Book Bazzar.com</span>
            </div>
        </div>
    );
};

export default Footer;
