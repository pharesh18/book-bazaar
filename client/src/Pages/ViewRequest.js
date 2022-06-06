import React from 'react';
import '../Components/ViewRequest.css';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardSidebar from '../Components/DashboardSidebar';

const ViewRequest = () => {
    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="view--request">
                        <p>View Book</p>
                        <h3>Book Details</h3>
                        <div className="view--request--container">
                            <div className="view--request--image">
                                <img src="../images/books/Bhagvad Geeta.jpg" alt="" />
                            </div>
                            <div className="view--request--details">
                                <span><strong>Name : </strong>Laziness does not exists</span>
                                <span><strong>Author : </strong>Devon Price</span>
                                <span><strong>About Book : </strong>Boook is based Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates vel nihil temporibus dolores maiores?</span>
                                <span><strong>Condition : </strong>Used</span>
                                <span><strong>Category : </strong>Financial</span>
                                <span><strong>Price : </strong>250/-</span>
                                <span><strong>Language : </strong>English</span>
                            </div>
                        </div><hr />

                        <div className="personal--details">
                            <h3>Personal Details</h3>
                            <span><strong>Name : </strong>Haresh Prajapati</span>
                            <span><strong>Email : </strong>user@gmail.com</span>
                            <span><strong>Contact No : </strong>+91 1234567890</span>
                            <span><strong>Gender : </strong>Male</span>
                            <span><strong>City : </strong>Deesa</span>
                            <span><strong>Address : </strong>Gayatri Society, Opposite of Bus station, Deesa - 380009</span>
                        </div>

                        <div className='back'>
                            <a href="/">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewRequest