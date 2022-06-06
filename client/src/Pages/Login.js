import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/userAction';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Components/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) { navigate('/') }
    }, [navigate, userInfo]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(user.email, user.password, navigate));
        // setUser({ email: "", password: "" });
    }
    return (
        <>
            <Header></Header>
            {/* {loading && toast.loading('Loading...')}
            {error && toast.error('Wrong Email or Password')} */}
            <div className="login--main">
                <div className="login--container">
                    <a href="/"><ion-icon name="return-up-back-sharp"></ion-icon></a>
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

                            <span>Don't have an account yet?<Link to="/signup">Sign Up</Link></span>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
