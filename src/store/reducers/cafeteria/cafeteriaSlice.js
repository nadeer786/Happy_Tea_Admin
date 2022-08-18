import { createSlice } from '@reduxjs/toolkit';

export const cafeteriaSlice = createSlice({
    name: 'cafeteria',
    initialState: {
        cafeterias: [],
        isFetching: false,
        error: false
    },
    reducers: {
        //GET ALL
        getCafeteriaStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getCafeteriaSuccess: (state, action) => {
            state.isFetching = false;
            state.cafeterias = action.payload;
        },
        getCafeteriaFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { getCafeteriaStart, getCafeteriaSuccess, getCafeteriaFailure } = cafeteriaSlice.actions;

export default cafeteriaSlice.reducer;
