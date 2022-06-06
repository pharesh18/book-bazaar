import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Components/SignUp.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userAction';

const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        number: ""
    });

    const navigate = useNavigate();
    const userRegister = useSelector((state) => state.userRegister);

    const dispatch = useDispatch();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (user.password !== user.confirmPassword) {
                toast.warning("Password do not match");
            } else {
                dispatch(register(user.name, user.email, user.password, user.number, navigate));
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
                    <a href="/"><ion-icon name="return-up-back-sharp"></ion-icon></a>
                    <div className='signup--text'>Sign up</div>
                    <div className="signup">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <div>
                                    <span><ion-icon name="person-outline"></ion-icon></span>
                                    <input type="text" name='name' value={user.name} onChange={handleInput} placeholder='Name' autoComplete='off' required />
                                    <label htmlFor="">Name</label>
                                </div>
                            </div>
                            <div className="inputBox input--email">
                                <div>
                                    <span><ion-icon name="mail-outline"></ion-icon></span>
                                    <input type="email" name='email' value={user.email} onChange={handleInput} placeholder='Email' autoComplete='off' required />
                                    <label htmlFor="">Email</label>

                                </div>
                            </div>
                            <div className="inputBox input--password">
                                <div>
                                    <span><ion-icon name="lock-closed-outline"></ion-icon></span>
                                    <input type="password" name='password' value={user.password} onChange={handleInput} placeholder='Password' autoComplete='off' required />
                                    <label htmlFor="">Password</label>
                                </div>
                            </div>
                            <div className="inputBox input--confirm--password">
                                <div>
                                    <span><ion-icon name="lock-closed-outline"></ion-icon></span>
                                    <input type="password" name='confirmPassword' value={user.confirmPassword} onChange={handleInput} placeholder='Confirm Password' autoComplete='off' required />
                                    <label htmlFor="">Confirm Password</label>
                                </div>
                            </div>
                            <div className="inputBox">
                                <div>
                                    <span><ion-icon name="call-outline"></ion-icon></span>
                                    <input type="number" name='number' value={user.number} onChange={handleInput} placeholder='Mobile Number' autoComplete='off' required />
                                    <label htmlFor="">Number</label>
                                </div>
                            </div>

                            <button className='signup--btn'>Sign Up</button><br />

                            <span>Already have an account?<Link to="/login">Log in</Link></span>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignUp