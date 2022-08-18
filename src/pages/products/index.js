import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import ProductsList from './ProductsList';

// Store imports
import { getProducts } from 'store/reducers/product/productService';
import { getAllCategories } from 'store/reducers/category/categoryService';

const Products = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     getProducts(dispatch);
    // }, [dispatch]);
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <ProductsList />
            </Grid>
        </Grid>
    );
};

export default Products;
