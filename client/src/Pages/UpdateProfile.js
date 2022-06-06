import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Components/SignUp.css';
// import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { createUser } from '../actions/userAction';
import { Link } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from '../actions/userAction';
// import DashboardHeader from '../Components/DashboardHeader';
// import DashboardSidebar from '../Components/DashboardSidebar';

const UpdateProfile = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        number: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const userDetails = useSelector((state) => state.userDetails);
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, user } = userDetails;
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setUserData({ name: user.name, email: user.email, number: user.number });
                // console.log(user.name, user.email, user.password, user.number);
            }
        }
    }, [navigate, userInfo, user, dispatch]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { name, email, password, confirmPassword, number } = userData;
            // console.log(name, email, password, number);
            if (password !== confirmPassword) {
                toast.warning("Password do not match");
            } else {
                dispatch(updateUserProfile({ id: user._id, name, email, password, number }, navigate));
                // setUserData({
                //     name: "",
                //     email: "",
                //     password: "",
                //     confirmPassword: "",
                //     number: ""
                // });

            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <Header></Header>
            <div className="signup--main">
                <div className="signup--container">
                    <a href=""><ion-icon name="return-up-back-sharp"></ion-icon></a>
                    <div className='signup--text'>Edit Profile Details</div>
                    <div className="signup">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <div>
                                    <span><ion-icon name="person-outline"></ion-icon></span>
                                    <input type="text" name='name' value={userData.name} onChange={handleInput} placeholder='Name' autoComplete='off' required />
                                    <label htmlFor="">Name</label>
                                </div>
                            </div>
                            <div className="inputBox input--email">
                                <div>
                                    <span><ion-icon name="mail-outline"></ion-icon></span>
                                    <input type="email" name='email' value={userData.email} onChange={handleInput} placeholder='Email' autoComplete='off' required />
                                    <label htmlFor="">Email</label>

                                </div>
                            </div>
                            <div className="inputBox input--password">
                                <div>
                                    <span><ion-icon name="lock-closed-outline"></ion-icon></span>
                                    <input type="password" name='password' value={userData.password} onChange={handleInput} placeholder='Password' autoComplete='off' required />
                                    <label htmlFor="">Password</label>
                                </div>
                            </div>
                            <div className="inputBox input--confirm--password">
                                <div>
                                    <span><ion-icon name="lock-closed-outline"></ion-icon></span>
                                    <input type="password" name='confirmPassword' value={userData.confirmPassword} onChange={handleInput} placeholder='Confirm Password' autoComplete='off' required />
                                    <label htmlFor="">Confirm Password</label>
                                </div>
                            </div>
                            <div className="inputBox">
                                <div>
                                    <span><ion-icon name="call-outline"></ion-icon></span>
                                    <input type="number" name='number' value={userData.number} onChange={handleInput} placeholder='Mobile Number' autoComplete='off' required />
                                    <label htmlFor="">Number</label>
                                </div>
                            </div>

                            <button className='signup--btn'>Update</button><br />
                            {/* <span>Already have an account?<Link to="/login">Log in</Link></span> */}
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default UpdateProfile