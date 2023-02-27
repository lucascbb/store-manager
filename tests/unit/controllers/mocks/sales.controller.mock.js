const salesListMock = [
  { saleId: 1, date: "2023-02-19T04:17:50.000Z", productId: 1, quantity: 5 },
  { saleId: 1, date: "2023-02-19T04:17:50.000Z", productId: 2,quantity: 10 },
  { saleId: 2, date: "2023-02-19T04:17:50.000Z", productId: 3, quantity: 15 }
]

const idSalesMock = [
  { saleId: 2, date: "2023-02-19T04:17:50.000Z", productId: 3, quantity: 15 },
]

const addSalesMock = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 25
    }
  ]
};

const oneKey = {
  body: [
    {
      "quantity": 25
    }
  ],
}

const completeKeys = {
  body: [
    {
      "productId": 1,
      "quantity": 25
    }
  ],
};

const invalidId = {
  params: { id: 9999 },
};

const validId = {
  params: { id: 9999 },
};

module.exports = {
  salesListMock,
  idSalesMock,
  addSalesMock,
  oneKey,
  completeKeys,
  invalidId,
  validId,
};