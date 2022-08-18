// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu/menu';
import authSlice from './auth/authSlice';
import productSlice from './product/productSlice';
import categorySlice from './category/categorySlice';
import cafeteriaSlice from './cafeteria/cafeteriaSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, authSlice, productSlice, categorySlice, cafeteriaSlice });

export default reducers;
