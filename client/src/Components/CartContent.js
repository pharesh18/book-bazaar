import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

let totalCost = 550;

const CartContent = (props) => {
    var [total, setTotal] = useState(0);
    const id = props.id;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const { _id } = userInfo;

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:8000/cart/getcart`);
        // console.log(response.data);
        setData(data => response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleRemove = async (id) => {
        if (window.confirm("Are you sure you want to remove this item from the cart ? ")) {
            console.log(id);
            const resp = await axios.delete(`http://localhost:8000/cart/remove/${id}`);
            console.log("remove callled");
            setTimeout(() => {
                loadData();
            }, 0);
        }
    }

    return (
        <div className='cart--content'>
            <div className="products--container">
                <div className="header">
                    <h2>My Cart</h2>
                </div>
                {data.map((item) => {
                    const imagePath = `http://localhost:8000/public/images/${item.bimage}`;
                    {/* totalCost = totalCost + item.bprice; */ }
                    if (item.User == _id) {
                        return (
                            <div key={item._id} className="product--row">
                                <div className="cart--product--container">
                                    <div className="cart--image">
                                        <img src={imagePath} alt="" />
                                    </div>
                                    <div className="inc--dec">
                                        <button className='btn btn-light'>-</button>
                                        <div>1</div>
                                        <button className='btn btn-light'>+</button>
                                    </div>
                                </div>

                                <div className="product--details">
                                    <div className="details">
                                        <h5>{item.bname} by {item.bauthor}</h5>
                                        <p>{item.bdescription}</p>

                                        <p>{item.bauthordescription}</p>

                                        <p>{item.blanguage} Language Book | Paperback | {item.bpages} Pages </p>

                                        <h4>₹{item.bprice}</h4>
                                    </div>
                                    <div className="cart--btns">
                                        <a href={`/checkout/${item.Book}`} className='btn btn-primary buy-now'>Buy Now</a>
                                        <button onClick={() => handleRemove(item._id)} className='btn btn-danger remove'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

            </div>

            <div className="price--container">
                <h3>Price</h3>
                <p>Total products: <strong>{data.length}</strong></p>
                <p>Total price: <strong>₹{totalCost}</strong></p>
                {/* <a href="/checkout"><button>Proceed to checkout</button></a> */}
            </div>
        </div>
    );
};

export default CartContent;
