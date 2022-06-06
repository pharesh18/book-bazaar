import { combineReducers } from "redux";
import bookReducer from './bookReducer';
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './userReducers';

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

export const mainReducer = combineReducers({
    bookReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
});

export const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}