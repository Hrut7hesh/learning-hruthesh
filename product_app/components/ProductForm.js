import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const ProductForm = ({ productId, onProductSaved = () => {}, onCancel = () => {} }) => {
    const [product, setProduct] = useState({ name: '', price: '', availability: 'available' });
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (productId) {
            setIsEdit(true);
            axios.get(`http://localhost:3000/products/${productId}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error(error));
        } else {
            setIsEdit(false);
            setProduct({ name: '', price: '', availability: 'available' });
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = isEdit 
            ? axios.put(`http://localhost:3000/products/${productId}`, product)
            : axios.post('http://localhost:3000/products', product);

        request
            .then(() => {
                onProductSaved();
            })
            .catch(error => console.error(error))
            .finally(() => {
                onCancel();
            });
    };

    return (
        <div className="product-form-container">
            <div className="form-section">
                <h2 className="form-title">{isEdit ? 'Edit Product' : 'Create Product'}</h2>
                <form onSubmit={handleSubmit} className="product-form">
                    <div className="form-group">
                        <label className="form-label">
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Price:
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Availability:
                            <select
                                name="availability"
                                value={product.availability}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="available">Available</option>
                                <option value="not available">Not Available</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="form-button">{isEdit ? 'Update' : 'Create'}</button>
                        <button type="button" onClick={onCancel} className="form-button form-button-cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
