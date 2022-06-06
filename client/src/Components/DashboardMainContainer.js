import React, { useEffect, useState } from 'react'
import axios from 'axios';
const DashboardMainContainer = () => {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([]);
    const [orders, setOrders] = useState([]);

    let cntr = 0;
    const loadData = async () => {
        const response = await axios.get("http://localhost:8000/user/getUsers");
        setUsers(users => response.data);

        const resp = await axios.get(`http://localhost:8000/order/sold`);
        setData(data => resp.data);

        const orderData = await axios.get(`http://localhost:8000/order`);
        setOrders(orders => orderData.data);
    }


    // console.log(users.length);
    useEffect(() => {
        loadData();
    }, [])
    return (
        <div className="dashboard--container">
            <div className="container--row">
                <div className="row--content">
                    <img src="../images/multiple-user.png" alt="" />
                    <div className="details">
                        <h5>{users.length - 1}</h5>
                        <span>Total Users</span>
                    </div>
                </div>

                <div className="row--content">
                    <img src="../images/cart.png" alt="" />
                    <div className="details">
                        <h5>{orders.length}</h5>
                        <span>Total Orders</span>
                    </div>
                </div>

                <div className="row--content">
                    <img src="../images/dollar.png" alt="" />
                    <div className="details">
                        <h5>{data.length}</h5>
                        <span>Sold Books</span>
                    </div>
                </div>

                <div className="row--content">
                    <img src="../images/basket.png" alt="" />
                    <div className="details">
                        <h5>5</h5>
                        <span>Purchased Books</span>
                    </div>
                </div>
            </div>

            <div className="dashboard--bg">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                            <th scope="col">User Contact</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((item) => {
                            if (item.isAdmin != true) {
                                cntr++;
                                return (
                                    <tr>
                                        <th scope="row">{cntr}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.number}</td>
                                    </tr>
                                )
                            }
                        })}

                    </tbody>
                </table>
            </div>
            {/* <AdminHome></AdminHome> */}
        </div>
    )
}

export default DashboardMainContainer