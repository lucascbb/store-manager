const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return camelize(result);
};

const findById = async (productID) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productID],
  );
  
  return camelize(passenger);
};

const insert = async (productName) => {
  const columns = Object.keys(productName).join(', ');
  const placeholders = Object.keys(productName).map((_key) => '?').join(', ');
    
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(productName)],
  );

  return insertId;
};

const getUpadeteProduct = async (newProduct, id) => {
  await connection.execute('UPDATE StoreManager.products SET name = (?) WHERE id = (?)',
    [newProduct, id]);
  
  return { id, name: newProduct };
};

const deleteProduct = async (idDelete) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = (?)',
    [idDelete]);
};

const searchProduct = async (searhced) => {
  const allProducts = await connection.execute('SELECT * FROM StoreManager.products');

  return allProducts[0].filter((ele) => ele.name.toLocaleLowerCase()
    .includes(searhced.toLocaleLowerCase()));
};

module.exports = {
  findAll,
  findById,
  insert,
  getUpadeteProduct,
  deleteProduct,
  searchProduct,
};