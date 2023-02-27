const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/sales.model');
const connection = require('../../../src/models/connection')
const { sales } = require('./mocks/sales.model.mock')

describe('Teste de unidade do Model - Sales', function () {
  it('Recuperando a lista de todas Sales', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);
    const result = await salesModel.findAll();

    expect(result).to.be.deep.equal(sales);
  });

  it('Recuperando Sale por ID', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);
    const result = await salesModel.findById(1);

    expect(result).to.be.deep.equal([sales][0]);
  });

  it('Deletando uma Sale', async function () {
    sinon.stub(connection, 'execute').resolves();
    const result = await salesModel.deleteSales(1);

    expect(result).to.be.deep.equal();
  });

  afterEach(function () {
    sinon.restore();
  });
});