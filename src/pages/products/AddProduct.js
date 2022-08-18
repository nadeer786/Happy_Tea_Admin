import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { toast } from 'react-toastify';

// Firebase
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import app from '../../firebase';

// AntD Icons
import { CloudUploadOutlined, CloseCircleOutlined } from '@ant-design/icons';

import {
    Button,
    Checkbox,
    Box,
    Divider,
    FormControlLabel,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Card,
    Select,
    TextField,
    MenuItem,
    TextareaAutosize,
    Input
} from '@mui/material';
import MainCard from 'components/MainCard';
import { getAllCategories } from 'store/reducers/category/categoryService';
import { getAllCafeterias } from 'store/reducers/cafeteria/cafeteriaService';
import { addProduct, getProductById, getProducts } from 'store/reducers/product/productService';
// import { toast } from 'react-toastify';
// ==============================|| ADD NEW PRODUCT OR EDIT A PRODUCT PAGE||============================== //
const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    console.log('params', params);
    const { categories } = useSelector((state) => state.categorySlice);
    const { cafeterias } = useSelector((state) => state.cafeteriaSlice);
    const { isFetching, product } = useSelector((state) => state.productSlice);
    console.log('product', product);

    // Firebase Storage Reference for images upload and download url
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [imageName, setImageName] = useState(null);
    console.log('imageUrl', imageUrl);
    console.log('imageName', imageName);
    // Upload image to firebase storage
    const handleFileUpload = () => {
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        setImageName(fileName);
        try {
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageUrl(downloadURL);
                    });
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
    // Delete image from firebase storage
    const handleDeleteImage = () => {
        const storage = getStorage(app);
        const storageRef = ref(storage, imageName);
        deleteObject(storageRef)
            .then(() => {
                setImageUrl(null);
                setImageName(null);
                setFile(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllCategories(dispatch);
        getAllCafeterias(dispatch);
        if (params.productId) {
            getProductById(dispatch, params.productId);
        }
    }, [dispatch, params.productId]);
    // useEffect(() => {
    //     getProductById(dispatch, params.productId);
    // }, [dispatch, params.productId]);
    return (
        <MainCard title="Add Product">
            <Formik
                initialValues={{
                    name: '',
                    category: '',
                    price: '',
                    description: '',
                    offerPrice: '',
                    cafeteria: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required('Email is required'),
                    category: Yup.string().max(255).required('Password is required'),
                    price: Yup.string().max(255).required('Password is required'),
                    category: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: true }), setSubmitting(false);
                        console.log('values', values);
                        const data = { ...values, image: imageUrl, imageKey: imageName };
                        console.log('data', data);
                        await addProduct(data, dispatch);
                        await getProducts(dispatch);
                        if (isFetching === false) {
                            navigate('/dashboard/products');
                        }
                    } catch (err) {
                        // addProduct(, dispatch);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                        console.log('err', err);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, resetForm, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Card>
                                    <Grid sx={{ p: 2 }}>
                                        <Stack>
                                            <TextField
                                                id="outlined-basic"
                                                label="Product Name"
                                                variant="outlined"
                                                value={values.name}
                                                name="name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                fullWidth
                                                error={Boolean(touched.name && errors.name)}
                                            />
                                            {touched.name && errors.name && <FormHelperText error>{errors.name}</FormHelperText>}
                                        </Stack>
                                        <Stack sx={{ mt: 2 }}>
                                            <FormControl>
                                                <InputLabel id="demo-simple-select-label">Product Category</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    type="text"
                                                    value={values.category}
                                                    name="category"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Select Product Category"
                                                    fullWidth
                                                    error={Boolean(touched.category && errors.category)}
                                                >
                                                    {categories.map((category) => (
                                                        <MenuItem key={category._id} value={category._id}>
                                                            {category.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            {touched.category && errors.category && (
                                                <FormHelperText error>{errors.category}</FormHelperText>
                                            )}
                                        </Stack>
                                        <Grid sx={{ display: 'flex', mt: 2 }}>
                                            <Stack>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Product Price"
                                                    variant="outlined"
                                                    value={values.price}
                                                    name="price"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    type="number"
                                                    error={Boolean(touched.price && errors.price)}
                                                />
                                                {touched.price && errors.price && <FormHelperText error>{errors.price}</FormHelperText>}
                                            </Stack>
                                            <Stack>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Offer Price"
                                                    variant="outlined"
                                                    value={values.offerPrice}
                                                    name="offerPrice"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    type="number"
                                                    sx={{ ml: 3 }}
                                                />
                                            </Stack>
                                        </Grid>
                                        <Stack sx={{ mt: 2 }}>
                                            <FormControl>
                                                <InputLabel id="demo-simple-select-label">Cafeteria</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    type="text"
                                                    value={values.cafeteria}
                                                    name="cafeteria"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Select Cafeteria"
                                                    fullWidth
                                                    error={Boolean(touched.cafeteria && errors.cafeteria)}
                                                >
                                                    {cafeterias.map((cafeteria) => (
                                                        <MenuItem key={cafeteria._id} value={cafeteria._id}>
                                                            {cafeteria.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            {touched.cafeteria && errors.cafeteria && (
                                                <FormHelperText error>{errors.cafeteria}</FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card>
                                    <Grid sx={{ p: 2 }}>
                                        <Stack spacing={1}>
                                            <InputLabel>Product Description</InputLabel>
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                minRows={4}
                                                placeholder="Type Product Production"
                                                fullWidth
                                                style={{ border: '1px solid #e0e0e0', borderRadius: '5px', padding: '10px' }}
                                                onChange={handleChange}
                                                value={values.description}
                                                name="description"
                                                onBlur={handleBlur}
                                            />
                                        </Stack>
                                        <Grid
                                            spacing={1}
                                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}
                                        >
                                            <Stack>
                                                <InputLabel>Upload Image</InputLabel>
                                                <Input
                                                    id="contained-button-file"
                                                    type="file"
                                                    onChange={(e) => setFile(e.target.files[0])}
                                                    name="image"
                                                    // style={{ display: 'none' }}
                                                />
                                            </Stack>
                                            <Stack sx={{ mt: 'auto' }}>
                                                <Button variant="contained" color="primary" component="span" onClick={handleFileUpload}>
                                                    Upload
                                                </Button>
                                            </Stack>
                                        </Grid>
                                        {imageUrl && (
                                            <Grid sx={{ mt: 2 }}>
                                                <Box sx={{ position: 'relative' }}>
                                                    <img
                                                        src={imageUrl}
                                                        alt="product"
                                                        style={{ width: '150px', height: '100px', borderRadius: '8px' }}
                                                    />
                                                    <IconButton sx={{ position: 'absolute', ml: '-36px' }} onClick={handleDeleteImage}>
                                                        <CloseCircleOutlined
                                                            style={{
                                                                borderRadius: '50%',
                                                                backgroundColor: 'black',
                                                                padding: '5px',
                                                                color: 'white'
                                                            }}
                                                        />
                                                    </IconButton>
                                                </Box>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid sx={{ mt: 2, display: 'flex', justifyContent: 'end' }}>
                            <Button type="submit" variant="contained" color="primary">
                                {isSubmitting ? 'Creating...' : 'Create Product'}
                            </Button>
                        </Grid>
                    </form>
                )}
            </Formik>
        </MainCard>
    );
};

export default AddProduct;
