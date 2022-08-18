import API_URL from 'utils/api';
import {
    addCategoryFailure,
    addCategoryStart,
    addCategorySuccess,
    deleteCategoryFailure,
    deleteCategoryStart,
    deleteCategorySuccess,
    getCategoryFailure,
    getCategoryStart,
    getCategorySuccess,
    updateCategoryFailure,
    updateCategoryStart,
    updateCategorySuccess
} from './categorySlice';

export const getAllCategories = async (dispatch) => {
    dispatch(getCategoryStart());
    try {
        const res = await API_URL.get('/category');
        dispatch(getCategorySuccess(res.data.data));
        console.log(res);
    } catch (err) {
        dispatch(getCategoryFailure());
    }
};

// Add New Category
export const addCategory = async (category, dispatch) => {
    dispatch(addCategoryStart());
    try {
        const res = await API_URL.post('/category', category);
        dispatch(addCategorySuccess(res.data.data));
    } catch (err) {
        dispatch(addCategoryFailure());
    }
};

// Delete Category
export const deleteCategory = async (id, dispatch) => {
    dispatch(deleteCategoryStart());
    try {
        const res = await API_URL.delete(`/category?id=${id}`);
        dispatch(deleteCategorySuccess(id));
    } catch (err) {
        dispatch(deleteCategoryFailure());
    }
};

// Update Category
export const updateCategory = async (id, data, dispatch) => {
    dispatch(updateCategoryStart());
    try {
        const res = await API_URL.put(`/category?id=${id}`, data);
        dispatch(updateCategorySuccess(res.data.data));
    } catch (err) {
        dispatch(updateCategoryFailure());
    }
};
