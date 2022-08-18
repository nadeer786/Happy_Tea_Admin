import React from 'react';
// MUI Components
import { Grid, Typography, TextField, Button, Divider, Card, IconButton } from '@mui/material';

// Ant Design Icons
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// Local Components
import MainCard from 'components/MainCard';
import CategoryUpdateForm from './CategoryUpdateForm';

// Store Imports
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getAllCategories, updateCategory } from '../../../store/reducers/category/categoryService';

const CategoryList = () => {
    const { categories } = useSelector((state) => state.categorySlice);
    const dispatch = useDispatch();

    // UseState Hooks
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState({});

    // Function to handle delete category
    const handleDelete = async (id) => {
        await deleteCategory(id, dispatch);
        getAllCategories(dispatch);
    };
    // Function to open update category form
    const handleOpen = (category) => {
        setOpen(true);
        setCategory(category);
    };
    return (
        <Grid container rowSpacing={2} columnSpacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
            {categories.map((category) => (
                <Grid item xs={12}>
                    <Card
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 1,
                            borderRadius: 'borderRadius',
                            border: '1px solid #e0e0e0'
                        }}
                    >
                        <Grid>
                            <Typography>{category.name}</Typography>
                        </Grid>
                        <Grid>
                            <IconButton
                                color="primary"
                                size="medium"
                                variant="contained"
                                onClick={() => {
                                    handleOpen(category);
                                }}
                            >
                                <EditOutlined />
                            </IconButton>
                            <IconButton
                                color="error"
                                size="medium"
                                variant="contained"
                                onDoubleClick={() => {
                                    handleDelete(category._id);
                                }}
                            >
                                <DeleteOutlined />
                            </IconButton>
                        </Grid>
                    </Card>
                </Grid>
            ))}
            <CategoryUpdateForm open={open} setOpen={setOpen} category={category} setCategory={setCategory} />
        </Grid>
    );
};

export default CategoryList;
