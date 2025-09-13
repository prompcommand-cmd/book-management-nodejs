const AuthRepositorySequelize = require("../../infratructure/repositories/authRepositorySequelize");

const authRepository = new AuthRepositorySequelize();

const makeUser = require("../../use-cases/users/createUser");
const makeLogin = require("../../use-cases/users/loginUser");

const register = makeUser({ authRepository });
const login = makeLogin({ authRepository });

async function registerController(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await register({ username, password });
    res.json({ message: "User registered", user });
  } catch (err) {
    next(err);
  }
}

async function loginController(req, res, next) {
  try {
    const { username, password } = req.body;
    const { token } = await login({ username, password });
    res.json({ message: "Login successful", token });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  registerController,
  loginController,
};