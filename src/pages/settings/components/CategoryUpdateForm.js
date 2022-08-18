import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

// Store Imports
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getAllCategories, updateCategory } from '../../../store/reducers/category/categoryService';

export default function CategoryUpdateForm({ open, setOpen, category, setCategory }) {
    const dispatch = useDispatch();
    console.log('category', category);

    // UseState Hooks
    const [errorText, setErrorText] = React.useState('');

    // Function to handle update category
    const handleUpdate = async () => {
        if (category.name.length < 1) {
            setErrorText('Category name is required');
        } else {
            setOpen(false);
            await updateCategory(category._id, category, dispatch);
            getAllCategories(dispatch);
            setErrorText('');
        }
    };
    return (
        <div>
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">
                <Grid container columnSpacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12}>
                        <DialogTitle variant="h5">Update Category</DialogTitle>
                    </Grid>
                    <Grid item xs={12}>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Category Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={category.name}
                                helperText={errorText}
                                error={errorText}
                                onChange={(e) => setCategory({ ...category, name: e.target.value })}
                            />
                        </DialogContent>
                    </Grid>
                </Grid>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} color="primary" variant="contained">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
