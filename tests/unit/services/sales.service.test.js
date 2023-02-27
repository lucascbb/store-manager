const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/sales.service')
const salesModel = require('../../../src/models/sales.model')
const { sales, salesId, createBody, createResult } = require('./mocks/sales.service.mock')

describe('Teste de unidade do Service - Sales', function () {
  describe('Verificando service Sales', function () {
    it('Retorna a lista completa de todas Sales', async function () {
      sinon.stub(salesModel, 'findAll').resolves(sales);

      const result = await salesService.findAll();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(sales);
    });
  });

  describe('Teste de unidade do Service - Sales', function () {
    it('Retorna um Sale caso receba o ID válido', async function () {
      sinon.stub(salesModel, 'findById').resolves(salesId);
      sinon.stub(salesModel, 'findAll').resolves(sales);

      const result = await salesService.findById('1');
      const allSales = await salesService.findAll();

      expect(allSales.message).to.deep.equal(sales);
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(salesId);
    });
  });

  describe('Teste de unidade do Service - Sales', function () {
    it('Adiconar um Sale na lista', async function () {

      sinon.stub(salesModel, 'insert').resolves(1);

      const result = await salesService.createSales(createBody);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(createResult);
    });
  });
  

  afterEach(function () {
    sinon.restore();
  });
});