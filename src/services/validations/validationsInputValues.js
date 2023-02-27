const { idSchema, nameSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: '' };
};

const validateName = (name) => {
  const { error } = nameSchema.validate(name);
  if (!name) { return { type: 'NAME_NOT_FOUND', message: '"name" is required' }; }
  if (error) {
    return { type: 'NAME_SHORT', message: '"name" length must be at least 5 characters long' }; 
  }
  return { type: null, message: '' };
};

const validateSales = (sales) => {
  if (sales.some((ele) => ele.quantity <= 0)) {
    return { type: 'SALES_UNDER', message: '"quantity" must be greater than or equal to 1' };
  }
  if (sales.some((ele) => !ele.productId)) {
    return { type: 'SALES_NOT_FOUND', message: '"productId" is required' }; 
  }
  if (sales.some((ele) => !ele.quantity)) {
    return { type: 'SALES_NOT_FOUND', message: '"quantity" is required' };
  }
  if (sales.some((ele) => (ele.productId > 3 || ele.productId < 1))) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null, message: '' };
};

const validateSaleID = (saleId) => {
  if (!saleId || saleId === '0') { return { type: 'SALE_NOT_FOUND', message: 'Sale not found' }; }
  return { type: null, message: '' };
};

const validateUpdate = (upadeteProduct, id) => {
  if (!upadeteProduct) return { type: 'NAME_NOT_FOUND', message: '"name" is required' };
  if (!id) return { type: 'UPDATE_NOT_FOUND', message: 'Product not found' };
  if (upadeteProduct.length <= 4) {
    return { type: 'NAME_SHORT', message: '"name" length must be at least 5 characters long' };
  }
  return { type: null, message: '' };
};

const validateSearch = (searched, searching) => {
  if (searched.length === 0) {
 return {
   type: 'SEARCH_NOT_FOUND',
   message: `Nenhum produto foi achado com o termo: ${searching}`,
  }; 
}
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateName,
  validateSales,
  validateSaleID,
  validateUpdate,
  validateSearch,
};