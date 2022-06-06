import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Components/PurchasedBook.css';

const MyActivity = () => {
    return (
        <>
            <Header></Header>
            <div className="myactivity">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Condition</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Language</th>
                            <th>Purchase/Sale Date</th>
                            <th>Activity</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img className='myactivity--book--image' src="../images/books/Bhagvad Geeta.jpg" alt="" /></td>
                            <td>Bhagvad Geeta</td>
                            <td>Rama Krishna</td>
                            <td>New</td>
                            <td>Financial</td>
                            <td>250</td>
                            <td>English</td>
                            <td>10/02/2022</td>
                            <td>Purchased</td>
                        </tr>

                        <tr>
                            <td><img className='myactivity--book--image' src="../images/books/Atomic Habits.jpg" alt="" /></td>
                            <td>Atomic Habits</td>
                            <td>James Clear</td>
                            <td>Used</td>
                            <td>Financial</td>
                            <td>160</td>
                            <td>English</td>
                            <td>04/03/2022</td>
                            <td>Sold</td>
                        </tr>

                        <tr>
                            <td><img className='myactivity--book--image' src="../images/books/Laziness.jpg" alt="" /></td>
                            <td>Laziness does not exists</td>
                            <td>Devon Price</td>
                            <td>New</td>
                            <td>Financial</td>
                            <td>250</td>
                            <td>English</td>
                            <td>10/02/2022</td>
                            <td>Purchased</td>
                        </tr>

                        <tr>
                            <td><img className='myactivity--book--image' src="../images/books/rich dad poor dad.jpg" alt="" /></td>
                            <td>Rich Dad Poor Dad</td>
                            <td>Robert Kiyosaki</td>
                            <td>New</td>
                            <td>Financial</td>
                            <td>250</td>
                            <td>English</td>
                            <td>10/02/2022</td>
                            <td>Purchased</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </>
    )
}

export default MyActivity