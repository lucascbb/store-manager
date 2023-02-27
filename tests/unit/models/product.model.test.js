const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/product.model');
const connection = require('../../../src/models/connection')
const { products, newProduct, productUpdated } = require('./mocks/product.model.mock')

describe('Teste de unidade do Model - Product', function () {

  it('Recuperando a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productModel.findAll();

    expect(result).to.be.deep.equal(products);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productModel.findById(1);

    expect(result).to.be.deep.equal(products[0]);
  });

  it('Inserindo um novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await productModel.insert("Batman");

    expect(result).to.be.equal(newProduct[newProduct.length - 1].id);
  });

  it('Atualizando um produto', async function () {
    sinon.stub(connection, 'execute').resolves(productUpdated);
    const result = await productModel.getUpadeteProduct("AtualizandoProduto", 1);

    expect(result.id).to.be.deep.equal(1);
    expect(result.name).to.be.deep.equal("AtualizandoProduto");
  });

  it('Deletando um produto', async function () {
    sinon.stub(connection, 'execute').resolves(productUpdated);
    const result = await productModel.deleteProduct(1);

    expect(result).to.be.deep.equal();
    expect(result).to.be.deep.equal();
  });

  afterEach(function () {
    sinon.restore();
  });
});