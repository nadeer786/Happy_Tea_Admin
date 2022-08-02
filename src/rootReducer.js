/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux'
import theme from './redux/theme/reducer'
import auth from './redux/user/reducers'
// import auth from './Redux/User/reducer'

export default combineReducers({
  theme,
  auth,
})
