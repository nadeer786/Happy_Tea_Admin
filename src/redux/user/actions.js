/* eslint-disable prettier/prettier */
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import api from '../../utils/api'
// import { setAlert } from "../Alert/actions";
// import axios from 'axios'
import { LOGIN_SUCCESS, LOGIN_FAIL, LOAD_USER } from './constants'

// Login User
export const login = (username, password) => async (dispatch, getState) => {
  const body = { username, password }

  try {
    const res = await api.post('/auth/login', body)
    localStorage.setItem('token', res.data.token)
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })

    dispatch(loadUser())
  } catch (err) {
    localStorage.removeItem('token')
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth/me')
    console.log("loadUser",res);
    dispatch({
      type: LOAD_USER,
      payload: res.data.data,
    })
  } catch (err) {
    localStorage.removeItem('token')
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

// Logout
export const logout = () => (dispatch) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  ;<Navigate to="/" />
  localStorage.removeItem('token')
  dispatch({
    type: LOGIN_FAIL,
  })
}
