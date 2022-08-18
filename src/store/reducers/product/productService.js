import API_URL from 'utils/api';
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
    getProductByIdStart,
    getProductByIdSuccess,
    getProductByIdFailure
} from './productSlice';

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await API_URL.get('/product');
        dispatch(getProductSuccess(res.data.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};
// Get Product By Id
export const getProductById = async (dispatch, id) => {
    dispatch(getProductByIdStart());
    try {
        const res = await API_URL.get(`/product/${id}`);
        dispatch(getProductByIdSuccess(res.data.data));
    } catch (err) {
        dispatch(getProductByIdFailure());
    }
};

// export const deleteProduct = async (id, dispatch) => {
//     dispatch(deleteProductStart());
//     try {
//         // const res = await userRequest.delete(`/products/${id}`);
//         dispatch(deleteProductSuccess(id));
//     } catch (err) {
//         dispatch(deleteProductFailure());
//     }
// };

// export const updateProduct = async (id, product, dispatch) => {
//     dispatch(updateProductStart());
//     try {
//         // update
//         dispatch(updateProductSuccess({ id, product }));
//     } catch (err) {
//         dispatch(updateProductFailure());
//     }
// };
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await API_URL.post(`/product`, product);
        dispatch(addProductSuccess(res.data));
        if (res.status === 201) {
            getProducts(dispatch);
        }
    } catch (err) {
        dispatch(addProductFailure());
    }
};
