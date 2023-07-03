import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import OrderModel, {
  OrderSequelizeModel,
} from "../../../src/database/models/order.model";
import app from "../../../src/app";
import ordersMock from "../../mocks/orders.mock";

chai.use(chaiHttp);

describe("GET /orders", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("listagem de ordens", function () {
    it("findAll", async function () {
      const ordList = ordersMock.orderList.map((o) =>
      OrderModel.build(o)
      );
      sinon.stub(OrderModel, "findAll").resolves(ordList);

      const { status, body } = await chai.request(app).get("/orders");

      expect(status).to.equal(200);
      expect(body).to.deep.equal(ordersMock.orderList);
    });
  });
});
