const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const jwtExpireIn = process.env.JWT_EXPIRES_IN;

module.exports = function makeLogin({ authRepository }) {
  return async function login({ username, password }) {
    if (!username || !password) throw new Error("username & password required");

    const user = await authRepository.findUserByUsername(username);
    if (!user) throw new Error("Invalid credentials");

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new Error("Invalid credentials");

    const token = jwt.sign(
      { id: user.id, username: user.username },
      jwtSecret,
      { expiresIn: jwtExpireIn }
    );

    return { token };
  };
};
