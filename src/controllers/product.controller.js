const productService = require('../services/product.service');
const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  const { type, message } = await productService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await productService.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

const addProduct = async (req, res) => { 
  const { name } = req.body;

  const { type, message } = await productService.createProduct(name);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const putProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await productService.getUpdateProduct(name, id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productService.getDeleteProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json();
};

const searchProduct = async (req, res) => {
  const { q } = req.query;

  const { type, message } = await productService.getSearchProduct(q);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  listProducts,
  getProduct,
  addProduct,
  putProduct,
  deleteProduct,
  searchProduct,
};