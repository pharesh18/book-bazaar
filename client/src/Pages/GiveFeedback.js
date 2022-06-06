import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AdminHeader from '../Components/AdminHeader';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardSidebar from '../Components/DashboardSidebar';
import '../Components/GiveFeedback.css';

const GiveFeedback = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const [resp, setResp] = useState({
        response: "",
    });

    const navigate = useNavigate();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setResp({ ...resp, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Response Submitted");
        navigate('/feedback')
    }

    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="dashboard--container">
                        <div className="give--feedback">
                            <form onSubmit={handleSubmit} action="">
                                <h2>Give Feedback</h2>
                                <textarea placeholder='Enter Feedback' name='response' value={resp.response} onChange={handleInput} id="" cols="30" rows="10"></textarea>
                                <button className='btn btn-success'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <AdminHeader></AdminHeader> */}
        </>
    )
}

export default GiveFeedback