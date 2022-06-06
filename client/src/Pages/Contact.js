import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Components/Contact.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        query: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const checkChecked = () => {
        const chkbox = document.getElementById("chkbox");
        if (chkbox.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // console.log(user);

            if (isChecked) {
                // const formData = new FormData();
                // formData.append('fname', user.fname);
                // formData.append('lname', user.lname);
                // formData.append('email', user.email);
                // formData.append('query', user.query);

                let fname = user.fname;
                let lname = user.lname;
                let email = user.email;
                let query = user.query;

                axios.post("http://localhost:8000/contact", {
                    fname,
                    lname,
                    email,
                    query,
                }).then(() => {
                    setUser({ fname: "", lname: "", email: "", query: "" });
                    document.getElementById("chkbox").checked = false;
                    setIsChecked(false);
                }).catch((err) => {
                    console.log(`Something went wrong, error occured : ${err}`);
                });
                toast.success("Your Message sent Successfully");
            } else {
                toast.warn("Agree our Terms and Conditions to Send us your message");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Header></Header>
            <div className='contact'>
                <div className='contact--info'>
                    <div className='contact-box'>
                        <div className='icon'><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className='text'>
                            <h4>Address</h4>
                            <p>Shop No 25,Chandralok<br /> Road, <br /> Near Pasu Bazaar, <br />Deesa - 385535</p>
                        </div>
                    </div>

                    <div className='contact-box'>
                        <div className='icon'><i class="fa fa-phone-square" aria-hidden="true"></i></div>
                        <div className='text'>
                            <h4>Phone.No</h4>
                            <p>+91 63520 24735 </p>
                        </div>
                    </div>

                    <div className='contact-box'>
                        <div className='icon'><i class="fa fa-envelope" aria-hidden="true"></i></div>
                        <div className='text'>
                            <h4>E-Mail</h4>
                            <p>bookbazaar@gmail.com</p>
                        </div>
                    </div>
                </div>


                <div className='contact--form'>
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <td><label>First Name</label></td>
                                <td><input type="text" name='fname' value={user.fname} onChange={handleInput} required /></td>
                            </tr>
                            <tr>
                                <td><label>Last Name</label></td>
                                <td><input type="text" name='lname' value={user.lname} onChange={handleInput} required /></td>
                            </tr>
                            <tr>
                                <td><label>E-Mail Address</label></td>
                                <td><input type="email" name='email' value={user.email} onChange={handleInput} required /></td>
                            </tr>
                            <tr>
                                <td><label>Your Query</label></td>
                                <td><textarea required name='query' value={user.query} onChange={handleInput} cols="25" rows="5"></textarea></td>
                            </tr>
                        </table>
                        <div>
                            <input id="chkbox" onClick={checkChecked} type="checkbox" name="" />
                            <span>By sending us query You agree to Terms & Conditions and Privary Policy</span><br />
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Contact