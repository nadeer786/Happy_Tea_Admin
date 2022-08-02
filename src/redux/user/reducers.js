import { LOGIN_SUCCESS, LOGIN_FAIL, LOAD_USER } from './constants'

const token = localStorage.getItem('token')

const initialState = {
  token: token ? token : null,
  loginSuccess: false,
  loading: false,
  user: {},
}

export default function auth(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        loginSuccess: true,
        loading: false,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        loading: false,
        loginSuccess: false,
        user: {},
      }
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        loginSuccess: true,
        loading: false,
      }

    default:
      return state
  }
}
