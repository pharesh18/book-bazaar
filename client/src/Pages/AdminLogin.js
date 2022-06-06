import React, { useState } from 'react';
import AdminHeader from '../Components/AdminHeader';
import '../Components/Login.css';

const AdminLogin = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user.email, user.password);
        setUser({ email: "", password: "" });
    }
    return (
        <>
            <AdminHeader></AdminHeader>
            <div className="login--main">
                <div className="login--container">
                    <a href=""><ion-icon name="return-up-back-sharp"></ion-icon></a>
                    <div className='login--text'>Login</div>
                    <div className="login">
                        <form action="" onSubmit={handleSubmit}>

                            <div className="login--inputBox input--email">
                                <div>
                                    <span><ion-icon name="mail-outline"></ion-icon></span>
                                    <input type="email" name='email' value={user.email} onChange={handleInput} placeholder='Email' autoComplete='off' required />
                                    <label htmlFor="">Email</label>

                                </div>
                            </div>
                            <div className="login--inputBox input--password">
                                <div>
                                    <span><ion-icon name="lock-closed-outline"></ion-icon></span>
                                    <input type="password" name='password' value={user.password} onChange={handleInput} placeholder='Password' autoComplete='off' required />
                                    <label htmlFor="">Password</label>
                                </div>
                            </div>

                            <a href="#"> Forgot password</a><br /><br /><br />

                            <button className='login--btn' style={{ marginBottom: "30px" }}>Login</button>

                            <span>Don't have an account yet?<a href="/adminsignup">Sign Up</a></span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
