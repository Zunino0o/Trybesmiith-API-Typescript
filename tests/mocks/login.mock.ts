const validPassword = "1s2d3f";

const invalidEmailLogin = { username: "", password: validPassword };

const validUsername = "Nico";

const invalidPasswordLogin = { username: validUsername, password: "" };

const userNotFoundLogin = {
  username: "errrrooouuu@faustao.com",
  password: validPassword,
};

const validLogin = { username: validUsername, password: validPassword };

const wrongPasswordLogin = {
  username: validUsername,
  password: "wordpass",
};

const codedPassword =
  "$2y$10$qKmEBMrIMkg9V26nCtoJyOSmGfwRpBfYr3xtH68HPwf7yMMkEpbwm";

const user = {
  id: 1,
  username: validUsername,
  password: codedPassword,
  name: "user",
  vocation: "Barbarian",
  level: 10,
};

const invalidDataError = { message: '"username" and "password" are required' };

const unauthorizedError = {
  message: "Username or password invalid",
};

export default {
  invalidEmailLogin,
  invalidPasswordLogin,
  userNotFoundLogin,
  wrongPasswordLogin,
  user,
  validLogin,
  invalidDataError,
  unauthorizedError,
};
