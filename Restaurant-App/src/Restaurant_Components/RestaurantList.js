import React from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const RestaurantList = ({ restaurants, onSelectRestaurant, isDetailsVisible }) => {
    return (
        <List>
            {restaurants.map((restaurant) => (
                <ListItem key={restaurant.id}>
                    <ListItemText primary={restaurant.attributes.name} />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => onSelectRestaurant(restaurant.id)}
                    >
                        Details
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default RestaurantList;
