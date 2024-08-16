import React, { useEffect, useState } from 'react';
import { Button, Typography, Container, Paper } from '@mui/material';
import { fetchRestaurantById, deleteRestaurant } from './Api';

const RestaurantDetails = ({ restaurantId, onClose, onEdit, showSnackbar }) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const getRestaurant = async () => {
            try {
                const data = await fetchRestaurantById(restaurantId);
                setRestaurant(data.data);
            } catch (error) {
                console.error(`Error fetching restaurant with ID ${restaurantId}:`, error);
                showSnackbar('Error fetching restaurant details', 'error');
            }
        };
        getRestaurant();
    }, [restaurantId]);

    const handleDelete = async () => {
        try {
            await deleteRestaurant(restaurantId);
            showSnackbar('Restaurant deleted successfully', 'success');
            onClose();
        } catch (error) {
            console.error('Error deleting restaurant:', error);
            showSnackbar('Error deleting restaurant', 'error');
        }
    };

    if (!restaurant) return <Typography>Loading...</Typography>;

    return (
        <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h6">Restaurant Details</Typography>
            <Typography variant="body1"><strong>Name:</strong> {restaurant.attributes.name}</Typography>
            <Typography variant="body1"><strong>Email:</strong> {restaurant.attributes.email}</Typography>
            <Typography variant="body1"><strong>Status:</strong> {restaurant.attributes.status ? 'Active' : 'Inactive'}</Typography>
            <Button variant="contained" color="primary" onClick={() => onEdit(restaurant)} style={{ marginRight: '10px' }}>
                Edit
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
            </Button>
            <Button variant="outlined" onClick={onClose} style={{ marginLeft: '10px' }}>
                Close
            </Button>
        </Container>
    );
};

export default RestaurantDetails;
