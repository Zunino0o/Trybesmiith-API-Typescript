import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { Request, Response } from "express";

chai.use(sinonChai);

import ProductModel from "../../../src/database/models/product.model";
// import productsService from "../../../src/services/products.service";
import productsController from "../../../src/controllers/products.controller";
import productsMock from "../../mocks/products.mock";

describe("ProductsController", function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe("create", function () {
    it("cria produto com sucesso", async function () {
      req.body = productsMock.validInput;
      const response = ProductModel.build(productsMock.validProduct);
      sinon.stub(ProductModel, "create").resolves(response);

      await productsController.registerProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(productsMock.validOutput);
    });
  });
});
