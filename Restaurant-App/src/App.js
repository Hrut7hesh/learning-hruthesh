import React, { useState, useEffect } from 'react';
import AddRestaurantForm from './Restaurant_Components/AddRestaurantForm';
import RestaurantList from './Restaurant_Components/RestaurantList';
import RestaurantDetails from './Restaurant_Components/RestaurantDetails';
import { Container, Typography, Paper, Button, Snackbar, Alert } from '@mui/material';
import { fetchRestaurants } from './Restaurant_Components/Api';

const App = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [editRestaurant, setEditRestaurant] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                const data = await fetchRestaurants();
                setRestaurants(data.data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
                showSnackbar('Failed to fetch restaurants', 'error');
            }
        };
        getRestaurants();
    }, [selectedRestaurantId, isAddFormVisible]);

    const handleAddButtonClick = () => {
        setIsAddFormVisible((prev) => !prev);
        setEditRestaurant(null);
        setSelectedRestaurantId(null);
    };

    const handleEditButtonClick = (restaurant) => {
        setEditRestaurant(restaurant);
        setIsAddFormVisible(true);
        setSelectedRestaurantId(null);
    };

    const handleCloseForm = () => {
        setIsAddFormVisible(false);
        setEditRestaurant(null);
    };

    const handleRestaurantUpdate = (isNewRestaurant) => {
        setSelectedRestaurantId(null);
        setEditRestaurant(null);
        setIsAddFormVisible(false);
        if (isNewRestaurant) {
            showSnackbar('Restaurant added successfully', 'success');
        } else {
            showSnackbar('Restaurant updated successfully', 'success');
        }
    };

    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
        setTimeout(() => {
            setSnackbarOpen(false);
        }, 3000);
    };

    return (
        <Container component={Paper} style={{ padding: '20px', maxWidth: '800px', margin: '20px auto' }}>
            <Typography variant="h4" gutterBottom align="center">
                Restaurant Admin Page
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddButtonClick}
                style={{ marginBottom: '20px', borderRadius: '8px' }}
            >
                {isAddFormVisible ? 'Hide Form' : 'Add Restaurant'}
            </Button>
            {isAddFormVisible && (
                <AddRestaurantForm
                    onFormClose={handleCloseForm}
                    restaurant={editRestaurant}
                    onFormSubmit={(isNewRestaurant) => handleRestaurantUpdate(isNewRestaurant)}
                    showSnackbar={showSnackbar}
                />
            )}
            <RestaurantList
                restaurants={restaurants}
                onSelectRestaurant={setSelectedRestaurantId}
                isDetailsVisible={!selectedRestaurantId}
            />
            {selectedRestaurantId && !isAddFormVisible && (
                <RestaurantDetails
                    restaurantId={selectedRestaurantId}
                    onClose={() => setSelectedRestaurantId(null)}
                    onEdit={handleEditButtonClick}
                    showSnackbar={showSnackbar}
                />
            )}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                style={{ position: 'absolute', top: 20, right: 20 }}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} variant="filled">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default App;
