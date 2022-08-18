import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// material-ui
import { Typography, Box, Stack, Avatar, Grid, IconButton, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// AntD Icons
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';
import { getProductById, getProducts } from 'store/reducers/product/productService';

// ==============================|| PRODUCT PAGE ||============================== //

const ProductsList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productSlice);

    // Edit product
    // Edit Product
    const handleEditProduct = (product) => {
        navigate(`/dashboard/products/edit/${product}`);
        if (product) {
            getProductById(dispatch, product);
        }
    };

    // DataGrid columns definition
    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'product',
            headerName: 'PRODUCT',
            width: 200,
            renderCell: (params) => {
                return (
                    <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt="product" src={params.row.image} />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                            {params.row.name}
                        </Typography>
                    </Grid>
                );
            }
        },
        { field: 'category', headerName: 'Category', width: 200 },

        { field: 'active', headerName: 'STOCK', width: 200 },
        {
            field: 'price',
            headerName: 'PRICE',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <Grid sx={{ dispaly: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton color="primary" size="medium" variant="contained" onClick={() => handleEditProduct(params.row._id)}>
                            {/* <Link to={'/dashboard/product/add-or-edit/' + params.row._id}> */}
                            <EditOutlined />
                            {/* </Link> */}
                        </IconButton>
                        <IconButton color="error" size="medium" variant="contained">
                            <DeleteOutlined />
                        </IconButton>
                    </Grid>
                );
            }
        }
    ];
    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);
    return (
        <MainCard title="Products">
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button variant="contained" color="primary" startIcon={<PlusOutlined />} component={Link} to="add">
                    Add Product
                </Button>
            </Box>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    sx={{ fontSize: '14px' }}
                    columns={columns}
                    rows={products}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    getRowId={(row) => row._id}
                    disableSelectionOnClick
                />
            </Box>
        </MainCard>
    );
};

export default ProductsList;
