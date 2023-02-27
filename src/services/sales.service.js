const salesModel = require('../models/sales.model');
const schema = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await salesModel.findAll();
  return { type: null, message: products };
};

const findById = async (idSales) => {
  const error = schema.validateSaleID(idSales);
  if (error.type) return error;

  const salesById = await salesModel.findById(idSales);
  const allSales = await salesModel.findAll();

  if (!allSales.some((ele) => ele.saleId === Number(idSales))) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }

  return { type: null, message: salesById };
};

const createSales = async (sales) => {
  const error = schema.validateSales(sales);
  if (error.type) return error;
  const saleID = await salesModel.insert(sales);

  const obj = {
    id: saleID,
    itemsSold: sales,
  };
  
  return { type: null, message: obj };
};

const getUpdateSales = async (id, salesUpdated) => {
  const error = schema.validateSales(salesUpdated);
  if (error.type) return error;

  const salesById = await salesModel.findById(id);
  const x = await salesModel.updatedSales(id, salesUpdated);

  if (!salesById[0] || salesById.length !== salesUpdated.length) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }
  return { type: null, message: x };
};

const getDeleteSales = async (idDelete) => {
  const allSales = await salesModel.findAll();
  const deleted = await salesModel.deleteSales(idDelete);

  if (!idDelete || idDelete > allSales.length) { 
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }
  return { type: null, message: deleted };
};

module.exports = {
  createSales,
  findAll,
  findById,
  getUpdateSales,
  getDeleteSales,
};