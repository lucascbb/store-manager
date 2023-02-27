const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.get('/', salesController.listSales);

router.get('/:id', salesController.listSalesID);

router.post('/', salesController.addSales);

router.delete('/:id', salesController.deleteSales);

router.put('/:id', salesController.updatedSales);

module.exports = router;