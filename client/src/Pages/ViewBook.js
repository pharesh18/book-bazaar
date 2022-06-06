import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Components/ViewBook.css';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardSidebar from '../Components/DashboardSidebar';

const ViewBook = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/book/${id}`).then((resp) => setUser({ ...resp.data }));
    }, [id]);

    const imagePath = `http://localhost:8000/public/images/${user.bimage}`;
    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="view--book">
                        <p>View Book</p>
                        <div className="view--container">
                            <div className="view--image">
                                <img src={imagePath} alt="" />
                            </div>
                            <div className="view--details">
                                <span><strong>Name : </strong>{user.bname}</span>
                                <span><strong>Author : </strong>{user.bauthor}</span>
                                <span><strong>About Book : </strong>{user.bdescription}</span>
                                <span><strong>About Author : </strong>{user.bauthordescription}</span>
                                <span><strong>Publisher : </strong>{user.bpublisher}</span>
                                <span><strong>ISBN : </strong>{user.bisbn}</span>
                                <span><strong>Edition : </strong>{user.bedition}</span>
                                <span><strong>Condition : </strong>{user.bcondition}</span>
                                <span><strong>Category : </strong>{user.bcategory}</span>
                                <span><strong>Price : </strong>₹{user.bprice}</span>
                                <span><strong>Language : </strong>{user.blanguage}</span>
                                <span><strong>Pages : </strong>{user.bpages}</span>
                            </div>
                        </div>

                        <div className='back'>
                            <a href="/books">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBook