import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../Components/AdminHeader';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardSidebar from '../Components/DashboardSidebar';
import '../Components/Orders.css';

const Orders = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:8000/order`);
        // console.log(response.data);
        setData(data => response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleClick = async (_id, bimage, bname, bauthor, cname, ccity, caddress, ccontact, cemail, bcondition, bcategory, bprice, blanguage) => {
        axios.post("http://localhost:8000/order/sold", {
            bimage, bname, bauthor, cname, ccity, caddress, ccontact, cemail, bcondition, bcategory, bprice, blanguage
        });

        const resp = await axios.delete(`http://localhost:8000/order/${_id}`);
        setTimeout(() => {
            loadData();
        }, 0);
    }
    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="dashboard--container">
                        <div className="orders">
                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Book Name</th>
                                        <th scope="col">Author Name</th>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Contact No</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Condition</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Language</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope="col">Verify order</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {data.map((item) => {
                                        const imagePath = `http://localhost:8000/public/images/${item.bimage}`;
                                        return (
                                            <tr key={item._id}>
                                                <td scope="row"><img className='orders--book--image' src={imagePath} alt="" /></td>
                                                <td>{item.bname}</td>
                                                <td>{item.bauthor}</td>
                                                <td>{item.cname}</td>
                                                <td>{item.ccity}</td>
                                                <td>{item.caddress}</td>
                                                <td>{item.ccontact}</td>
                                                <td>{item.cemail}</td>
                                                <td>{item.bcondition}</td>
                                                <td>{item.bcategory}</td>
                                                <td>{item.bprice}</td>
                                                <td>{item.blanguage}</td>
                                                {item.paymentStatus ? <td>Paid</td> : <td>Pending</td>}
                                                <td><button className='btn btn-secondary' onClick={() => handleClick(item._id, item.bimage, item.bname, item.bauthor, item.cname, item.ccity, item.caddress, item.ccontact, item.cemail, item.bcondition, item.bcategory, item.bprice, item.blanguage)}>Click</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* <AdminHeader></AdminHeader> */}
        </>
    )
}

export default Orders