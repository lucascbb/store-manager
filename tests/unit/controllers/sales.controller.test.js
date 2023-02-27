const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { salesListMock, idSalesMock, addSalesMock, oneKey, completeKeys, invalidId, validId } = require('./mocks/sales.controller.mock')

describe('Teste de unidade do Controller - Sales', function () {
  describe('Listando todas Sales', function () {
    it('Deve retornar toda a lista de vendas', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'findAll').resolves({ type: null, message: salesListMock });

      await salesController.listSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesListMock);
    });

    it('Deve retornar um erro caso a lista de vendas esteja vazia', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'findAll').resolves({ type: 'SALES_NOT_FOUND', message: 'Sale not found' });

      await salesController.listSales(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
    });

    describe('Listando Sales por ID', function () {
      it('Deve retornar a Sale caso seja um ID valido', async function () {
        const res = {};
        const req = validId;

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(salesService, 'findById').resolves({ type: null, message: idSalesMock });

        await salesController.listSalesID(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(idSalesMock);
      });

      it('Deve retornar um erro caso nao exista Sale com ID passado', async function () {
        const res = {};
        const req = invalidId;

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(salesService, 'findById').resolves({ type: 'SALES_NOT_FOUND', message: 'Sale not found' });

        await salesController.listSalesID(req, res);

        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
      });
    })

    describe('Adicionando Sales na lista', function () {  
      it('Deve adicionar uma Sale na lista de vendas', async function () {
        const res = {};
        const req = completeKeys;

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(salesService, 'createSales').resolves({ type: null, message: addSalesMock });

        await salesController.addSales(req, res);

        expect(res.status).to.have.been.calledWith(201);
        expect(res.json).to.have.been.calledWith(addSalesMock);
      });

      it('Deve retornar um erro caso esteja faltando key productId', async function () {
        const res = {};
        const req = oneKey;

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(salesService, 'createSales').resolves({ type: 'SALES_NOT_FOUND', message: '"productId" is required' });

        await salesController.addSales(req, res);

        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({message: '"productId" is required'});
      });
    });  
  }); 

  afterEach(function () {
    sinon.restore();
  });
});