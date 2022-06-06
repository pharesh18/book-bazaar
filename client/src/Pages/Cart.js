import React from 'react';
import { useParams } from 'react-router-dom';
import CartContent from '../Components/CartContent';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Cart = () => {
    const { id } = useParams();
    return (
        <>
            <Header></Header>
            <CartContent id={id} ></CartContent>
            <Footer></Footer>
        </>
    );
};

export default Cart;
