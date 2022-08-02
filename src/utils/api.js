/* eslint-disable prettier/prettier */
import axios from 'axios'
import store from '../store'
import { BASE_URL } from './config'
// import { LOGOUT } from '../redux/user/constants'

const api = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err)
    // if (err.response.status === 401) {
    //   store.dispatch({ type: LOGOUT })
    // }
    return Promise.reject(err)
  },
)

export default api
