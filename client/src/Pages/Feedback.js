import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminHeader from '../Components/AdminHeader';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardSidebar from '../Components/DashboardSidebar';
import '../Components/Feedback.css';

const Feedback = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:8000/contact`);
        // console.log(response.data);
        setData(data => response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async (_id) => {
        if (window.confirm("Are you sure you want to close this contact ? ")) {
            const resp = await axios.delete(`http://localhost:8000/contact/${_id}`);
            setTimeout(() => {
                loadData();
            }, 0);
        }
    }
    return (
        <>
            {/* <AdminHeader></AdminHeader> */}
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="dashboard--container">
                        <div className="feedback">
                            {data.map((item) => {
                                return (
                                    <div key={item._id} className="feedback--container">
                                        <div className="user--details">
                                            <div className="icon">
                                                <p onClick={() => handleDelete(item._id)}><ion-icon name="close-outline"></ion-icon></p>
                                            </div>
                                            <span><strong>Name : </strong>{item.fname} {item.lname}</span>
                                            <span><strong>Email : </strong>{item.email}</span>
                                            <span><strong>Query : </strong>{item.query}</span>
                                        </div>
                                        <a href={`/givefeedback/${item._id}`}><button>Give Feedback</button></a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Feedback