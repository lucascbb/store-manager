const productModel = require('../models/product.model');
const schema = require('./validations/validationsInputValues');

const findAll = async () => {
  const allProducts = await productModel.findAll();
  return { type: null, message: allProducts };
};

const findById = async (productId) => {
  const error = schema.validateId(productId);
  if (error.type) return error;

  const product = await productModel.findById(productId);
  
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const createProduct = async (nameProduct) => {
  const error = schema.validateName(nameProduct);
  if (error.type) return error;

  const productID = await productModel.insert({ name: nameProduct });
  const newProduct = await productModel.findById(productID);

  if (!newProduct) return { type: 'NAME_NOT_FOUND', message: '"name" is required' };
  return { type: null, message: newProduct };
};

const getUpdateProduct = async (upadeteProduct, idProduct) => {
  const error = schema.validateUpdate(upadeteProduct, idProduct);
  if (error.type) return error;

  const updatedProduct = await productModel.getUpadeteProduct(upadeteProduct, idProduct);
  const allProducts = await productModel.findAll();

  if (!allProducts.some((ele) => ele.name === upadeteProduct && ele.id === Number(idProduct))
  ) return { type: 'UPDATE_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: updatedProduct };
};

const getDeleteProduct = async (idDelete) => {
  const allProducts = await productModel.findAll();
  const deleted = await productModel.deleteProduct(idDelete);

  if (!idDelete || idDelete > allProducts.length) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }; 
  }

  return { type: null, message: deleted };
};

const getSearchProduct = async (searched) => {
  const search = await productModel.searchProduct(searched);

  const error = schema.validateSearch(search, searched);
  if (error.type) return error;
  
  return { type: null, message: search };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  getUpdateProduct,
  getDeleteProduct,
  getSearchProduct,
};
