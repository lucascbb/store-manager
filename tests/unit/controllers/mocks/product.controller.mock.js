const productListMock = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" }
]

const newProduct = {
  id: 1, name: 'Capa do Batman',
}

const updateProduct = {
  id: 4, name: 'Tartaruga Ninja',
}

const messageError = [{ message: "Product not found" }];

const validEditProduct = {
  params: { id: 1 },
  body: { name: "Tartaruga Ninja" },
};

const invalidProduct = {
  params: { id: 1 },
  body: { name: "Tart" },
};

module.exports = {
  productListMock,
  messageError,
  newProduct,
  updateProduct,
  validEditProduct,
  invalidProduct,
};
