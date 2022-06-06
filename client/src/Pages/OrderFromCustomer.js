import React from 'react';
import AdminHeader from '../Components/AdminHeader';
import '../Components/OrderFromCustomer.css';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardSidebar from '../Components/DashboardSidebar';

const OrderFromCustomer = () => {
    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="dashboard--container">
                        <div className='order--from--customer'>
                            <h2>Requests From Customers</h2>
                            <div className="order--container">
                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> Laziness does not exists</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Haresh Prajapati </span>
                                    </div>
                                    <div className="btns">
                                        <a href="/viewrequest"><button className='view'>View</button></a>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>

                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> Rich Dad Poor Dad</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Vishnu Prajapati </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>

                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> 2 States</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Vineet Gaur </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>

                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> Atomic Habits</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Dev Maheshvari </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>

                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> Bhagvad Geeta</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Vishal Yadav </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>


                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> Rich Dad Poor Dad </span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Haresh Prajapati </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>


                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> Laziness does not exist</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Meet Patel </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>


                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> Bhagvad Geeta</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Haresh Mistri </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>


                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span>Atomic Habits</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Ashish Prajapati </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>


                                <div className="order--row">
                                    <div className="details">
                                        <span style={{ marginRight: "20px", fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Book Name : </span> Laziness does not exists</span>
                                        <span style={{ fontSize: "18px" }}><span style={{ fontWeight: "600" }}> Customer Name :</span> Haresh Prajapati </span>
                                    </div>
                                    <div className="btns">
                                        <button className='view'>View</button>
                                        <button className='accept'>Accept</button>
                                        <button className='reject'>Reject</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <AdminHeader></AdminHeader> */}

        </>
    )
}

export default OrderFromCustomer