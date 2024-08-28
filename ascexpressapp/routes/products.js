const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.post('/', productsController.createProduct);

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductById);

router.delete('/:id', productsController.deleteProductById);

router.put('/:id', productsController.updateProductById);

router.get('/name/:name', productsController.findProductByName);

router.get('/availability/:availability', productsController.findProductByAvailability);

router.get('/price/:price', productsController.findProductByPrice);

module.exports = router;
