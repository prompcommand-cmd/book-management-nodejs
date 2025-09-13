const bcrypt = require("bcryptjs");

module.exports = function makeRegister({ authRepository }) {
  return async function register({ username, password }) {
    if (!username || !password) throw new Error("username & password required");

    const existing = await authRepository.findUserByUsername(username);
    if (existing) throw new Error("Username already taken");

    const hashed = await bcrypt.hash(password, 10);
    const user = await authRepository.createUser({
      username,
      password: hashed,
    });

    return { id: user.id, username: user.username };
  };
};
