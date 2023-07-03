import { expect } from "chai";
import sinon from "sinon";

import productsService from "../../../src/services/products.service";
import ProductModel from "../../../src/database/models/product.model";
import productsMock from "../../mocks/products.mock";

describe("ProductsService", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("create", function () {
    it("cria produto com sucesso", async function () {
      const createOutputMock = ProductModel.build(productsMock.validProduct);
      sinon.stub(ProductModel, "create").resolves(createOutputMock);

      const { status, data } = await productsService.registerProduct(
        productsMock.validInput
      );
      expect(status).to.equal(null);
      expect(data).to.deep.equal(productsMock.validOutput);
    });
  });
});
