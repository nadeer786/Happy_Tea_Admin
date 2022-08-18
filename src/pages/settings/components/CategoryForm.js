import React, { useEffect, useState } from 'react';

// MUI Components
import { Grid, Typography, TextField, Button, Divider, Card, IconButton } from '@mui/material';

// Ant Design Icons
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// Local Components
import MainCard from 'components/MainCard';
import CategoryList from './CategoryList';

// Store Imports
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategories } from '../../../store/reducers/category/categoryService';

const CategoryForm = () => {
    const dispatch = useDispatch();

    // UseState Hooks
    const [category, setCategory] = useState({
        name: ''
    });
    const [errorText, setErrorText] = useState('');
    // Component Functions
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (category.name.length < 1) {
            setErrorText('Category name is required');
        } else {
            await addCategory(category, dispatch);
            setCategory({
                name: ''
            });
            setErrorText('');
        }
    };

    useEffect(() => {
        getAllCategories(dispatch);
    }, [dispatch]);
    return (
        <MainCard title="Create Category">
            <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-basic"
                        label="Category Name"
                        variant="outlined"
                        fullWidth
                        size="large"
                        helperText={errorText}
                        error={errorText}
                        value={category.name}
                        onChange={(e) => setCategory({ ...category, name: e.target.value })}
                    />
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained" color="primary" component="span" onClick={handleSubmit}>
                        Create
                    </Button>
                </Grid>
            </Grid>
            <Divider
                variant="middle"
                sx={{
                    my: 3,
                    mx: 'auto',
                    width: '100%',
                    alignSelf: 'center',
                    borderColor: 'border',
                    border: '1px solid #e0e0e0'
                }}
            />
            <CategoryList />
        </MainCard>
    );
};

export default CategoryForm;
