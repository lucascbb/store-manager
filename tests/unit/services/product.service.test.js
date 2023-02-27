const { expect } = require('chai');
const sinon = require('sinon');
const productService = require('../../../src/services/product.service')
const productModel = require('../../../src/models/product.model')
const { products, oneProduct } = require('./mocks/product.service.mock')

describe('Teste de unidade do Service - Product', function () {
  describe('Verificando service todos produtos', function () {
    it('retorna a lista completa de todos produtos', async function () {
      sinon.stub(productModel, 'findAll').resolves(products);

      const result = await productService.findAll();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(products);
    });
  });

  describe('Teste de unidade do Service - Product ID', function () {
    it('retorna um produto caso receba o ID válido', async function () {
      sinon.stub(productModel, 'findById').resolves(oneProduct);

      const result = await productService.findById(1);

      expect(result.type).to.be.equal(null);
      expect(result.message[0]).to.deep.equal(oneProduct[0]);
    });
    it('retorna um erro caso receba um ID inválido', async function () {
      sinon.stub(productModel, 'findById').resolves(undefined);

      const result = await productService.findById(4);

      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });
  });

  describe('Teste de unidade do Service - Product', function () {
    it('Adiconar um produto na lista', async function () {

      sinon.stub(productModel, 'insert').resolves(1);
      sinon.stub(productModel, 'findById').resolves(oneProduct[0]);
      

      const result = await productService.createProduct("Martelo de Thor");

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(oneProduct[0]);
    });
    it('Erro se tentar adiconar um produto com menos de 5 caracteres', async function () {
      sinon.stub(productModel, 'insert').resolves(1);
      sinon.stub(productModel, 'findById').resolves(oneProduct[0]);

      const result = await productService.createProduct("Ovo");

      expect(result.type).to.be.equal('NAME_SHORT');
      expect(result.message).to.deep.equal('"name" length must be at least 5 characters long');
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
