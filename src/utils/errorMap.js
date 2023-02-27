const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  NAME_NOT_FOUND: 400,
  NAME_SHORT: 422,
  SALES_NOT_FOUND: 400,
  SALES_UNDER: 422,
  SALE_NOT_FOUND: 404,
  UPDATE_NOT_FOUND: 404,
  SEARCH_NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};