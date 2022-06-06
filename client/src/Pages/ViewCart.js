import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../Components/ViewCart.css';

const ViewCart = () => {
    return (
        <>
            <Header></Header>
            <div className="viewcart">
                <div className="viewcart--content">
                    <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                    <p>Missing Cart Items?</p>
                    <span>Login to see the items you added previously</span><br /><br />
                    <Link className='viewcart-btn' to='/login'>Login</Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ViewCart