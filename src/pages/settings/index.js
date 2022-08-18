import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import CategoryForm from './components/CategoryForm';

// Store Imports
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategories } from '../../store/reducers/category/categoryService';

const Settings = () => {
    return (
        <>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5">Settings</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ mt: 3 }}>
                <Grid item xs={6}>
                    <CategoryForm />
                </Grid>
            </Grid>
        </>
    );
};

export default Settings;
