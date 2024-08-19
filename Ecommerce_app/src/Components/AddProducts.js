import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import './AddProducts.css';
import { v4 as uuidv4 } from 'uuid';

function AddProducts() {
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([{ code: "", name: "", excerpt: "", description: "", category: "", price: 0, stock: 0 }]);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        code: Yup.string().required("Product Code is required"),
        name: Yup.string().required("Product Name is required"),
        excerpt: Yup.string().required("Excerpt is required"),
        description: Yup.string().required("Description is required"),
        category: Yup.string().required("Category is required"),
        price: Yup.number().required("Price is required").positive("Price must be positive"),
        stock: Yup.number().required("Stock is required").min(0, "Stock must be zero or greater"),
    });

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/categories")
            .then(response => {
                setCategories(response.data.categories); 
            })
            .catch(error => {
                console.error(error);
            });
    }, []); 

    const handleSubmit = (values, { resetForm }) => {
        axios.post("http://localhost:3000/api/v1/products", values)
            .then(response => {
                console.log(response);
                setData([...data, values]); 
                alert("Product successfully added!");
                navigate('/');
                resetForm(); 
            })
            .catch(err => {
                console.log(err);
                alert("Failed to add product. Please try again.");
            });
    };

    const sixDigitCode = () => {
        const uuid = uuidv4();
        return uuid.slice(0, 6);
    };

    return (
        <Formik
            initialValues={{ code: "", name: "", excerpt: "", description: "", category: "", price: "", stock: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className="addproducts">
                    <div>
                        <Field type="text" name="code" placeholder="Enter Product Code" />
                        <ErrorMessage name="code" component="div" className="error" />
                        <button type="button" onClick={() => setFieldValue('code', sixDigitCode())}>
                            Add Code
                        </button>
                    </div>
                    <div>
                        <Field type="text" name="name" placeholder="Enter Product Name" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>
                    <div>
                        <Field type="text" name="excerpt" placeholder="Enter Excerpt" />
                        <ErrorMessage name="excerpt" component="div" className="error" />
                    </div>
                    <div>
                        <Field type="text" name="description" placeholder="Enter Description" />
                        <ErrorMessage name="description" component="div" className="error" />
                    </div>
                    <div>
                        <Field as="select" name="category">
                            <option value="">Select Category</option>
                            {categories.map(category => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="category" component="div" className="error" />
                    </div>
                    <div>
                        <Field type="number" name="price" placeholder="Enter Price" />
                        <ErrorMessage name="price" component="div" className="error" />
                    </div>
                    <div>
                        <Field type="number" name="stock" placeholder="Enter Stock" />
                        <ErrorMessage name="stock" component="div" className="error" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default AddProducts;
