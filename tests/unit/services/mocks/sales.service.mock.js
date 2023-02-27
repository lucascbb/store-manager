const sales = [
  {
    saleId: 1,
    date: "2023-02-19T04:17:50.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2023-02-19T04:17:50.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2023-02-19T04:17:50.000Z",
    productId: 3,
    quantity: 15
  }
];

const salesId = [
  { date: "2023-02-19T04:17:50.000Z", productId: 1, quantity: 5 },
  { date: "2023-02-19T04:17:50.000Z", productId: 2, quantity: 10 }
];

const createBody = [{ productId: 1, quantity: 23 }];

const createResult = {
  id: 1,
  itemsSold: [
    {
      productId: 1,
      quantity: 23
    }
  ]
};

module.exports = {
  sales,
  salesId,
  createBody,
  createResult,
}