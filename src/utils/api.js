import axios from 'axios';
// import store from '../store';
// import { LOGOUT } from '../Redux/User/constants';
import { BASE_URL } from './config';
import { useDispatch } from 'react-redux';
// import { logout } from '../Redux/User/actions';
import { logout } from 'store/reducers/auth/authSlice';

// const api = axios.create({

//   baseURL: `${BASE_URL}/api/v1`,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     // if (err.response.status === 401) {
//     //   store.dispatch({ type: LOGOUT });
//     // }
//     return Promise.reject(err);
//   }
// );

// Default config options
const defaultOptions = {
    baseURL: `${BASE_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json'
    }
};

// Create instance
const API_URL = axios.create(defaultOptions);

// Set the AUTH token for any request
API_URL.interceptors.request.use(
    (response) => {
        const token = localStorage.getItem('token');
        response.headers.Authorization = token ? `Bearer ${token}` : '';
        return response;
    },
    (error) => {
        console.log(error);
        const dispatch = useDispatch();
        dispatch(logout());
    }
);

export default API_URL;
