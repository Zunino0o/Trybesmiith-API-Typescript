import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import productsMock from "../../mocks/products.mock";
import app from "../../../src/app";
import ProductModel from "../../../src/database/models/product.model";

chai.use(chaiHttp);

describe("GET /products", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("manda requisicao de listagem de produtos", function () {
    it("retorna lista de produtos", async function () {
      const prodList = productsMock.productList.map((p) =>
        ProductModel.build(p)
      );
      sinon.stub(ProductModel, "findAll").resolves(prodList);

      const { status, body } = await chai.request(app).get("/products");

      expect(status).to.equal(200);
      expect(body).to.deep.equal(productsMock.productList);
    });
  });
});
