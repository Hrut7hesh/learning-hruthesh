import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/restaurants';

export const fetchRestaurants = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
};

export const fetchRestaurantById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching restaurant with ID ${id}:`, error);
        throw error;
    }
};

export const addRestaurant = async (data) => {
    try {
        const response = await axios.post(apiUrl, { data });
        return response.data;
    } catch (error) {
        console.error('Error adding restaurant:', error);
        throw error;
    }
};

export const updateRestaurant = async (id, data) => {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, { data });
        return response.data;
    } catch (error) {
        console.error(`Error updating restaurant with ID ${id}:`, error);
        throw error;
    }
};

export const deleteRestaurant = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting restaurant with ID ${id}:`, error);
        throw error;
    }
};
