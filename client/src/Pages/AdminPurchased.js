import React from 'react';
import AdminHeader from '../Components/AdminHeader';
import '../Components/AdminPurchased.css';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardSidebar from '../Components/DashboardSidebar';

const AdminPurchased = () => {
    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <div className="dashboard--container">
                        <div className="admin--purchased">
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
                                        <th scope="col">Purchased Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td scope="row"><img className='purchased--book--image' src="../images/books/Bhagvad Geeta.jpg" alt="" /></td>
                                        <td>Bhagvad Geeta</td>
                                        <td>Rama Krishna</td>
                                        <td>Haresh Prajapati</td>
                                        <td>Deesa</td>
                                        <td>Gayatri Society, Near Rakheval Press, Deesa - 385585</td>
                                        <td>2345678901</td>
                                        <td>user@gmail.com</td>
                                        <td>New</td>
                                        <td>Financial</td>
                                        <td>250</td>
                                        <td>English</td>
                                        <td>10/02/2022</td>
                                    </tr>

                                    <tr>
                                        <td scope="row"><img className='purchased--book--image' src="../images/books/2 States.jpg" alt="" /></td>
                                        <td>2 States</td>
                                        <td>Chetan Bhagat</td>
                                        <td>Haresh Prajapati</td>
                                        <td>Deesa</td>
                                        <td>Gayatri Society, Near Rakheval Press, Deesa - 385585</td>
                                        <td>2345678901</td>
                                        <td>user12@gmail.com</td>
                                        <td>New</td>
                                        <td>Financial</td>
                                        <td>250</td>
                                        <td>English</td>
                                        <td>10/02/2022</td>
                                    </tr>

                                    <tr>
                                        <td scope="row"><img className='purchased--book--image' src="../images/books/laziness.jpg" alt="" /></td>
                                        <td>Laziness does not exists</td>
                                        <td>Devon Price</td>
                                        <td>Haresh Prajapati</td>
                                        <td>Deesa</td>
                                        <td>Gayatri Society, Near Rakheval Press, Deesa - 385585</td>
                                        <td>2345678901</td>
                                        <td>user@gmail.com</td>
                                        <td>New</td>
                                        <td>Financial</td>
                                        <td>250</td>
                                        <td>English</td>
                                        <td>10/02/2022</td>
                                    </tr>

                                    <tr>
                                        <td scope="row"><img className='purchased--book--image' src="../images/books/rich dad poor dad.jpg" alt="" /></td>
                                        <td>Rich Dad Poor Dad</td>
                                        <td>Robert Kiyosaki</td>
                                        <td>Haresh Prajapati</td>
                                        <td>Deesa</td>
                                        <td>Gayatri Society, Near Rakheval Press, Deesa - 385585</td>
                                        <td>2345678901</td>
                                        <td>user@gmail.com</td>
                                        <td>New</td>
                                        <td>Financial</td>
                                        <td>250</td>
                                        <td>English</td>
                                        <td>10/02/2022</td>
                                    </tr>

                                    <tr>
                                        <td scope="row"><img className='purchased--book--image' src="../images/books/Atomic Habits.jpg" alt="" /></td>
                                        <td>Atomic Habits</td>
                                        <td>James Clear</td>
                                        <td>Haresh Prajapati</td>
                                        <td>Deesa</td>
                                        <td>Gayatri Society, Near Rakheval Press, Deesa - 385585</td>
                                        <td>2345678901</td>
                                        <td>user@gmail.com</td>
                                        <td>New</td>
                                        <td>Financial</td>
                                        <td>250</td>
                                        <td>English</td>
                                        <td>10/02/2022</td>
                                    </tr>
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

export default AdminPurchased