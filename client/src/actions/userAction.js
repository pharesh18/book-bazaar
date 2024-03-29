import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS
} from '../constants/userConstant';

export const logout = () => dispatch => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT })
}

export const login = (email, password, navigate) => async dispatch => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post('http://localhost:8000/user/login', { email, password, config });
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        toast.success("Welcome to BookBazaar");
        navigate('/');
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
        toast.error("Invalid Email or Password");
    }
}




export const register = (name, email, password, number, navigate) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post('http://localhost:8000/user', { name, email, password, number, config });
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        toast.success("Signed up Successfully");
        navigate('/login');
        // localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
        toast.error("Oops!.. Email already exists");
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } };
        const { data } = await axios.get(`http://localhost:8000/user/${id}`, config);
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}


export const updateUserProfile = (user, navigate) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        });

        const {
            userLogin: { userInfo }
        } = getState();
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } };
        const { data } = await axios.put('http://localhost:8000/user/profile', user, config);

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })
        toast.success("Profile Data Updated Successfully..");
        navigate('/');
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
        toast.error("Oops!.. Email Already Exists");
    }
}