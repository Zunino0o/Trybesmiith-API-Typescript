import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../../../src/app";
import loginMock from "../../mocks/login.mock";
import UserModel from "../../../src/database/models/user.model";

chai.use(chaiHttp);

describe("POST /login", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("body faltando informacao, retorna erro:", function () {
    it("ao não receber um username", async function () {
      const loginBody = loginMock.invalidEmailLogin;

      const { status, body } = await chai
        .request(app)
        .post("/login")
        .send(loginBody);

      expect(status).to.equal(400);
      expect(body).to.be.deep.equal(loginMock.invalidDataError);
    });

    it("ao não receber uma senha", async function () {
      const loginBody = loginMock.invalidPasswordLogin;

      const { status, body } = await chai
        .request(app)
        .post("/login")
        .send(loginBody);

      expect(status).to.equal(400);
      expect(body).to.be.deep.equal(loginMock.invalidDataError);
    });
  });

  describe('body com informacoes erradas, retorna erro:', function () {
  it("ao receber um username inexistente", async function () {
    const loginBody = loginMock.userNotFoundLogin;
    sinon.stub(UserModel, "findOne").resolves(null);

    const { status, body } = await chai
      .request(app)
      .post("/login")
      .send(loginBody);

    expect(status).to.equal(401);
    expect(body).to.be.deep.equal(loginMock.unauthorizedError);
  });

  it("ao receber um username existente e uma senha errada", async function () {
    const loginBody = loginMock.wrongPasswordLogin;
    const findUserMock = UserModel.build(loginMock.user);
    sinon.stub(UserModel, "findOne").resolves(findUserMock);

    const { status, body } = await chai
      .request(app)
      .post("/login")
      .send(loginBody);

    expect(status).to.equal(401);
    expect(body).to.be.deep.equal(loginMock.unauthorizedError);
  });
})

// describe('body com informacoes corretas', function () {
//   it.only("retorna um token de login", async function () {
//     const loginBody = loginMock.validLogin;
//     const findUserMock = UserModel.build(loginMock.user);
//     sinon.stub(UserModel, "findOne").resolves(findUserMock);
    
//     const { status, body } = await chai
//     .request(app)
//     .post("/login")
//     .send(loginBody);
    
//     expect(status).to.equal(200);
//     expect(body).to.have.key("token");
//   });
// })
});
