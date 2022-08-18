import API_URL from 'utils/api';
import { getCafeteriaFailure, getCafeteriaStart, getCafeteriaSuccess } from './cafeteriaSlice';

export const getAllCafeterias = async (dispatch) => {
    dispatch(getCafeteriaStart());
    try {
        const res = await API_URL.get('/cafeteria');
        dispatch(getCafeteriaSuccess(res.data.data));
        console.log(res);
    } catch (err) {
        dispatch(getCafeteriaFailure());
    }
};
