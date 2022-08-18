import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        isFetching: false,
        error: false
    },
    reducers: {
        //GET ALL
        getCategoryStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getCategorySuccess: (state, action) => {
            state.isFetching = false;
            state.categories = action.payload;
        },
        getCategoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // ADD NEW CATEGORY
        addCategoryStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addCategorySuccess: (state, action) => {
            state.isFetching = false;
            state.categories.push(action.payload);
        },
        addCategoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // DELETE CATEGORY
        deleteCategoryStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteCategorySuccess: (state, action) => {
            state.isFetching = false;
            state.categories.splice(
                state.categories.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteCategoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // UPDATE CATEGORY
        updateCategoryStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateCategorySuccess: (state, action) => {
            state.isFetching = false;
            state.categories[state.categories.findIndex((item) => item._id === action.payload.id)] = action.payload.category;
        },
        updateCategoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const {
    getCategoryStart,
    getCategorySuccess,
    getCategoryFailure,
    addCategoryStart,
    addCategorySuccess,
    addCategoryFailure,
    deleteCategoryStart,
    deleteCategorySuccess,
    deleteCategoryFailure,
    updateCategoryStart,
    updateCategorySuccess,
    updateCategoryFailure
} = categorySlice.actions;

export default categorySlice.reducer;
