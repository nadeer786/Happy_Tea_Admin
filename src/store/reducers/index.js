// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu/menu';
import authSlice from './auth/authSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, authSlice });

export default reducers;
