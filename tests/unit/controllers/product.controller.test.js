const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const { productListMock, messageError, newProduct, updateProduct, validEditProduct, invalidProduct } = require('./mocks/product.controller.mock')

describe('Teste de unidade do Controller - Product', function () {
  describe('Listando os Produtos', function () {
    it('Deve retornar o status 200 e a lista', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'findAll').resolves({ type: null, message: productListMock });

      await productController.listProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productListMock);
    });
    it('Deve retornar o status 400 e a mensagem de erro', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'findAll').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

      await productController.listProducts(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(messageError[0]);
    });
  });  

  describe('Listando os Produtos por ID', function () {  
    it('Deve retornar o status 200 e um produto do ID', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'findById').resolves({ type: null, message: productListMock[0]});

      await productController.getProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productListMock[0]);
    });

    it('Deve retornar o status 404 e a mensagem de erro ID invalido', async function () {
      const res = {};
      const req = { params: { id: 4 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'findById').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

      await productController.getProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(messageError[0]);
    });
  });  

  describe('Adicionando os Produtos', function () {    
    it('Deve adicionar um novo produto na lista', async function () {
      const res = {};
      const req = { body: { name: "Tenis" } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'createProduct').resolves({ type: null, message: newProduct });
      
      await productController.addProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newProduct);
    });

    it('Retorna um erro caso tente adicionar um name menor que 5 caracteres', async function () {
      const res = {};
      const req = { body: { name: "Ovo" } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'createProduct').resolves({
        type: 'NAME_SHORT',
        message: '"name" length must be at least 5 characters long',
      });
        
      await productController.addProduct(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: '"name" length must be at least 5 characters long',
      });
    });
  });

  describe('Editando produto', function () {    
    it('Deve editar um produto da lista', async function () {
      const res = {};
      const req = validEditProduct;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getUpdateProduct').resolves({ type: null, message: updateProduct });
        
      await productController.putProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(updateProduct);
    });

    it('Retorna um erro caso tente editar um produto da lista com menos que 5 caracteres', async function () {
      const res = {};
      const req = invalidProduct;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getUpdateProduct').resolves({
        type: 'NAME_SHORT',
        message: '"name" length must be at least 5 characters long',
      });

      await productController.putProduct(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
    });
  }); 

  afterEach(function () { sinon.restore() });
});