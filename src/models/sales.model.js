const camelize = require('camelize');
const connection = require('./connection');

const sql = ` 
  StoreManager.sales.date, 
  StoreManager.sales_products.product_id, 
  StoreManager.sales_products.quantity
  FROM 
  StoreManager.sales_products
  INNER JOIN 
  StoreManager.sales
  ON 
  StoreManager.sales_products.sale_id = StoreManager.sales.id
`;

const findAll = async () => {
  const [result] = await connection.execute(`SELECT StoreManager.sales_products.sale_id, ${sql}`);
  return camelize(result);
};

const findById = async (idSales) => {  
  const [result] = await connection.execute(`SELECT ${sql} WHERE sale_id = ${idSales}`);
  return camelize(result);
};

const insert = async (sales) => {
  const insertSale = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)', [new Date()],
  );

  const promisesSales = sales.map((sale) =>
    connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
      [insertSale[0].insertId, sale.productId, sale.quantity],
  ));
  await Promise.all(promisesSales);

  return insertSale[0].insertId;
};

const updatedSales = async (id, updatedS) => {
  const sqlUpdate = `
    UPDATE StoreManager.sales_products SET quantity = (?) WHERE sale_id = (?) && product_id = (?)`;

  const promises = updatedS.map((item) => {
    const quntidade = item.quantity;
    const idProduto = item.productId;
    return connection.execute(sqlUpdate, [quntidade, id, idProduto]);
  });
  await Promise.all(promises);

  const obj = {
    saleId: id,
    itemsUpdated: updatedS,
  };

  return obj;
};

const deleteSales = async (idSales) => {
  await connection.execute('DELETE FROM StoreManager.sales WHERE id = (?)',
    [idSales]);
};

module.exports = {
  findAll,
  findById,
  insert,
  updatedSales,
  deleteSales,
};
