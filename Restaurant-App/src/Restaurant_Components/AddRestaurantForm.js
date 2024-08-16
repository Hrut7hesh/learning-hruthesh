import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { addRestaurant, updateRestaurant } from './Api';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must not exceed 50 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    status: Yup.boolean()
});

const AddRestaurantForm = ({ onFormClose, restaurant, onFormSubmit, showSnackbar }) => {
    const handleSubmit = async (values, { resetForm }) => {
        try {
            if (restaurant) {
                await updateRestaurant(restaurant.id, values);
                onFormSubmit(false);
            } else {
                await addRestaurant(values);
                onFormSubmit(true);
            }
            resetForm();
        } catch (error) {
            console.error('Error saving restaurant:', error);
            showSnackbar('Error saving restaurant', 'error');
        }
    };

    return (
        <Formik
            initialValues={{
                name: restaurant ? restaurant.attributes.name : '',
                email: restaurant ? restaurant.attributes.email : '',
                status: restaurant ? restaurant.attributes.status : true,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, errors, touched }) => (
                <Form>
                    <Typography variant="h6" gutterBottom>
                        {restaurant ? 'Edit Restaurant' : 'Add Restaurant'}
                    </Typography>
                    <Field
                        name="name"
                        as={TextField}
                        label="Restaurant Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                    />
                    <Field
                        name="email"
                        as={TextField}
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <FormControlLabel
                        control={
                            <Field
                                name="status"
                                as={Checkbox}
                                color="primary"
                                checked={values.status}
                                onChange={handleChange}
                            />
                        }
                        label={values.status ? 'Active' : 'Inactive'}
                    />
                    <br />
                    <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>
                        {restaurant ? 'Update Restaurant' : 'Add Restaurant'}
                    </Button>
                    <Button variant="outlined" onClick={onFormClose}>
                        Cancel
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default AddRestaurantForm;
