import React from 'react';

// MUI imports
import { Typography, Box, Stack, Avatar, Grid, IconButton, Button } from '@mui/material';
import MainCard from 'components/MainCard';

// Local component imports
import CafeteriaList from './components/CafeteriaList';

const Cafeteria = () => {
    return (
        <>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5">Cafeteria</Typography>
                </Grid>
            </Grid>
            <MainCard sx={{ mt: 5 }} title="Cafeteria List">
                <CafeteriaList />
            </MainCard>
        </>
    );
};

export default Cafeteria;
