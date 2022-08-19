import React from 'react';
import { useEffect } from 'react';

// MUI imports
import { Grid, Typography, Card, IconButton, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// AntD Icons
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// Store imports
import { useDispatch, useSelector } from 'react-redux';
import { getAllCafeterias } from 'store/reducers/cafeteria/cafeteriaService';

const CafeteriaList = () => {
    const dispatch = useDispatch();
    const { cafeterias } = useSelector((state) => state.cafeteriaSlice);
    console.log(cafeterias);
    // DataGrid columns definition
    const columns = [
        { field: 'name', headerName: 'CAFETERIA NAME', width: 250, headerClassName: 'tbl-header', headerAlign: 'start' },
        { field: 'mobile', headerName: 'PHONE', width: 250, headerClassName: 'tbl-header', headerAlign: 'start' },
        {
            field: 'address',
            headerName: 'ADDRESS',
            width: 350,
            headerClassName: 'tbl-header',
            headerAlign: 'start'
        },
        {
            field: 'action',
            headerName: 'ACTIONS',
            width: 334,
            headerClassName: 'tbl-header',
            headerAlign: 'start',
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
        getAllCafeterias(dispatch);
    }, [dispatch]);
    return (
        <Grid>
            <Card>
                <Box
                    sx={{
                        height: 400,
                        width: '100%',
                        '& .tbl-header': {
                            backgroundColor: '#e6f7ff'
                        }
                    }}
                >
                    <DataGrid
                        sx={{ fontSize: '14px' }}
                        columns={columns}
                        rows={cafeterias}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        getRowId={(row) => row._id}
                        disableSelectionOnClick
                    />
                </Box>
            </Card>
        </Grid>
    );
};

export default CafeteriaList;
