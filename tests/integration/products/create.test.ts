import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productsMock from '../../mocks/products.mock';
// import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/products.service';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () { sinon.restore(); });

  describe('manda input valido', function () {
    it('retorna produto com id', async function () {
      const requestBody = productsMock.validInput;
      sinon.stub(productsService, 'registerProduct').resolves({ status: null, data: productsMock.validOutput })

      const { status, body } = await chai.request(app).post('/products').send(requestBody);

      expect(status).to.equal(201);
      expect(body).to.deep.equal(productsMock.validOutput);
    })
  })
 

  
});
