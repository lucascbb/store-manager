const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();

router.get('/search', productController.searchProduct);

router.get('/', productController.listProducts);

router.get('/:id', productController.getProduct);

router.post('/', productController.addProduct);

router.delete('/:id', productController.deleteProduct);

router.put('/:id', productController.putProduct);

module.exports = router;